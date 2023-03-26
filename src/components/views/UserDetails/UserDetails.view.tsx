import React from 'react';
import {Heading, Text} from '../../../packages/components';
import {User} from '../../../types/types';
import styles from './UserDetails.module.scss';

export const UserDetails: React.FC<{user: User}> = ({user}) => (
    <div>
        <section className={styles.wrapper}>
            <Heading headingTag="h3">Contact info</Heading>
            <div>
                <Text weight="bold">Username:</Text>{' '}
                <Text>{user.username}</Text>
            </div>
            <div>
                <Text weight="bold">Email:</Text> <Text>{user.email}</Text>
            </div>
            <div>
                <Text weight="bold">Phone:</Text> <Text>{user.phone}</Text>
            </div>
            <div>
                <Text weight="bold">Website:</Text> <Text>{user.website}</Text>
            </div>
        </section>
        <section className={styles.wrapper}>
            <Heading headingTag="h3">Company</Heading>
            <div>
                <Text weight="bold">Name:</Text>{' '}
                <Text>{user.company.name}</Text>
            </div>
            <div>
                <Text weight="bold">Catch phrase:</Text>{' '}
                <Text>{user.company.catchPhrase}</Text>
            </div>
            <div>
                <Text weight="bold">BS:</Text> <Text>{user.company.bs}</Text>
            </div>
        </section>
        <section className={styles.wrapper}>
            <Heading headingTag="h3">Address</Heading>
            <div>
                <Text weight="bold">Street:</Text>{' '}
                <Text>{user.address.street}</Text>
            </div>
            <div>
                <Text weight="bold">Suite:</Text>{' '}
                <Text>{user.address.suite}</Text>
            </div>
            <div>
                <Text weight="bold">City:</Text>{' '}
                <Text>{user.address.city}</Text>
            </div>
            <div>
                <Text weight="bold">Zip code:</Text>{' '}
                <Text>{user.address.zipcode}</Text>
            </div>
            <div>
                <Text weight="bold">Geo:</Text>{' '}
                <Text>{user.address.geo.lat}</Text>
                <Text>{user.address.geo.lng}</Text>
            </div>
        </section>
    </div>
);

export type UserDetailsProps = React.ComponentProps<typeof UserDetails>;
