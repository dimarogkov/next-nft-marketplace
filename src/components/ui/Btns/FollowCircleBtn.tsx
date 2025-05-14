import { FC, forwardRef, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { UserMinus, UserPlus } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'button'>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
}

const FollowCircleBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ isActive = false, className = '', ...props }, ref) => {
        const animation: HTMLMotionProps<'button'> = {
            whileTap: { scale: 0.8 },
        };

        return (
            <motion.button
                ref={ref}
                {...props}
                {...animation}
                className={cn(
                    `relative flex items-center justify-center w-9 h-9 rounded-full outline-none border-2 border-purple transition-colors duration-200 hover:border-violet-600 hover:bg-violet-600 ${className}`,
                    {
                        'bg-purple': isActive,
                    }
                )}
            >
                {isActive ? (
                    <UserMinus className='relative left-0.5 size-5 text-white' />
                ) : (
                    <UserPlus className='relative left-0.5 size-5 text-white' />
                )}
            </motion.button>
        );
    }
);

FollowCircleBtn.displayName = 'FollowCircleBtn';
export default FollowCircleBtn;
