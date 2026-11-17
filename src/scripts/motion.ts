/*
 * Site-wide motion: scroll reveals with stagger, count-up numbers, parallax,
 * card spotlight, reading progress and the About carousel.
 * Everything respects prefers-reduced-motion.
 */

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const duration = 1400;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${prefix}${Math.round(target * eased).toLocaleString('en-IN')}${suffix}`;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initReveal() {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((parent) => {
    const gap = Number(parent.dataset.stagger) || 80;
    let i = 0;
    for (const child of Array.from(parent.children) as HTMLElement[]) {
      if (child.hasAttribute('data-reveal')) {
        child.style.setProperty('--d', `${Math.min(i, 10) * gap}ms`);
        i++;
      }
    }
  });

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const reveal = (el: HTMLElement) => {
    el.classList.add('is-in');
    if (!reduceMotion()) {
      const counters = el.matches('[data-count]') ? [el] : Array.from(el.querySelectorAll<HTMLElement>('[data-count]'));
      counters.forEach(animateCount);
    }
  };

  if (reduceMotion() || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  elements.forEach((el) => observer.observe(el));
}

function initParallax() {
  if (reduceMotion()) return;
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!elements.length) return;
  let queued = false;
  const update = () => {
    const vh = window.innerHeight;
    for (const el of elements) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const strength = Number(el.dataset.parallax) || 0.06;
      const limit = r.height * 0.035;
      const offset = Math.max(-limit, Math.min(limit, (r.top + r.height / 2 - vh / 2) * -strength));
      el.style.setProperty('--py', `${offset.toFixed(1)}px`);
    }
    queued = false;
  };
  const queue = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  update();
}

function initSpotlight() {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

function initProgress() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (!bar) return;
  let queued = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    queued = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((root) => {
    const track = root.querySelector<HTMLElement>('[data-track]');
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-dot]'));
    let index = 0;
    let timer: number | undefined;

    const go = (n: number) => {
      index = (n + slides.length) % slides.length;
      track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
      slides.forEach((s, i) => {
        s.classList.toggle('is-active', i === index);
        s.setAttribute('aria-hidden', String(i !== index));
      });
      dots.forEach((d, i) => (i === index ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current')));
    };
    const stop = () => window.clearInterval(timer);
    const play = () => {
      stop();
      if (!reduceMotion()) timer = window.setInterval(() => go(index + 1), 4500);
    };

    root.querySelector('[data-prev]')?.addEventListener('click', () => {
      go(index - 1);
      play();
    });
    root.querySelector('[data-next]')?.addEventListener('click', () => {
      go(index + 1);
      play();
    });
    dots.forEach((d) =>
      d.addEventListener('click', () => {
        go(Number(d.dataset.dot));
        play();
      }),
    );

    let startX: number | null = null;
    root.addEventListener('pointerdown', (e) => (startX = e.clientX));
    root.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 40) {
        go(index + (dx < 0 ? 1 : -1));
        play();
      }
      startX = null;
    });

    root.addEventListener('pointerenter', stop);
    root.addEventListener('pointerleave', play);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', play);

    go(0);
    play();
  });
}

function initCompare() {
  document.querySelectorAll<HTMLElement>('[data-compare]').forEach((root) => {
    const range = root.querySelector<HTMLInputElement>('input[type="range"]');
    let touched = false;
    const set = (pct: number) => {
      const v = Math.max(0, Math.min(100, pct));
      root.style.setProperty('--pos', `${v}%`);
      if (range) range.value = String(Math.round(v));
    };
    const fromPointer = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    };
    root.addEventListener('pointerdown', (e) => {
      touched = true;
      root.setPointerCapture(e.pointerId);
      fromPointer(e);
    });
    root.addEventListener('pointermove', (e) => {
      if (root.hasPointerCapture(e.pointerId)) fromPointer(e);
    });
    range?.addEventListener('input', () => {
      touched = true;
      set(Number(range.value));
    });

    // A gentle sweep the first time it comes into view, to show it is interactive.
    if (reduceMotion() || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const keys = [50, 78, 22, 50];
        const seg = 900;
        const start = performance.now() + 500;
        const tick = (now: number) => {
          if (touched) return;
          const t = Math.max(0, now - start);
          const i = Math.min(keys.length - 2, Math.floor(t / seg));
          const local = Math.min(1, (t - i * seg) / seg);
          const eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
          set(keys[i] + (keys[i + 1] - keys[i]) * eased);
          if (t < seg * (keys.length - 1)) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(root);
  });
}

export function initMotion() {
  initReveal();
  initParallax();
  initSpotlight();
  initProgress();
  initCarousels();
  initCompare();
}
