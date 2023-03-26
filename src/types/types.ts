export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: number;
        lng: number;
    };
}

export interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    companyName: string;
    company: UserCompany;
    cityName: string;
}

export enum SortBy {
    UserName = 'user-name',
    CompanyName = 'company-name',
    CityName = 'city-name',
}
