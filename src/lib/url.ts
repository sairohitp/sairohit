/** Prefix internal paths with the configured base path; leave external and hash links untouched. */
export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** True for links that should open in a new tab (absolute URLs and files such as PDFs). */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href) || /\.pdf$/i.test(href);
}
