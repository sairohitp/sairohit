/*
 * Preferences (theme, accessibility, region, currency, language) and the sticky navigation.
 * Preferences are stored in this browser only. The inline script in Base.astro applies them before paint.
 */
import { prefsConfig, type PrefKey } from '../config/prefs';

type Prefs = Record<PrefKey, string>;
const KEY = 'prefs';
const root = document.documentElement;

function load(): Prefs {
  let saved: Partial<Prefs> = {};
  try {
    saved = JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    saved = {};
  }
  return { ...prefsConfig.defaults, ...saved } as Prefs;
}

function save(p: Prefs) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* Storage can be unavailable (private mode); preferences still apply for this visit. */
  }
}

const systemDark = () => !window.matchMedia('(prefers-color-scheme: light)').matches;

function apply(p: Prefs) {
  const dark = p.theme === 'dark' || (p.theme === 'system' && systemDark());
  root.dataset.theme = dark ? 'dark' : 'light';
  root.dataset.themePref = p.theme;
  for (const k of ['motion', 'text', 'contrast', 'links', 'spacing'] as const) {
    if (p[k] === 'default' || (k === 'motion' && p[k] === 'system')) delete root.dataset[k];
    else root.dataset[k] = p[k];
  }
  if (p.motion === 'system' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) root.dataset.motion = 'reduce';
  root.dataset.region = p.region;
  root.lang = p.region;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111111' : '#f6f6f4');
  formatDates(p.region);
  formatMoney(p);
}

/* Dates: <time data-date datetime="..."> */
function formatDates(region: string) {
  const f = new Intl.DateTimeFormat(region, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  document.querySelectorAll<HTMLTimeElement>('time[data-date]').forEach((t) => {
    const d = new Date(t.dateTime);
    if (!Number.isNaN(d.getTime())) t.textContent = f.format(d);
  });
}

/* Money: rupee figures written as "INR 2.1 crore", "INR 91 lakh" or "INR 2.1 Cr" in the copy. */
const MONEY = /INR\s?([\d.]+)\s?(crore|Cr|lakh)\b/g;
const UNIT: Record<string, number> = { crore: 1e7, Cr: 1e7, lakh: 1e5 };

function wrapMoney() {
  const main = document.querySelector('main');
  if (!main) return;
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) {
    const n = walker.currentNode as Text;
    MONEY.lastIndex = 0;
    if (MONEY.test(n.data)) nodes.push(n);
  }
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    let last = 0;
    node.data.replace(MONEY, (match, num: string, unit: string, offset: number) => {
      frag.append(node.data.slice(last, offset));
      const span = document.createElement('span');
      span.className = 'money';
      span.dataset.inr = String(Number(num) * UNIT[unit]);
      span.dataset.orig = match;
      span.textContent = match;
      frag.append(span);
      last = offset + match.length;
      return match;
    });
    frag.append(node.data.slice(last));
    node.replaceWith(frag);
  });
}

function formatMoney(p: Prefs) {
  const rate = prefsConfig.rates[p.currency as keyof typeof prefsConfig.rates] ?? 1;
  const f = new Intl.NumberFormat(p.region, { style: 'currency', currency: p.currency, notation: 'compact', maximumFractionDigits: 1 });
  document.querySelectorAll<HTMLElement>('.money').forEach((el) => {
    if (p.currency === 'INR') {
      el.textContent = el.dataset.orig!;
      el.removeAttribute('title');
      return;
    }
    el.textContent = `≈ ${f.format(Number(el.dataset.inr) / rate)}`;
    el.title = `${el.dataset.orig}, converted at the ${prefsConfig.ratesSource} reference rate of ${prefsConfig.ratesDate}`;
  });
}

function initPanel(prefs: Prefs) {
  const dialog = document.querySelector<HTMLDialogElement>('[data-prefs]');
  if (!dialog) return;
  const status = dialog.querySelector<HTMLElement>('[data-prefs-status]');
  const sync = () => {
    dialog.querySelectorAll<HTMLElement>('[data-pref]').forEach((group) => {
      const key = group.dataset.pref as PrefKey;
      group.querySelectorAll<HTMLButtonElement>('button').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.value === prefs[key])));
    });
    dialog.querySelectorAll<HTMLSelectElement>('[data-pref-select]').forEach((s) => (s.value = prefs[s.dataset.prefSelect as PrefKey]));
  };
  const set = (key: PrefKey, value: string) => {
    prefs[key] = value;
    save(prefs);
    apply(prefs);
    sync();
    if (status) {
      status.textContent = 'Saved';
      window.setTimeout(() => (status.textContent = ''), 1400);
    }
  };

  document.querySelectorAll('[data-prefs-open]').forEach((b) =>
    b.addEventListener('click', () => {
      sync();
      dialog.showModal();
    }),
  );
  dialog.querySelector('[data-prefs-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.querySelectorAll<HTMLElement>('[data-pref]').forEach((group) => {
    const key = group.dataset.pref as PrefKey;
    const buttons = Array.from(group.querySelectorAll<HTMLButtonElement>('button'));
    buttons.forEach((b, i) => {
      b.addEventListener('click', () => set(key, b.dataset.value!));
      b.addEventListener('keydown', (e) => {
        const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (!step) return;
        e.preventDefault();
        const next = buttons[(i + step + buttons.length) % buttons.length];
        next.focus();
        set(key, next.dataset.value!);
      });
    });
  });
  dialog.querySelectorAll<HTMLSelectElement>('[data-pref-select]').forEach((s) =>
    s.addEventListener('change', () => set(s.dataset.prefSelect as PrefKey, s.value)),
  );
  const translate = dialog.querySelector<HTMLSelectElement>('[data-translate]');
  translate?.addEventListener('change', () => {
    const tl = translate.value;
    if (tl !== 'en') {
      window.open(`https://translate.google.com/translate?sl=en&tl=${tl}&u=${encodeURIComponent(location.href)}`, '_blank', 'noopener');
    }
    translate.value = 'en';
  });
  dialog.querySelector('[data-prefs-reset]')?.addEventListener('click', () => {
    Object.assign(prefs, prefsConfig.defaults);
    save(prefs);
    apply(prefs);
    sync();
  });

  document.querySelectorAll('[data-theme-toggle]').forEach((b) =>
    b.addEventListener('click', () => set('theme', root.dataset.theme === 'dark' ? 'light' : 'dark')),
  );
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (prefs.theme === 'system') apply(prefs);
  });
}

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  // Always visible: once you scroll, the bar condenses into a frosted card and stays at the top.
  let queued = false;
  const update = () => {
    nav.classList.toggle('is-stuck', window.scrollY > 24);
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();

  // Sliding pill: follows the pointer across the links and rests on the current page.
  const list = nav.querySelector<HTMLElement>('[data-nav-links]');
  const pill = nav.querySelector<HTMLElement>('[data-nav-pill]');
  if (list && pill) {
    const links = Array.from(list.querySelectorAll<HTMLAnchorElement>('a'));
    const current = links.find((a) => a.getAttribute('aria-current') === 'page');
    const moveTo = (a?: HTMLElement) => {
      if (!a) {
        pill.style.opacity = '0';
        return;
      }
      pill.style.opacity = '1';
      pill.style.width = `${a.offsetWidth}px`;
      pill.style.transform = `translateX(${a.offsetLeft}px)`;
    };
    pill.classList.add('no-anim');
    moveTo(current);
    requestAnimationFrame(() => pill.classList.remove('no-anim'));
    links.forEach((a) => {
      a.addEventListener('pointerenter', () => moveTo(a));
      a.addEventListener('focus', () => moveTo(a));
    });
    list.addEventListener('pointerleave', () => moveTo(current));
    list.addEventListener('focusout', () => moveTo(current));
    window.addEventListener('resize', () => moveTo(current));
  }

  // Mobile menu sheet
  const toggle = nav.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const sheet = nav.querySelector<HTMLElement>('[data-menu]');
  if (toggle && sheet) {
    const setOpen = (open: boolean) => {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      sheet.hidden = !open;
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 721px)').addEventListener('change', (m) => m.matches && setOpen(false));
  }
}

export function initPrefs() {
  const prefs = load();
  wrapMoney();
  apply(prefs);
  initPanel(prefs);
  initNav();
}
