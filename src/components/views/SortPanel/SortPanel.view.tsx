import React, {useState} from 'react';
import {TextInput} from '../../../packages/components';
import {SortBy} from '../../../types/types';
import {GroupButton, GroupButtons} from '../GroupButtons/GroupButtons.view';
import styles from './SortPanel.module.scss';

export const SortPanel: React.FC<{
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onTextInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({onClick, onTextInputChange}) => {
    const [groupButtons, setGroupButtons] = useState<GroupButton[]>([
        {id: '1', text: 'Name', value: 'user-name', selected: true},
        {
            id: '2',
            text: 'Company',
            value: 'company-name',
            selected: false,
        },
        {
            id: '3',
            text: 'City',
            value: 'city-name',
            selected: false,
        },
    ]);

    const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;

        setGroupButtons(groupButtons =>
            groupButtons.map(button => {
                button.selected = false;

                if (button.value === value) {
                    button.selected = true;
                }

                return button;
            })
        );

        onClick(e);
    };

    return (
        <div className={styles.wrapper}>
            <TextInput
                onChange={onTextInputChange}
                placeholder="Type user name..."
                className={styles.searchBox}
            />
            <GroupButtons onClick={buttonClick} groupButtons={groupButtons} />
        </div>
    );
};
