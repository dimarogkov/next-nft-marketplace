import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Store } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const ImgPlaceholder: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={`absolute top-0 left-0 flex items-center justify-center w-full h-full border-2 border-gray bg-black ${className}`}
        >
            <span className='flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray'>
                <Store className='size-6 text-gray' />
            </span>
        </div>
    );
});

ImgPlaceholder.displayName = 'ImgPlaceholder';
export default ImgPlaceholder;
