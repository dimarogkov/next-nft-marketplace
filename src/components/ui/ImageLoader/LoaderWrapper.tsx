import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const LoaderWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative w-full h-0 pb-[100%] overflow-hidden ${className}`} />;
});

LoaderWrapper.displayName = 'LoaderWrapper';
export default LoaderWrapper;
