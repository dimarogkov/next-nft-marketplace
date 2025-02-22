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
        return (
            <div className={`relative flex items-center gap-3 cursor-pointer ${className}`}>
                <div className='relative size-5 min-w-5'>
                    <input
                        ref={ref}
                        {...props}
                        type='checkbox'
                        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    />

                    <span
                        className={cn(
                            'flex items-center justify-center w-full h-full border rounded-md bg-transparent',
                            {
                                'border-gray': !isChecked,
                                'border-purple bg-purple': isChecked,
                            }
                        )}
                    >
                        <Check
                            className={cn('size-[14px] text-purple', {
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
