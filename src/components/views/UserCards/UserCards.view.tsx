import React, {PropsWithChildren} from 'react';
import styles from './UserCards.module.scss';

export const UserCards: React.FC<PropsWithChildren> = ({children}) => (
    <ul className={styles.wrapper}>{children}</ul>
);
