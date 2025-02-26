import { AnchorHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { EnumSocial } from '@/src/types/enums';
import { LucideProps } from 'lucide-react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    socialType?: string;
    className?: string;
}

const SocialLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, icon: Icon, socialType = EnumSocial.purple, className = '', ...props }, ref) => {
        const socialClasses = {
            [EnumSocial.purple as string]: 'bg-purple',
            [EnumSocial.light as string]: 'bg-white',
            [EnumSocial.dark as string]: 'bg-black',
        };

        const iconClasses = {
            [EnumSocial.purple as string]: 'text-white',
            [EnumSocial.light as string]: 'text-black',
            [EnumSocial.dark as string]: 'text-white',
        };

        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target='_blank'
                className={`flex items-center justify-center size-10 rounded-md transition-all duration-300 will-change-transform hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] ${socialClasses[socialType]} ${className}`}
            >
                <Icon className={`size-[22px] ${iconClasses[socialType]}`} />
            </Link>
        );
    }
);

SocialLink.displayName = 'SocialLink';
export default SocialLink;
