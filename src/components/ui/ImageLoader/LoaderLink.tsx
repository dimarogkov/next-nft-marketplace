import { FC, forwardRef, RefAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps, RefAttributes<HTMLAnchorElement> {
    className?: string;
}

const LoaderLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ className = '', ...props }, ref) => {
    return <Link ref={ref} {...props} className={`absolute top-0 left-0 w-full h-full ${className}`} />;
});

LoaderLink.displayName = 'LoaderLink';
export default LoaderLink;
