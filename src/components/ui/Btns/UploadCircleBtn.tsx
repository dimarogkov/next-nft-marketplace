import { ButtonHTMLAttributes, FC, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    className?: string;
}

const UploadCircleBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ icon: Icon, className = '', ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                type='button'
                className={`relative flex items-center justify-center size-8 rounded-full bg-gray outline-none transition-colors duration-300 hover:bg-gray/80 ${className}`}
            >
                <Icon className='size-4 text-white' />
            </button>
        );
    }
);

UploadCircleBtn.displayName = 'UploadCircleBtn';
export default UploadCircleBtn;
