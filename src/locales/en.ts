const locale = {
  global: {
    logo: 'Omni-Door',
    start: 'Start',
    docs: 'Docs',
    lang: '中文'
  },
  home: {
    pageTitle: 'Omni-Door',
    title: 'Omni-Door',
    subtitle:
      'Where do you want your project to go? Let any Omni-Door help you!',
    description: `Provide front-end projects from the initialization, development, construction, release and other one-stop services.
      It supports many common front-end projects such as single page application (SPA), server-side rendering application (SSR), component library, lodash like toolset, etc.`,
    btn_start: 'Getting Started',
    btn_docs: 'Documentation',
    license: 'MIT',
    why: [
      {
        title:
          'Many kinds of wheels are up to you',
        subtitle:
          'A complete front-end project project can be built in one line of command',
        intro: `Integrating typescript;
          Seamless docking of eslint, prettier, stylelint, commitlint,
          It can also access unit-test
          `,
        route: {
          page: 'start',
          params: {
            lang: 'en'
          }
        }
      },
      {
        title: 'React-SPA',
        subtitle:
          'The SPA project based on react and react router',
        intro: `SPA(Single-Application-App)  is the most frequently used project mode by front-end developers,
          Whether it is the H5 suitable for mobile terminal or the PC project serving for the middle and back office, it can meet the requirements of short development cycle, low cost, and low cost
          Project structure is simple, front and back end separation and other requirements…
          `,
        route: {
          page: 'docs',
          params: {
            lang: 'en',
            article: 'spa-react'
          }
        }
      },
      {
        title: 'React-SSR',
        subtitle:
          'The SSR project based on react and nextjs',
        intro: `SSR (server side render) server-side rendering application based on react + nextjs solves the problem of separation of SEO and front-end,
          At the same time, compared with spa application, it can also effectively reduce the white screen time,
          Whether it is PC official website or m station, it is a good choice…
          `,
        route: {
          page: 'docs',
          params: {
            lang: 'en',
            article: 'ssr-react'
          }
        }
      },
      {
        title: 'React-Component',
        subtitle:
          'Component library project based on react',
        intro: `A set of component libraries for their own team or internal use is almost the standard configuration for front-end teams of each company;
          With the help of community open source component library demo UI framework, such as docz, storybook, styleguidist, etc,
          The development of component library is no longer a distant technical problem…
          `,
        route: {
          page: 'docs',
          params: {
            lang: 'en',
            article: 'component-react'
          }
        }
      },
      {
        title: 'toolkit',
        subtitle:
          'The tool library same as lodash or ramda',
        intro: `Pure logic component? Function modules coupled with business requirements?
          You don't want to couple any UI Frameworks - the tool library project is probably what you need…`,
        route: {
          page: 'docs',
          params: {
            lang: 'en',
            article: 'toolkit'
          }
        }
      }
    ],
    demo: []
  },
  docs: {
    pageTitle: 'Omni-Door - Docs'
  },
  start: {
    pageTitle: 'Omni-Door - Start'
  }
};

export default locale;