import { AnchorHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { EnumBtn } from '@/src/types/enums';
import { LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    btnType?: EnumBtn;
    className?: string;
}

const BtnLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, icon: Icon, btnType = EnumBtn.default, className = '', ...props }, ref) => {
        const btnLinkClasses =
            'flex items-center justify-center gap-2 w-full sm:w-fit height-btn font-medium px-4 sm:px-5 md:px-8 rounded-md transition-all duration-300 will-change-transform';

        const hoverClasses = 'hover:translate-x-[-2px] hover:translate-y-[-2px]';
        const activeClasses = 'active:translate-x-[2px] active:translate-y-[2px]';

        const btnLinkTypeClasses = {
            [EnumBtn.default as string]: 'bg-purple text-white',
            [EnumBtn.outline as string]: 'border-2 border-purple text-white',
        };

        const iconClasses = {
            [EnumBtn.default as string]: 'text-white',
            [EnumBtn.outline as string]: 'text-purple',
        };

        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target={target}
                className={cn(
                    `${btnLinkClasses} ${hoverClasses} ${activeClasses} ${className}`,
                    btnLinkTypeClasses[btnType]
                )}
            >
                {Icon && <Icon className={cn('size-5', iconClasses[btnType])} />}
                <span>{props.children}</span>
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
