import React, { memo, useContext } from 'react';
import { UseLocale } from '@ctx/UseLocale';
import Head from 'next/head';
import Link from '@components/Link';
import { Layout, Menu, Button } from 'antd';
import styles from './style/Layout.module.less';
/* import types */
import type { FC } from 'react';

const { Header, Content, Footer } = Layout;

export interface BasicLayoutProps {
  title?: string;
  className?: string;
  page?: string;
  children?: any
}

export const BasicLayout: FC<BasicLayoutProps> = props => {
  const { title = 'OMNI-DOOR', className = '', page = 'home', children } = props;
  const {
    locale: {
      global
    },
    lang
  } = useContext(UseLocale);

  return (
    <Layout
      className={[styles['layout'], className].join(' ')}
    >
      <Head>
        <title> { `${title}` } </title>
        <meta name="description" content="omni-door website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <Header className={styles['layout-header']}>
        <nav className={styles['layout-header-nav']}>
          <Link page='home' params={ {lang} }>
            <div className={styles['layout-header-logo']}>
              { global.logo }
            </div>
          </Link>
          <Menu
            className={styles['layout-header-menu']}
            mode='horizontal'
            style={{ width: 256 }}
            defaultSelectedKeys={[page]}
            items={[
              {
                key: 'start',
                label: <Link page='start' params={ {lang} }>
                  <a>{global.start}</a>
                </Link>,
              },
              {
                key: 'docs',
                label: <Link page='docs' params={ {lang} }>
                  <a>{global.docs}</a>
                </Link>,
              }
            ]}
          />
          <div className={styles['layout-header-right']}>
            <Button size='middle' className={styles['layout-header-lang']}>
              <Link href={`/${lang === 'cn' ? 'en' : 'cn'}/${page}`}>
                <a>{global.lang}</a>
              </Link>
            </Button>
            <a className={styles['layout-header-github']} target='_blank' href='https://github.com/omni-door/cli' />
          </div>
        </nav>
      </Header>
      <Content className={styles['layout-content']}>
        { children }
      </Content>
      <Footer className={styles['layout-footer']}>
        Copyright © 2020~2023 @omni-door
      </Footer>
    </Layout>
  );
};

export default memo(BasicLayout);
