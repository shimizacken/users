import React, {useEffect, useState} from 'react';
import {useMatch, useNavigate} from 'react-router-dom';
import {usersService} from '../../services/usersService';
import {UserTitle} from '../views/UserTitle/Title.view';
import {User} from '../../types/types';
import {UserDetails} from '../views/UserDetails/UserDetails.view';

export const UserDetailsContainer: React.FC = () => {
    const matches = useMatch('user/:userId');
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const userId = matches?.params.userId || '';
        const result = usersService
            .getUsers()
            ?.find(user => user.id.toString() === userId);

        if (result) {
            setUser(result);
        }

        if (!result) {
            return navigate('/');
        }
    }, [matches, navigate]);

    if (!user) {
        return null;
    }

    return (
        <section>
            <UserTitle name={user.name} />
            <UserDetails user={user} />
        </section>
    );
};
