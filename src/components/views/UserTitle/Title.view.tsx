import React from 'react';
import {Heading} from '../../../packages/components';
import styles from './Heading.module.scss';

export const UserTitle: React.FC<{name: string}> = ({name}) => (
    <div className={styles.wrapper}>
        <Heading headingTag="h1">{name}</Heading>
    </div>
);
