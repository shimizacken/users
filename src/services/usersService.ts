import {User} from '../types/types';

export const getUsersFn = (users?: User[]) => ({
    setUsers: (usersToSet: User[]) => {
        users = usersToSet ?? [];
    },
    getUsers: () => users,
});

export const usersService = getUsersFn();
