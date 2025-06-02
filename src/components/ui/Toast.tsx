import toast, { type Toast } from 'react-hot-toast';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import Text from './Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: Toast;
    text: string;
    className?: string;
}

const Toast: FC<Props> = forwardRef<HTMLDivElement, Props>(({ toast: t, text, className = '', ...props }, ref) => {
    const { id, visible } = t;

    return (
        <div
            ref={ref}
            {...props}
            className={cn(
                `relative flex items-center w-full sm:w-fit rounded-lg overflow-hidden border-2 border-purple bg-gray ${className}`,
                {
                    'animate-leave': !visible,
                    'animate-enter': visible,
                }
            )}
        >
            <Text className='text-white p-2.5'>{text}</Text>

            <button
                type='button'
                onClick={() => toast.dismiss(id)}
                className='w-fit h-full p-2.5 outline-none border-l-2 border-purple transition-colors duration-200 hover:bg-purple'
            >
                Close
            </button>
        </div>
    );
});

Toast.displayName = 'Toast';
export default Toast;
