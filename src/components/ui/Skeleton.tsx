import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    className?: string;
}

const Skeleton: FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <span
            ref={ref}
            {...props}
            className={`absolute top-0 left-0 w-full h-full bg-gray2 animate-pulse ${className}`}
        />
    );
});

Skeleton.displayName = 'Skeleton';
export default Skeleton;
