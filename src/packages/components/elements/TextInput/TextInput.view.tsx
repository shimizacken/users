import React from 'react';
import styles from './TextInput.module.scss';

export type TextInputType = 'text' | 'password';

export const TextInput: React.FC<{
    type?: TextInputType;
    value?: string;
    placeholder?: string;
}> = ({type = 'text', placeholder = '', value, ...props}) => (
    <input
        className={styles.textInput}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
    />
);

export type TextInputProps = React.ComponentProps<typeof TextInput>;
