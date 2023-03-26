import React from 'react';
import cx from 'classnames';
import styles from './TextInput.module.scss';

export type TextInputType = 'text' | 'password';

export const TextInput: React.FC<{
    className?: string;
    type?: TextInputType;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    value?: string;
}> = ({
    className,
    type = 'text',
    placeholder = '',
    onChange,
    value,
    ...props
}) => (
    <input
        className={cx(styles.textInput, className)}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
    />
);

export type TextInputProps = React.ComponentProps<typeof TextInput>;
