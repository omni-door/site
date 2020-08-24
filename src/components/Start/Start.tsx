import React, { memo } from 'react';
import SourceCn from './start-cn.md';
import SourceEn from './start-en.md';
import styles from './style/Start.module.less';
/* import types */
import type { FC } from 'react';

export interface StartProps {
  lang: string;
}

export const Start: FC<StartProps> = props => {
  const { lang } = props;
  const Source = lang === 'cn' ? SourceCn : SourceEn;
  return (
    <div
      className={styles.start}
    >
      Start Content
      <Source />
    </div>
  );
};

export default memo(Start);
