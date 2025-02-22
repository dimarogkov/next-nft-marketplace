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

        const handleClick = () => setIsPasswordVisible((prevState) => !prevState);
        const handleBlur = () => !isPasswordVisible && setIsPasswordVisible(false);

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            inputRef.current?.focus();
        };

        return (
            <div ref={ref} className={`relative group flex items-center w-full height-btn ${className}`}>
                <Input
                    ref={inputRef}
                    {...props}
                    onBlur={handleBlur}
                    type={isPasswordVisible ? 'text' : 'password'}
                    className={`pr-[52px] sm:pr-[60px] ${classNameInput}`}
                />

                <button
                    type='button'
                    onClick={handleClick}
                    onMouseDown={handleMouseDown}
                    className='absolute right-0 flex items-center justify-center w-[52px] sm:w-[60px] h-full'
                >
                    {!isPasswordVisible ? (
                        <EyeOff className='size-5 stroke-1 text-gray2' />
                    ) : (
                        <Eye className='size-5 stroke-1 text-gray2' />
                    )}
                </button>
            </div>
        );
    }
);

InputPassword.displayName = 'InputPassword';
export default InputPassword;
