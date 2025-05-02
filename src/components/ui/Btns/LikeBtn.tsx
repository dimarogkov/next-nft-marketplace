import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { EnumColorStyle } from '@/src/types/enums';
import { Heart } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    colorType?: EnumColorStyle;
    className?: string;
}

const LikeBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ isActive = false, colorType = EnumColorStyle.dark, className = '', ...props }, ref) => {
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
                className={`relative flex items-center justify-center w-9 h-9 rounded-full ${btnClasses[colorType]} ${className}`}
            >
                <motion.span {...animation}>
                    <Heart
                        className={cn('size-5 transition-all duration-100', {
                            'text-gray2 fill-none': !isActive,
                            'text-red fill-red': isActive,
                        })}
                    />
                </motion.span>
            </button>
        );
    }
);

LikeBtn.displayName = 'LikeBtn';
export default LikeBtn;
