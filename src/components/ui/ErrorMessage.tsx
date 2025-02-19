import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

const ErrorMessage: FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => {
    const errorMessageClasses = 'relative w-full font-medium text-sm text-red';

    return <p ref={ref} {...props} className={`${errorMessageClasses} ${className}`} />;
});

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;
