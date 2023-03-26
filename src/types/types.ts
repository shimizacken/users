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
    id: string;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
}
