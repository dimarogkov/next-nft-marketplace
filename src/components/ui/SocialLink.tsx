import { AnchorHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { LucideProps } from 'lucide-react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    className?: string;
}

const SocialLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, icon: Icon, className = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target='_blank'
                className={`flex items-center justify-center size-10 rounded-md bg-black transition-all duration-300 will-change-transform hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] ${className}`}
            >
                <Icon className='size-[22px] text-gray2' />
            </Link>
        );
    }
);

SocialLink.displayName = 'SocialLink';
export default SocialLink;
