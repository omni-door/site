import Layout from '@components/Layout';
import styles from '@/styles/Docs.module.less';
import mapCtxToProps from '@utils/mapCtxToProps';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

function DocsPage (props: MapCtxToProps) {
  console.info(789, props);
  return (
    <Layout
      title='Omni-Door - Docs'
      className={styles.docs}
      page={props.page}
    >

      <main>
        Docs Contents
      </main>

    </Layout>
  );
}

DocsPage.getInitialProps = async (ctx: any) => {
  return mapCtxToProps(ctx);
};

export default DocsPage;