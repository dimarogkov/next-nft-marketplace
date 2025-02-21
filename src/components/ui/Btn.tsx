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
        const btnClasses =
            'flex items-center justify-center gap-2 w-full sm:w-fit height-btn font-medium px-4 sm:px-5 md:px-8 rounded-md transition-all duration-300 will-change-transform';

        const hoverClasses = 'hover:translate-x-[-2px] hover:translate-y-[-2px]';
        const activeClasses = 'active:translate-x-[2px] active:translate-y-[2px]';

        const iconClasses = {
            [EnumBtn.default as string]: 'text-white',
            [EnumBtn.outline as string]: 'text-purple',
        };

        return (
            <button
                ref={ref}
                {...props}
                className={cn(`${btnClasses} ${hoverClasses} ${activeClasses} ${className}`, {
                    'bg-gray text-white/50 pointer-events-none': props.disabled,
                    'bg-purple text-white': !props.disabled && btnType === EnumBtn.default,
                    'border-2 border-purple text-white': !props.disabled && btnType === EnumBtn.outline,
                })}
            >
                {Icon && <Icon className={cn('size-5', iconClasses[btnType], { 'opacity-50': props.disabled })} />}

                <span>{props.children}</span>
            </button>
        );
    }
);

Btn.displayName = 'Btn';
export default Btn;
