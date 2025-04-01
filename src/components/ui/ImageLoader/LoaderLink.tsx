import { FC, forwardRef, ReactNode, RefAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps, RefAttributes<HTMLAnchorElement> {
    children?: ReactNode;
    className?: string;
}

const LoaderLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ children, className = '', ...props }, ref) => {
    return (
        <Link ref={ref} {...props} className={`absolute top-0 left-0 w-full h-full ${className}`}>
            {children}
        </Link>
    );
});

LoaderLink.displayName = 'LoaderLink';
export default LoaderLink;
