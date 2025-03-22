import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import Text from './Text';
import { TriangleAlert } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

const ErrorMessage: FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={`relative flex items-center gap-1.5 w-full py-2 rounded-lg border border-red px-4 md:px-5 bg-red/15 ${className}`}
        >
            <TriangleAlert className='size-5 min-w-5 text-red' />
            <Text className='text-red'>{props.children}</Text>
        </div>
    );
});

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;
