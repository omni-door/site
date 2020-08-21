import { useContext } from 'react';
import { UseLocale } from '@ctx/UseLocale';
import Layout from '@components/Layout';
import Docs from '@components/Docs';
import mapCtxToProps from '@utils/mapCtxToProps';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

function DocsPage (props: MapCtxToProps) {
  const {
    locale: {
      docs : {
        pageTitle
      }
    }
  } = useContext(UseLocale);
  return (
    <Layout
      title={pageTitle}
      page={props.page}
    >
      <Docs { ...props }/>
    </Layout>
  );
}

DocsPage.getInitialProps = async (ctx: any) => {
  return mapCtxToProps(ctx);
};

export default DocsPage;