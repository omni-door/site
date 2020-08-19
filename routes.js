// The route base on next-url-prettifier
// https://github.com/BDav24/next-url-prettifier

const routes = [
  {
    page: 'index',
    prettyUrl: ({ lang }) => `/${lang}/home`,
    prettyUrlPatterns: [
      { pattern: '/' },
      { pattern: '/home' },
      { pattern: '/:lang/home' }
    ]
  },
  {
    page: 'start',
    prettyUrl: ({ lang, step }) =>
      `/${lang}/start/${step}`,
    prettyUrlPatterns: [
      { pattern: '/start' },
      { pattern: '/start/:step' },
      { pattern: '/:lang/start' },
      { pattern: '/:lang/start/:step' }
    ]
  },
  {
    page: 'docs',
    prettyUrl: ({ lang, article }) =>
      `/${lang}/docz/${article}`,
    prettyUrlPatterns: [
      { pattern: '/docs' },
      { pattern: '/docs/:article' },
      { pattern: '/:lang/docs' },
      { pattern: '/:lang/docs/:article' }
    ]
  }
];

module.exports = routes;