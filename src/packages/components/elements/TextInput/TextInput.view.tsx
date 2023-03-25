import React from 'react';

export type TextInputType = 'text' | 'password';

export const TextInput: React.FC<{type?: TextInputType; value?: string}> = ({
    type = 'text',
    value,
    ...props
}) => <input type={type} value={value} {...props} />;

export type TextInputProps = React.ComponentProps<typeof TextInput>;
