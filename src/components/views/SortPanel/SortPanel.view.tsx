import React from 'react';
import {TextInput} from '../../../packages/components';
import {SortButtons} from '../SortButtons/SortButtons.view';
import styles from './SortPanel.module.scss';

export const SortPanel: React.FC<{
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onTextInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({onClick, onTextInputChange}) => {
    return (
        <div className={styles.wrapper}>
            <TextInput
                onChange={onTextInputChange}
                placeholder="Type user name..."
                className={styles.searchBox}
            />
            <SortButtons onClick={onClick} />
        </div>
    );
};
