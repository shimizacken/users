import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUsersLoader} from '../../hooks/useUsersLoader';
import {TextInput} from '../../packages/components';
import {usersService} from '../../services/usersService';
import {UserCard} from '../views/UserCard/UserCard.view';
import {UserCards} from '../views/UserCards/UserCards.view';

export const UserCardsContainer: React.FC = () => {
    const navigate = useNavigate();
    const users = useUsersLoader();

    useEffect(() => {
        if (users) {
            usersService.setUsers(users);
        }
    }, [users]);

    return (
        <section>
            <section>
                <TextInput placeholder="Type user name..." />
            </section>
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
        </section>
    );
};
