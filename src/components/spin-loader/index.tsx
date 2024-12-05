import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const SpinLoader = ({ className }: { className?: string }) => (
  <div className={styles.container}>
    <div className={classNames(styles.loader, className)} aria-live="polite" aria-busy="true">
      <p className={styles.text}>Loading</p>
    </div>
  </div>
);

export default SpinLoader;
