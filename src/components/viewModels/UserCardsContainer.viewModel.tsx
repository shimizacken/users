import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUsersLoader} from '../../hooks/useUsersLoader';
import {TextInput} from '../../packages/components';
import {usersService} from '../../services/usersService';
import {User} from '../../types/types';
import {UserCard} from '../views/UserCard/UserCard.view';
import {UserCards} from '../views/UserCards/UserCards.view';

export const UserCardsContainer: React.FC = () => {
    const navigate = useNavigate();
    const users = useUsersLoader();
    const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>(
        users
    );

    useEffect(() => {
        if (users) {
            usersService.setUsers(users);
            setFilteredUsers(users);
        }
    }, [users]);

    const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.length === 0) {
            setFilteredUsers(users);
        }

        if (value.length > 2) {
            const filtered = users?.filter(user =>
                user.name.toLocaleLowerCase().includes(e.target.value)
            );

            setFilteredUsers(filtered);
        }
    };

    return (
        <section>
            <section>
                <TextInput
                    onChange={onTextInputChange}
                    placeholder="Type user name..."
                />
            </section>
            <UserCards>
                {filteredUsers?.map(user => (
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
