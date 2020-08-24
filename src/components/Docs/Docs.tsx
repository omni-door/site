import React, { memo } from 'react';
import styles from './style/Docs.module.less';
/* import types */
import type { FC } from 'react';

export interface DocsProps {
  lang: string;
}

export const Docs: FC<DocsProps> = props => {
  const { children } = props;

  return (
    <div
      className={styles.docs}
    >
      Docs Content
    </div>
  );
};

export default memo(Docs);
