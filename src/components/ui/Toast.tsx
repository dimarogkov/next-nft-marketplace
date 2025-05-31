import toast, { type Toast } from 'react-hot-toast';
import { FC, HTMLAttributes, RefAttributes } from 'react';
import Text from './Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: Toast;
    text: string;
    className?: string;
}

const Toast: FC<Props> = ({ toast: t, text, className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={cn(
                `relative flex items-center w-fit rounded-lg overflow-hidden border-2 border-purple bg-gray ${className}`,
                {
                    'animate-leave': !t.visible,
                    'animate-enter': t.visible,
                }
            )}
        >
            <Text className='text-white p-2.5'>{text}</Text>

            <button
                type='button'
                onClick={() => toast.dismiss(t.id)}
                className='w-fit h-full p-2.5 outline-none border-l-2 border-purple transition-colors duration-200 hover:bg-purple'
            >
                Close
            </button>
        </div>
    );
};

export default Toast;
