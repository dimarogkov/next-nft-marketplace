import { FC, InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    const inputClasses =
        'relative w-full height-btn font-medium rounded-md border border-gray bg-transparent px-4 md:px-5 outline-none placeholder:text-gray2 transition-all duration-300';

    const hoverClasses = 'hover:border-gray2';
    const focusClasses = 'focus:border-purple';

    return <input ref={ref} {...props} className={`${inputClasses} ${hoverClasses} ${focusClasses} ${className}`} />;
});

Input.displayName = 'Input';
export default Input;
