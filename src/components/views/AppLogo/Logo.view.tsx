import React from 'react';
import cx from 'classnames';
import logo from '../../../assets/site-logo.png';
import styles from './Logo.module.scss';

export const LogoWrapper: React.FC<React.PropsWithChildren> = ({children}) => (
    <div className={styles.mainWrapper}>{children}</div>
);

export const Logo: React.FC<{className?: string}> = ({className}) => (
    <img
        className={cx(styles.logo, className)}
        src={logo}
        alt="Site logo"
        title="Users"
        width={150}
    />
);
