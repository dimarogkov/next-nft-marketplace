import { FC, InputHTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={cn(
                `relative w-full height-btn font-medium rounded-lg border border-gray bg-transparent px-4 outline-none placeholder:text-gray2 ${className}`,
                {
                    'transition-all duration-300 hover:border-gray2 focus:border-purple': !props.disabled,
                    'opacity-50': props.disabled,
                }
            )}
        />
    );
});

Input.displayName = 'Input';
export default Input;
