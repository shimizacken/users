import React, {useEffect, useState} from 'react';
import {useUsersLoader} from '../../hooks/useUsersLoader';
import {TextInput} from '../../packages/components';
import {usersService} from '../../services/usersService';
import {SortBy, User} from '../../types/types';
import {sortCards, getCompareFn} from '../../utils/sortUserCards';
import {SortButtons} from '../views/SortButtons/SortButtons.view';
import {UserCards} from '../views/UserCards/UserCards.view';

export const UserCardsContainer: React.FC = () => {
    const users = useUsersLoader();
    const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>(
        users
    );

    useEffect(() => {
        if (users) {
            usersService.setUsers(users);
            setFilteredUsers(users?.sort(getCompareFn('name')));
        }
    }, [users]);

    const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.length === 0) {
            setFilteredUsers(users);
        }

        if (value.length > 2) {
            const filtered = users?.filter(user =>
                user.name
                    .toLocaleLowerCase()
                    .includes(e.target.value.toLocaleLowerCase())
            );

            setFilteredUsers(filtered);
        }
    };

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;

        if (value === SortBy.UserName) {
            setFilteredUsers(sortCards(SortBy.UserName, filteredUsers));
        } else if (value === SortBy.CompanyName) {
            setFilteredUsers(sortCards(SortBy.CompanyName, filteredUsers));
        } else if (value === SortBy.CityName) {
            setFilteredUsers(sortCards(SortBy.CityName, filteredUsers));
        }
    };

    return (
        <section>
            <section>
                <div>
                    <TextInput
                        onChange={onTextInputChange}
                        placeholder="Type user name..."
                    />
                    <SortButtons onClick={onClick} />
                </div>
            </section>
            <UserCards users={filteredUsers} />
        </section>
    );
};
