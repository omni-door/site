import Layout from '@components/Layout';
import styles from '@/styles/Start.module.less';
import mapCtxToProps from '@utils/mapCtxToProps';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

function StartPage (props: MapCtxToProps) {
  return (
    <Layout
      title='Omni-Door - Start'
      className={styles.start}
      page={props.page}
    >

      <main>
        Start Contents
      </main>

    </Layout>
  );
}

StartPage.getInitialProps = async (ctx: any) => {
  return mapCtxToProps(ctx);
};

export default StartPage;