import { useContext } from 'react';
import { UseLocale } from '@ctx/UseLocale';
import { Button } from 'antd';
import Layout from '@components/Layout';
import styles from '@/styles/Home.module.less';
import mapCtxToProps from '@utils/mapCtxToProps';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

function HomePage (props: MapCtxToProps) {
  const locale = useContext(UseLocale);
  return (
    <Layout
      title='Omni-Door 任意门'
      className={styles.home}
      page={props.page}
    >
      <Button type='primary'>123</Button>  
      <main className={styles.main}>
        <h1 className={styles.title}>
          Omni Door
        </h1>

        <p className={styles.description}>
          Get started by edi1232412421213ting{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </Layout>
  );
}

HomePage.getInitialProps = async (ctx: any) => {
  return mapCtxToProps(ctx);
};

export default HomePage;