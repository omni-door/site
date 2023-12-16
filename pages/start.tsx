import { useContext } from 'react';
import { UseLocale } from '@ctx/UseLocale';
import Layout from '@components/Layout';
import Start from '@components/Start';
import mapCtxToProps from '@utils/mapCtxToProps';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

function StartPage (props: MapCtxToProps) {
  const {
    lang,
    locale: {
      start : {
        pageTitle
      }
    }
  } = useContext(UseLocale);
  return (
    <Layout
      title={pageTitle}
      page={props.page}
    >
      <Start lang={lang} { ...props } />
    </Layout>
  );
}

StartPage.getInitialProps = async (ctx: any) => {
  return mapCtxToProps(ctx);
};

export default StartPage;