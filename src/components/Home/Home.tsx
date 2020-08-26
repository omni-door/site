import React, { memo, useContext } from 'react';
import { Button, Card } from 'antd';
import Link from '@components/Link';
import { UseLocale } from '@ctx/UseLocale';
import styles from './style/Home.module.less';
/* import types */
import type { FC } from 'react';

export interface HomeProps {}

export const Home: FC<HomeProps> = props => {
  const {
    lang,
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
        </p>

        <div className={styles.btn}>
          <Button type='primary' className={styles['btn-start']} >
            <Link page='start' params={{ lang }}>
              <a className={styles['btn-start-link']}> {home.btn_start} </a>
            </Link>
          </Button>
          <Button className={styles['btn-docs']}>
            <Link page='docs' params={{ lang }}>
              <a className={styles['btn-docs-link']}> {home.btn_docs} </a>
            </Link>
          </Button>
        </div>
        
        <div className={styles.grid}>
          {
            home.why.map(v => {
              const { route } = v;
              return <Card
                key={v.title}
                size='small'
                className={styles.card}
                hoverable
                title={v.title}
                headStyle={{
                  fontSize: '1.5rem',
                  minHeight: '1vh'
                }}
                bodyStyle={{
                  paddingTop: '1rem'
                }}
              >
                <Link page={route.page} params={route.params}>
                  <a className={styles['card-link']}>
                    <h3 className={styles['card-subtitle']}>{v.subtitle} &rarr;</h3>
                    <p className={styles['card-content']}>{v.intro}</p>
                  </a>
                </Link>
              </Card>;
            })
          }
        </div>
      </main>
    </div>
  );
};

export default memo(Home);
