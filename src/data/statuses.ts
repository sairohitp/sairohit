/**
 * Designed HTTP status pages. GitHub Pages serves only the custom 404 page automatically;
 * the others are designed and published under /status/<code>/ so they are ready if hosting changes.
 */
export const statuses = {
  200: {
    name: 'OK',
    tone: 'ok',
    title: 'Everything is working',
    message: 'Every page of Sai Rohit’s portfolio built and published successfully. Here is what is live, when it last changed, and the designed error pages.',
  },
  301: {
    name: 'Moved permanently',
    tone: 'info',
    title: 'This page has a new home',
    message: 'The page you asked for has moved. The links below will get you where you were going.',
  },
  403: {
    name: 'Forbidden',
    tone: 'warn',
    title: 'This area is private',
    message: 'You do not have access to this page. Everything public is reachable from the links below.',
  },
  404: {
    name: 'Not found',
    tone: 'warn',
    title: 'This page wandered off the artboard',
    message: 'The link may be old or mistyped. Try one of these instead, or search the sitemap.',
  },
  410: {
    name: 'Gone',
    tone: 'warn',
    title: 'This page was retired',
    message: 'It is no longer part of the site. The work it held lives on in the case studies.',
  },
  500: {
    name: 'Server error',
    tone: 'error',
    title: 'Something broke on our side',
    message: 'This one is not your fault. Please try again in a moment.',
  },
  503: {
    name: 'Service unavailable',
    tone: 'error',
    title: 'Back in a moment',
    message: 'The site is being updated. Please try again shortly.',
  },
} as const;
