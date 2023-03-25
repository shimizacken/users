import React from 'react';
import {Card} from '../../elements/Card/Card.view';
import styles from './ClickableCard.module.scss';

export const ClickableCard: React.FC<
    React.PropsWithChildren<{className?: string; onClick?: () => void}>
> = ({children, className, onClick, ...props}) => (
    <Card className={styles.wrapper} onClick={onClick} role="button" {...props}>
        {children}
    </Card>
);

export type ClickableCardProps = React.ComponentProps<typeof ClickableCard>;
