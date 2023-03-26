import {Story} from '@storybook/react';
import {UserMock} from '../../../mock/user.mock';
import {UserDetails, UserDetailsProps} from './UserDetails.view';

export default {
    title: 'App/UserDetails',
    component: UserDetails,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<UserDetailsProps> = args => <UserDetails {...args} />;

export const Primary = Template.bind({});

const user = UserMock[0];

Primary.args = {
    user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        companyName: user.company.name,
        company: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
        },
        cityName: user.address.city,
        address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
                lat: Number(user.address.geo.lat),
                lng: Number(user.address.geo.lng),
            },
        },
    },
};
