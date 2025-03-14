import { AnchorHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { EnumBtn } from '@/src/types/enums';
import { LucideProps } from 'lucide-react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    btnType?: EnumBtn;
    className?: string;
}

const BtnLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, icon: Icon, btnType = EnumBtn.purple, className = '', ...props }, ref) => {
        const btnLinkClasses = {
            [EnumBtn.purple as string]: 'bg-purple text-white',
            [EnumBtn.outline as string]: 'border-2 border-purple text-white',
            [EnumBtn.light as string]: 'bg-white text-black',
        };

        const iconClasses = {
            [EnumBtn.purple as string]: 'text-white',
            [EnumBtn.outline as string]: 'text-purple',
            [EnumBtn.light as string]: 'text-black',
        };

        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target={target}
                className={`flex items-center justify-center gap-2 w-full sm:w-fit height-btn font-medium px-4 sm:px-5 md:px-8 rounded-lg transition-all duration-300 will-change-transform hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] ${btnLinkClasses[btnType]} ${className}`}
            >
                {Icon && <Icon className={`size-5 ${iconClasses[btnType]}`} />}
                <span>{props.children}</span>
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
