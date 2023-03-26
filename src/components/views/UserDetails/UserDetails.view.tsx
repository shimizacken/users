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
        <section>
            <div>
                <Heading headingTag="h3">Company</Heading>
                <Text weight="bold">Name:</Text>{' '}
                <Text>{user.company.name}</Text>
            </div>
        </section>
        <section>
            <div>
                <Heading headingTag="h3">Address</Heading>
                <Text weight="bold">Street:</Text>{' '}
                <Text>{user.address.street}</Text>
            </div>
        </section>
    </div>
);
