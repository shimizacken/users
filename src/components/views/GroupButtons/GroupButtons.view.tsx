import React from 'react';
import {Button, Text} from '../../../packages/components';
import styles from './GroupButtons.module.scss';

export type GroupButton = {
    id: string;
    text: string;
    selected: boolean;
    value: string;
};

export const GroupButtons: React.FC<{
    groupButtons: GroupButton[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({groupButtons, onClick}) => (
    <div className={styles.wrapper}>
        {groupButtons.map(button => (
            <Button
                onClick={onClick}
                value={button.value}
                disabled={button.selected}
                aria-label={`Sort user cards by ${button.text}`}
                key={button.id}
            >
                <div className={styles.button}>
                    <Text>{button.text}</Text>{' '}
                    {button.selected && <span className={styles.arrow}>↑</span>}
                </div>
            </Button>
        ))}
    </div>
);

export type SortButtonsProps = React.ComponentProps<typeof GroupButtons>;
