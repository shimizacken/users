import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useUsersLoader} from '../../hooks/useUsersLoader';
import {UserCard} from '../views/UserCard/UserCard.view';
import {UserCards} from '../views/UserCards/UserCards.view';

export const UserCardsContainer: React.FC = () => {
    const navigate = useNavigate();
    const users = useUsersLoader();

    return (
        <UserCards>
            {users?.map(user => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    company={user.company.name}
                    onClick={() => navigate(`user/${user.id}`)}
                />
            ))}
        </UserCards>
    );
};
