import {SortBy, User} from '../types/types';

export const getCompareFn = (attr: keyof User) => (a: User, b: User) => {
    const nameA = a[attr];
    const nameB = b[attr];

    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }

    return 0;
};

export const sortCards = (sortBy: SortBy, filteredUsers?: User[]) => {
    let result: User[] | undefined = [];

    if (sortBy === SortBy.UserName) {
        result = filteredUsers?.sort(getCompareFn('name'));
    } else if (sortBy === SortBy.CompanyName) {
        result = filteredUsers?.sort(getCompareFn('companyName'));
    } else if (sortBy === SortBy.CityName) {
        result = filteredUsers?.sort(getCompareFn('cityName'));
    }

    if (result) {
        return [...result];
    }

    return [];
};
