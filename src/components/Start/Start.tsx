import React, { memo } from 'react';
import styles from './style/Start.module.less';
/* import types */
import type { FC } from 'react';

export interface StartProps {}

export const Start: FC<StartProps> = props => {
  const { children } = props;

  return (
    <div
      className={styles.start}
    >
      Start Content
    </div>
  );
};

export default memo(Start);
