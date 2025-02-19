import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumText } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    textType?: EnumText;
    className?: string;
}

const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ textType = EnumText.default, className = '', ...props }, ref) => {
        const textClasses = 'relative w-full';

        const textSize = {
            [EnumText.default as string]: 'text-base',
            [EnumText.large as string]: 'text-base md:text-lg',
        };

        return <p ref={ref} {...props} className={cn(`${textClasses} ${textSize[textType]} ${className}`)} />;
    }
);

Text.displayName = 'Text';
export default Text;
