import { FC, forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import Text from './Text';
import { Circle } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    isChecked: string;
    label?: string;
    value?: string;
    className?: string;
}

const Radio: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ isChecked, label, value = '', className = '', ...props }, ref) => {
        const radioClasses = 'relative flex items-center gap-3 cursor-pointer';
        const blockClasses = 'relative size-5 min-w-5';

        const inputClasses = 'absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer';

        const circleClasses = 'flex items-center justify-center w-full h-full bg-transparent rounded-full border';
        const iconClasses = 'size-3 rounded-full text-purple bg-purple';

        return (
            <div className={`${radioClasses} ${className}`}>
                <div className={blockClasses}>
                    <input ref={ref} {...props} type='radio' value={value} className={inputClasses} />

                    <span
                        className={cn(circleClasses, {
                            'border-gray': isChecked !== value,
                            'border-purple': isChecked === value,
                        })}
                    >
                        <Circle
                            className={cn(iconClasses, {
                                'opacity-0 invisible': isChecked !== value,
                                'opacity-1 visible': isChecked === value,
                            })}
                        />
                    </span>
                </div>

                {label && <Text>{label}</Text>}
            </div>
        );
    }
);

Radio.displayName = 'Radio';
export default Radio;
