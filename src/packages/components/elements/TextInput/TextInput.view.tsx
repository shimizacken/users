import React from 'react';
import styles from './TextInput.module.scss';

export type TextInputType = 'text' | 'password';

export const TextInput: React.FC<{type?: TextInputType; value?: string}> = ({
    type = 'text',
    value,
    ...props
}) => (
    <input className={styles.textInput} type={type} value={value} {...props} />
);

export type TextInputProps = React.ComponentProps<typeof TextInput>;
