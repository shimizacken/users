import React from 'react';
import cx from 'classnames';
import {ButtonType} from './buttonType';
import styles from './Button.module.scss';

export const Button: React.FC<
    React.ComponentProps<'button'> &
        React.PropsWithChildren<{
            disabled?: boolean;
            onClick?: React.MouseEventHandler<HTMLButtonElement>;
            buttonType?: ButtonType;
            noDesign?: boolean;
        }>
> = ({
    children,
    disabled,
    onClick,
    buttonType = ButtonType.BUTTON,
    className,
    noDesign = false,
    ...props
}) => (
    <button
        className={cx(
            !noDesign && styles.button,
            {
                [styles.noDesign]: noDesign,
            },
            className
        )}
        type={buttonType}
        disabled={disabled}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);
