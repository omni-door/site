import Layout from '@components/Layout';
import styles from '@/styles/Docs.module.less';

function DocsPage (props) {
  console.info(789, props);
  return (
    <Layout
      title='Omni-Door - Docs'
      className={styles.docs}
    >

      <main>
        Docs Contents
      </main>

    </Layout>
  );
}

DocsPage.getInitialProps = async ctx => {
  return { query: ctx.query };
};

export default DocsPage;