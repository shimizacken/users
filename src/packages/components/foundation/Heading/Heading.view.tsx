import React, {PropsWithChildren} from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

export const Heading: React.FC<
    PropsWithChildren<{headingTag?: HeadingTag; className?: string}>
> = ({headingTag = 'h1', className, children}) => {
    if (headingTag === 'h1') {
        return <h1 className={className}>{children}</h1>;
    }

    if (headingTag === 'h2') {
        return <h2 className={className}>{children}</h2>;
    }

    if (headingTag === 'h3') {
        return <h3 className={className}>{children}</h3>;
    }

    if (headingTag === 'h4') {
        return <h4 className={className}>{children}</h4>;
    }

    return <h1 className={className}>{children}</h1>;
};
