import UseLocaleProvider from '@ctx/UseLocale';
import '../src/styles/reset.scss';
import '../src/styles/variable.less';

function MyApp({ Component, pageProps }: any) {
  return <UseLocaleProvider lang={pageProps?.query?.lang}>
    <Component { ...pageProps } />
  </UseLocaleProvider>;
}

export default MyApp;
