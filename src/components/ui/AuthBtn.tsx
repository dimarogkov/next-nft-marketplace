import { EnumBtn } from '@/src/types/enums';
import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    btnType?: EnumBtn;
    className?: string;
}

const AuthBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ btnType = EnumBtn.purple, className = '', ...props }, ref) => {
        const btnClasses = {
            [EnumBtn.purple as string]: 'bg-purple text-white hover:bg-violet-600',
            [EnumBtn.outline as string]:
                'border-2 border-purple text-white hover:bg-violet-600 hover:border-violet-600',
            [EnumBtn.light as string]: 'bg-white text-black hover:bg-stone-200',
        };

        return (
            <button
                ref={ref}
                {...props}
                className={`relative flex items-center justify-center gap-2 w-full height-btn font-medium px-4 sm:px-5 md:px-8 rounded-lg transition-all duration-200 active:scale-95 ${btnClasses[btnType]} ${className}`}
            />
        );
    }
);

AuthBtn.displayName = 'AuthBtn';
export default AuthBtn;
