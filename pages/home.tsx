import * as React from 'react';
import Layout from '@components/Layout';
import Home from '@components/Home';
import mapCtxToProps from '@utils/mapCtxToProps';
/* import types */
import type { NextPage } from 'next';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

interface HomePageProps extends MapCtxToProps {}

const HomePage: NextPage<HomePageProps>= props => {
  return (
    <Layout
      title={'Home'}
      page={props.page}
    >
      <Home { ...props }/>
    </Layout>
  );
};

HomePage.getInitialProps = async ctx => {
  return mapCtxToProps(ctx);
};

export default HomePage;
