import {useEffect, useState} from 'react';
import {GET_USERS_URL} from '../constants';
import {request} from '../packages/utils';
import {User} from '../types/types';

export const useUsersLoader = () => {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        request(GET_USERS_URL).then((u: User[]) => {
            const enhanced = u.map(us => ({
                ...us,
                companyName: us.company.name,
                cityName: us.address.city,
            }));
            setUsers(enhanced);
        });
    }, []);

    return users;
};
