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
        return (
            <div className={`relative flex items-center gap-3 cursor-pointer ${className}`}>
                <div className='relative size-5 min-w-5'>
                    <input
                        ref={ref}
                        {...props}
                        type='radio'
                        value={value}
                        className='absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer'
                    />

                    <span
                        className={cn(
                            'flex items-center justify-center w-full h-full border rounded-full bg-transparent',
                            {
                                'border-gray': isChecked !== value,
                                'border-purple': isChecked === value,
                            }
                        )}
                    >
                        <Circle
                            className={cn('size-3 rounded-full text-purple bg-purple', {
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
