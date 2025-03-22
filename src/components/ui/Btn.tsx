import { ButtonHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { EnumBtn } from '@/src/types/enums';
import FlipText from './FlipText';
import { LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    btnType?: EnumBtn;
    className?: string;
}

const Btn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ icon: Icon, btnType = EnumBtn.purple, className = '', ...props }, ref) => {
        const btnClasses = {
            [EnumBtn.purple as string]: 'bg-purple text-white hover:bg-violet-600',
            [EnumBtn.outline as string]:
                'border-2 border-purple text-white hover:bg-violet-600 hover:border-violet-600',
            [EnumBtn.light as string]: 'bg-white text-black hover:bg-stone-200',
        };

        const iconClasses = {
            [EnumBtn.purple as string]: 'text-white',
            [EnumBtn.outline as string]: 'text-purple group-hover:text-white',
            [EnumBtn.light as string]: 'text-black',
        };

        return (
            <button
                ref={ref}
                {...props}
                className={cn(
                    `relative group inline-block w-full sm:w-fit height-btn rounded-lg transition-all duration-200 active:scale-95 ${className}`,
                    !props.disabled && btnClasses[btnType],
                    {
                        'bg-gray text-white/50 pointer-events-none': props.disabled,
                    }
                )}
            >
                <FlipText text={props.children as string}>
                    {Icon && (
                        <Icon
                            className={cn(`size-5 transition-colors duration-200 ${iconClasses[btnType]}`, {
                                'opacity-50': props.disabled,
                            })}
                        />
                    )}
                </FlipText>
            </button>
        );
    }
);

Btn.displayName = 'Btn';
export default Btn;
