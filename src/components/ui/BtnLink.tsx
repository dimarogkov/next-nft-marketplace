import { AnchorHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import { EnumBtn } from '@/src/types/enums';
import FlipText from './FlipText';
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
            [EnumBtn.purple as string]: 'bg-purple text-white hover:bg-violet-600',
            [EnumBtn.outline as string]:
                'border-2 border-purple text-white hover:bg-violet-600 hover:border-violet-600',
            [EnumBtn.light as string]: 'bg-white text-black hover:bg-stone-300',
        };

        const iconClasses = {
            [EnumBtn.purple as string]: 'text-white',
            [EnumBtn.outline as string]: 'text-purple group-hover:text-white',
            [EnumBtn.light as string]: 'text-black',
        };

        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                target={target}
                className={`relative inline-block group w-full sm:w-fit height-btn rounded-lg transition-all duration-200 active:scale-95 ${btnLinkClasses[btnType]} ${className}`}
            >
                <FlipText text={props.children as string}>
                    {Icon && <Icon className={`size-5 transition-colors duration-200 ${iconClasses[btnType]}`} />}
                </FlipText>
            </Link>
        );
    }
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
