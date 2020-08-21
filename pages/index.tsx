import { useContext } from 'react';
import { UseLocale } from '@ctx/UseLocale';
import { Button } from 'antd';
import Layout from '@components/Layout';
import mapCtxToProps from '@utils/mapCtxToProps';
import type { MapCtxToProps } from '@utils/mapCtxToProps';
import Home from '@components/Home';

function HomePage (props: MapCtxToProps) {
  const {
    locale: {
      home : {
        pageTitle
      }
    }
  } = useContext(UseLocale);
  return (
    <Layout
      title={pageTitle}
      page={props.page}
    >
      <Home />
    </Layout>
  );
}

HomePage.getInitialProps = async (ctx: any) => {
  return mapCtxToProps(ctx);
};

export default HomePage;