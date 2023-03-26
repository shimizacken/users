import React from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';

export type PlaceHolderPosition = 'start' | 'center' | 'end';

export const Header: React.FC<{
    start?: React.ReactNode;
    middle?: React.ReactNode;
    end?: React.ReactNode;
    startPosition?: PlaceHolderPosition;
    centerPosition?: PlaceHolderPosition;
    endPosition?: PlaceHolderPosition;
}> = ({
    start,
    middle,
    end,
    startPosition = 'start',
    centerPosition = 'start',
    endPosition = 'start',
}) => (
    <header className={styles.header}>
        <section className={cx(styles.section, styles[startPosition])}>
            {start}
        </section>
        <section className={cx(styles.section, styles[centerPosition])}>
            {middle}
        </section>
        <section className={cx(styles.section, styles[endPosition])}>
            {end}
        </section>
    </header>
);
