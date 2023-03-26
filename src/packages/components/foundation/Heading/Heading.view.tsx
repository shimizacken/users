import React, {PropsWithChildren} from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

export const Heading: React.FC<
    PropsWithChildren<{
        headingTag?: HeadingTag;
        className?: string;
        title?: string;
    }>
> = ({headingTag = 'h1', className, children, title}) => {
    const coreProps = {
        className,
        title,
    };

    if (headingTag === 'h1') {
        return <h1 {...coreProps}>{children}</h1>;
    }

    if (headingTag === 'h2') {
        return <h2 {...coreProps}>{children}</h2>;
    }

    if (headingTag === 'h3') {
        return <h3 {...coreProps}>{children}</h3>;
    }

    if (headingTag === 'h4') {
        return <h4 {...coreProps}>{children}</h4>;
    }

    return <h1 {...coreProps}>{children}</h1>;
};
