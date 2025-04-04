import { AnchorHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Link from 'next/link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
}

const SimpleLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ href, className = '', ...props }, ref) => {
    return (
        <Link
            ref={ref}
            {...props}
            href={href}
            className='font-medium underline text-purple transition-opacity duration-300 hover:opacity-70'
        />
    );
});

SimpleLink.displayName = 'SimpleLink';
export default SimpleLink;
