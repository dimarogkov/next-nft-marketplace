import { ButtonHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { EnumBtn } from '@/src/types/enums';
import { LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    btnType?: EnumBtn;
    className?: string;
}

const Btn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ icon: Icon, btnType = EnumBtn.default, className = '', ...props }, ref) => {
        const btnLinkTypeClasses = {
            [EnumBtn.default as string]: 'bg-purple text-white',
            [EnumBtn.outline as string]: 'border-2 border-purple text-white',
            [EnumBtn.light as string]: 'bg-white text-black',
            [EnumBtn.dark as string]: 'bg-black text-white',
        };

        const iconClasses = {
            [EnumBtn.default as string]: 'text-white',
            [EnumBtn.outline as string]: 'text-purple',
            [EnumBtn.light as string]: 'text-black',
            [EnumBtn.dark as string]: 'text-white',
        };

        return (
            <button
                ref={ref}
                {...props}
                className={cn(
                    `flex items-center justify-center gap-2 w-full sm:w-fit height-btn font-medium px-4 md:px-8 rounded-md transition-all duration-300 will-change-transform hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] ${className}`,
                    !props.disabled && btnLinkTypeClasses[btnType],
                    {
                        'bg-gray text-white/50 pointer-events-none': props.disabled,
                    }
                )}
            >
                {Icon && <Icon className={cn(`size-5 ${iconClasses[btnType]}`, { 'opacity-50': props.disabled })} />}
                <span>{props.children}</span>
            </button>
        );
    }
);

Btn.displayName = 'Btn';
export default Btn;
