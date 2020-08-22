import React, { memo, useContext } from 'react';
import { Button, Card, Col, Row } from 'antd';
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
        </p>

        <div className={styles.btn}>
          <Button type='primary' className={styles['btn-start']} >{home.btn_start}</Button>
          <Button className={styles['btn-docs']}>{home.btn_docs}</Button>
        </div>
        
        <div className={styles.grid}>
          {
            home.why.map(v => {
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
                <a href="https://nextjs.org/docs" className={styles['card-link']}>
                  <h3 className={styles['card-subtitle']}>{v.subtitle} &rarr;</h3>
                  <p className={styles['card-content']}>{v.intro}</p>
                </a>

              </Card>;
            })
          }
        </div>
      </main>
    </div>
  );
};

export default memo(Home);
