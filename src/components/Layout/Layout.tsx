import React, { memo, FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import styles from './style/Layout.module.less';

const { Header, Content, Footer } = Layout;

export interface BasicLayoutProps {
  title?: string;
  className?: string;
  children?: any
}

export const BasicLayout: FC<BasicLayoutProps> = props => {
  const { title = 'OMNI-DOOR', className = '', children } = props;
  const router = useRouter();

  return (
    <Layout
      className={[styles['layout'], className].join(' ')}
    >
      <Head>
        <title> { title } </title>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <Header className={styles['layout-header']}>
        <nav className={styles['layout-header-nav']}>
          <Link href='/'>
            <div className={styles['layout-header-logo']}>
              Omni-Door
            </div>
          </Link>
          <Menu
            className={styles['layout-header-menu']}
            mode='horizontal'
            theme='dark'
            defaultSelectedKeys={[router.pathname]}
          >
            <Menu.Item key='/start' className={styles['layout-header-menu-item']}>
              <Link href='/start'>
                <a>Start</a>
              </Link>
            </Menu.Item>
            <Menu.Item key='/docs' className={styles['layout-header-menu-item']}>
              <Link href='/docs'>
                <a>Docs</a>
              </Link>
            </Menu.Item>
          </Menu>
        </nav>
      </Header>
      <Content className={styles['layout-content']}>
        { children }
      </Content>
      <Footer className={styles['layout-footer']}>
        Copyright © 2020 @omni-door
      </Footer>
    </Layout>
  );
};

export default memo(BasicLayout);
