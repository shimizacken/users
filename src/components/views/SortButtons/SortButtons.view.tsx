import React from 'react';
import {Button} from '../../../packages/components';
import styles from './SortButtons.module.scss';

export const SortButtons: React.FC<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({onClick}) => (
    <div className={styles.wrapper}>
        <Button onClick={onClick} value="user-name">
            Name &#8593;
        </Button>
        <Button onClick={onClick} value="company-name">
            Company &#8593;
        </Button>
        <Button onClick={onClick} value="city-name">
            City &#8593;
        </Button>
    </div>
);

export type SortButtonsProps = React.ComponentProps<typeof SortButtons>;
