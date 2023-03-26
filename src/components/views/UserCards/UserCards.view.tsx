import React from 'react';
import {useNavigate} from 'react-router-dom';
import {User} from '../../../types/types';
import {UserCard} from '../UserCard/UserCard.view';
import styles from './UserCards.module.scss';

export const UserCards: React.FC<{users?: User[]}> = ({users}) => {
    const navigate = useNavigate();

    return (
        <ul className={styles.wrapper}>
            {users?.map(user => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    company={user.company.name}
                    onClick={() => navigate(`user/${user.id}`)}
                />
            ))}
        </ul>
    );
};
