/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.css';

declare module '*.less';

declare module '*.scss';

declare module '*.sass';

declare module '*.svg';

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.gif';

declare module '*.md' {
  const content: string;
  export default content;
}

declare module 'next-url-prettifier';

declare module 'react-markdown/plugins/html-parser';