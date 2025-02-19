'use client';
import { FC, InputHTMLAttributes, RefAttributes, forwardRef, MouseEvent, useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Input from './Input';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
    classNameInput?: string;
}

const InputPassword: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ className = '', classNameInput = '', ...props }, ref) => {
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const inputRef = useRef<HTMLInputElement | null>(null);

        const inputPasswordClasses = 'relative group flex items-center w-full height-btn';
        const buttonClasses = 'absolute right-0 flex items-center justify-center w-[60px] h-full';
        const iconClasses = 'size-5 stroke-1 text-gray2';

        const handleClick = () => setIsPasswordVisible((prevState) => !prevState);

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            inputRef.current?.focus();
        };

        const handleBlur = () => !isPasswordVisible && setIsPasswordVisible(false);

        return (
            <div ref={ref} className={`${inputPasswordClasses} ${className}`}>
                <Input
                    ref={inputRef}
                    {...props}
                    onBlur={handleBlur}
                    type={isPasswordVisible ? 'text' : 'password'}
                    className={`pr-[60px] ${classNameInput}`}
                />

                <button type='button' onClick={handleClick} onMouseDown={handleMouseDown} className={buttonClasses}>
                    {!isPasswordVisible ? <EyeOff className={iconClasses} /> : <Eye className={iconClasses} />}
                </button>
            </div>
        );
    }
);

InputPassword.displayName = 'InputPassword';
export default InputPassword;
