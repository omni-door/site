const locale = {
  global: {
    logo: '任意门',
    start: '开始',
    docs: '文档',
    lang: 'English'
  },
  home: {
    pageTitle: '任意门',
    title: '任意门',
    subtitle: '前端通用脚手架',
    description: `为前端项目的创建、开发、构建、发布提供一条龙服务。
    支持基于 React 和 Vue 的单页应用(SPA)、服务端渲染应用(SSR)、组件库、类lodash工具集等多种前端常见项目。
    你的项目想去哪里？不妨让任意门帮你！`,
    btn_start: '开始使用',
    btn_docs: '文档',
    license: 'MIT',
    why: [
      {
        title: '各种轮子随你挑',
        subtitle:
          '一行命令即可构建一个完整的前端项目工程',
        intro: `集成typescript；
          可无缝对接 ESlint、Prettier、Stylelint、Commitlint 等各种 lint 工具，
          更可以接入单元测试
          `,
        route: {
          page: 'start',
          params: {
            lang: 'cn'
          }
        }
      },
      {
        title: 'React单页应用',
        subtitle:
          '基于 React 和 React-Router 的 SPA 项目',
        intro: `SPA(Single-Application-App) 单页应用是现在的前端开发者使用频率最高的一种项目模式，
          无论是适配于移动端的H5，还是服务于中后台的PC项目，都很好的满足了开发周期短、成本低、
          项目结构简单、前后端分离等需求…
          `,
        route: {
          page: 'docs',
          params: {
            lang: 'cn',
            article: 'spa-react'
          }
        }
      },
      {
        title: 'React服务端渲染应用',
        subtitle:
          '基于 React 和 NextJs 的 SSR 项目',
        intro: `基于 React + NextJs 的 SSR(Server-Side-Render) 服务端渲染应用解决了 SEO 和前后端分离的问题，
          同时相比于 SPA 应用，也能有效的降低白屏时间，
          无论是 PC 官网 还是 M 站，都是一个很好的选择…
          `,
        route: {
          page: 'docs',
          params: {
            lang: 'cn',
            article: 'ssr-react'
          }
        }
      },
      {
        title: 'React组件库',
        subtitle: '基于 React 的组件库项目',
        intro: `一套属于自己团队或公司内部使用的组件库，几乎是每个公司前端团队的标配；
          借助社区开源的组件库 Demo-UI 框架，如 docz、storybook、styleguidist 等，
          让组件库的开发不再是遥不可及的技术难题…
          `,
        route: {
          page: 'docs',
          params: {
            lang: 'cn',
            article: 'component-react'
          }
        }
      },
      {
        title: '工具库',
        subtitle: '类lodash、ramda工具库',
        intro:
          '纯逻辑组件？耦合了业务需求的功能模块？不想耦合任何 UI 框架 —— 工具库项目很可能是你需要的…',
        route: {
          page: 'docs',
          params: {
            lang: 'cn',
            article: 'toolkit'
          }
        }
      }
    ],
    demo: []
  },
  docs: {
    pageTitle: '任意门 - 文档'
  },
  start: {
    pageTitle: '任意门 - 开始使用'
  }
};

export default locale;