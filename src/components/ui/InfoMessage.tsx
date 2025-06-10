import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import Text from './Text';
import { Info } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

const InfoMessage: FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={`relative flex items-start gap-2 w-full min-h-12 p-2.5 rounded-lg border border-yellow bg-amber-500/10 ${className}`}
        >
            <Info className='relative top-[1px] size-5 min-w-5 text-yellow' />
            <Text className='text-yellow'>{props.children}</Text>
        </div>
    );
});

InfoMessage.displayName = 'InfoMessage';
export default InfoMessage;
