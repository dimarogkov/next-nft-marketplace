import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    isActive?: boolean;
    className?: string;
}

const Tag: FC<Props> = forwardRef<HTMLSpanElement, Props>(({ isActive, className = '', ...props }, ref) => {
    return (
        <span
            ref={ref}
            {...props}
            className={cn(
                'relative flex items-center gap-1 h-10 font-medium px-4 rounded-lg border transition-all duration-300',
                {
                    'text-gray2 border-gray hover:border-gray2': !isActive,
                    'text-black border-white bg-white': isActive,
                }
            )}
        />
    );
});

Tag.displayName = 'Tag';
export default Tag;
