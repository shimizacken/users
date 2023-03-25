import React from 'react';
import styles from './Card.module.scss';

export const Card: React.FC<React.PropsWithChildren> = ({
    children,
    ...props
}) => (
    <li className={styles.wrapper} {...props}>
        {children}
    </li>
);

export type CardProps = React.ComponentProps<typeof Card>;
