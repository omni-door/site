import React, { memo, useContext } from 'react';
import { UseLocale } from '@ctx/UseLocale';
import styles from './style/Home.module.less';
/* import types */
import type { FC } from 'react';

export interface HomeProps {}

export const Home: FC<HomeProps> = props => {
  const {
    locale: {
      home
    }
  } = useContext(UseLocale);

  return (
    <div
      className={styles.home}
    >
      <main className={styles.main}>
        <h1 className={styles.title}>
          {home.title}
        </h1>

        <h2 className={styles.subtitle}>
          {home.subtitle}
        </h2>

        <p className={styles.description}>
          {home.description}
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
    </div>
  );
};

export default memo(Home);
