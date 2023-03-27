import React from 'react';
import cx from 'classnames';
import styles from './PageContent.module.scss';

export const PageContent: React.FC<
    React.PropsWithChildren<{align?: 'start' | 'center' | 'end'}>
> = ({align = 'start', children}) => (
    <article className={cx(styles.wrapper, styles[align])}>{children}</article>
);
