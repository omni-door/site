import Layout from '@components/Layout';
import styles from '@/styles/Start.module.less';

function StartPage (props) {
  console.info(456, props);
  return (
    <Layout
      title='Omni-Door - Start'
      className={styles.start}
    >

      <main>
        Start Contents
      </main>

    </Layout>
  );
}

StartPage.getInitialProps = async ctx => {
  return { query: ctx.query };
};

export default StartPage;