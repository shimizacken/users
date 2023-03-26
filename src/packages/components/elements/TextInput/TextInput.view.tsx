import React from 'react';
import styles from './TextInput.module.scss';

export type TextInputType = 'text' | 'password';

export const TextInput: React.FC<{
    type?: TextInputType;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    value?: string;
}> = ({type = 'text', placeholder = '', onChange, value, ...props}) => (
    <input
        className={styles.textInput}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
    />
);

export type TextInputProps = React.ComponentProps<typeof TextInput>;
