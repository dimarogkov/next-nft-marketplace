import { FC, forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Check } from 'lucide-react';
import Text from './Text';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    isChecked: boolean;
    label?: string;
    className?: string;
}

const Checkbox: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ isChecked, label, className = '', ...props }, ref) => {
        const checkboxClasses = 'relative flex items-center gap-3 cursor-pointer';
        const blockClasses = 'relative size-5 min-w-5';

        const inputClasses = 'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer';

        const circleClasses = 'flex items-center justify-center w-full h-full bg-transparent rounded-md border';
        const iconClasses = 'size-[14px] text-purple';

        return (
            <div className={`${checkboxClasses} ${className}`}>
                <div className={blockClasses}>
                    <input ref={ref} {...props} type='checkbox' className={inputClasses} />

                    <span
                        className={cn(circleClasses, {
                            'border-gray': !isChecked,
                            'border-purple bg-purple': isChecked,
                        })}
                    >
                        <Check
                            className={cn(iconClasses, {
                                'opacity-0 invisible': !isChecked,
                                'opacity-1 visible': isChecked,
                            })}
                        />
                    </span>
                </div>

                {label && <Text>{label}</Text>}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
