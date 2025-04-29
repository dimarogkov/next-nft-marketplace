'use client';
import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes, useState } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { EnumColorStyle } from '@/src/types/enums';
import { Heart } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    colorType?: EnumColorStyle;
    isActive?: boolean;
    className?: string;
}

const LikeBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ colorType = EnumColorStyle.dark, isActive = false, className = '', ...props }, ref) => {
        const [isLiked, setIsLiked] = useState(isActive);

        const btnClasses = {
            [EnumColorStyle.dark as string]: 'bg-black',
            [EnumColorStyle.gray as string]: 'bg-gray',
        };

        const animation: HTMLMotionProps<'span'> = {
            whileTap: { scale: 0.8 },
        };

        return (
            <button
                ref={ref}
                {...props}
                onClick={() => setIsLiked((prevState) => !prevState)}
                className={`relative flex items-center justify-center w-9 h-9 rounded-full ${btnClasses[colorType]} ${className}`}
            >
                <motion.span {...animation}>
                    <Heart
                        className={cn('size-5 transition-all duration-100', {
                            'text-gray2 fill-none': !isLiked,
                            'text-red fill-red': isLiked,
                        })}
                    />
                </motion.span>
            </button>
        );
    }
);

LikeBtn.displayName = 'LikeBtn';
export default LikeBtn;
