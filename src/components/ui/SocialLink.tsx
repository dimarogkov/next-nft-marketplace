import { AnchorHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { EnumColorStyle } from '@/src/types/enums';
import { LucideProps } from 'lucide-react';

import { PATHS } from '@/src/variables';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    socialType?: string;
    className?: string;
}

const SocialLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, icon: Icon, socialType = EnumColorStyle.purple, className = '', ...props }, ref) => {
        const socialClasses = {
            [EnumColorStyle.purple as string]: 'bg-purple',
            [EnumColorStyle.light as string]: 'bg-white',
            [EnumColorStyle.dark as string]: 'bg-black',
        };

        const iconClasses = {
            [EnumColorStyle.purple as string]: 'text-white',
            [EnumColorStyle.light as string]: 'text-black',
            [EnumColorStyle.dark as string]: 'text-white',
        };

        return (
            <Link
                ref={ref}
                {...props}
                href={PATHS.HOME} // href={href}
                target='_blank'
                className={`flex items-center justify-center size-10 rounded-lg transition-all duration-300 will-change-transform hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] ${socialClasses[socialType]} ${className}`}
            >
                <Icon className={`size-[22px] ${iconClasses[socialType]}`} />
            </Link>
        );
    }
);

SocialLink.displayName = 'SocialLink';
export default SocialLink;
