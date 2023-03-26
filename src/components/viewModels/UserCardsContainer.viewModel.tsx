import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUsersLoader} from '../../hooks/useUsersLoader';
import {TextInput} from '../../packages/components';
import {usersService} from '../../services/usersService';
import {User} from '../../types/types';
import {SortButtons} from '../views/SortButtons/SortButtons.view';
import {UserCard} from '../views/UserCard/UserCard.view';
import {UserCards} from '../views/UserCards/UserCards.view';

enum SortBy {
    UserName = 'user-name',
    CompanyName = 'company-name',
    CityName = 'city-name',
}

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

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;

        if (value === SortBy.UserName) {
            console.log('sort by UserName');
        } else if (value === SortBy.CompanyName) {
            console.log('sort by CompanyName');
        } else if (value === SortBy.CityName) {
            console.log('sort by CityName');
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
