import React from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';

export const Card: React.FC<
    React.PropsWithChildren<{
        className?: string;
        onClick?: () => void;
        role?: string;
    }>
> = ({children, className, ...props}) => (
    <li className={cx(styles.wrapper, className)} {...props}>
        {children}
    </li>
);

export type CardProps = React.ComponentProps<typeof Card>;
