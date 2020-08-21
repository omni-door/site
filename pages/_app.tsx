import UseLocaleProvider from '@ctx/UseLocale';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return <UseLocaleProvider lang={pageProps?.query?.lang}>
    <Component { ...pageProps } />
  </UseLocaleProvider>;
}

export default MyApp;
