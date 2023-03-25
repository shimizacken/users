import React from 'react';
import styles from './Card.module.scss';

export const Card: React.FC<React.PropsWithChildren> = ({
    children,
    ...props
}) => (
    <div className={styles.wrapper} {...props}>
        {children}
    </div>
);

export type CardProps = React.ComponentProps<typeof Card>;
