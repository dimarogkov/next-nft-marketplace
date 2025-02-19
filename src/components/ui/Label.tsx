import { FC, LabelHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement>, RefAttributes<HTMLLabelElement> {
    className?: string;
}

const Label: FC<Props> = forwardRef<HTMLLabelElement, Props>(({ className = '', ...props }, ref) => {
    const labelClasses = 'relative block w-full';

    return <label ref={ref} {...props} className={`${labelClasses} ${className}`} />;
});

Label.displayName = 'Label';
export default Label;
