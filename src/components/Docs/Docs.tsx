import React, { memo } from 'react';
import SourceCn from './docs-cn.md';
import SourceEn from './docs-en.md';
import styles from './style/Docs.module.less';
/* import types */
import type { FC } from 'react';

export interface DocsProps {
  lang: string;
}

export const Docs: FC<DocsProps> = props => {
  const { lang } = props;
  const Source = lang === 'cn' ? SourceCn : SourceEn;

  return (
    <div
      className={styles.docs}
    >
      <Source />
    </div>
  );
};

export default memo(Docs);
