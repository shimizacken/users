import React from 'react';
import {ClickableCard, Heading, Text} from '../../../packages/components';
import {TestId} from '../../../testId';
import styles from './UserCard.module.scss';

export const UserCard: React.FC<{
    name: string;
    company: string;
    onClick?: () => void;
}> = ({name, company, onClick}) => (
    <ClickableCard onClick={onClick} data-cy={TestId.USER_CARD}>
        <div className={styles.wrapper}>
            <Heading headingTag="h3" className={styles.name} title={name}>
                {name}
            </Heading>
            <Text>{company}</Text>
        </div>
    </ClickableCard>
);

export type UserCardProps = React.ComponentProps<typeof UserCard>;
