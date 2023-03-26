import React from 'react';
import {ClickableCard} from '../../../packages/components';
import styles from './UserCard.module.scss';

export const UserCard: React.FC<{name: string; company: string}> = ({
    name,
    company,
}) => (
    <ClickableCard>
        <div className={styles.wrapper}>
            <div>Name: {name}</div>
            <div>Company: {company}</div>
        </div>
    </ClickableCard>
);

export type UserCardProps = React.ComponentProps<typeof UserCard>;
