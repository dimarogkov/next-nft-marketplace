import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumText } from '@/src/types/enums';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    textType?: EnumText;
    className?: string;
}

const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ textType = EnumText.default, className = '', ...props }, ref) => {
        const textSize = {
            [EnumText.default as string]: 'text-base leading-[1.5]',
            [EnumText.large as string]: 'text-base md:text-lg lg:text-xl leading-[1.5] lg:leading-[1.6]',
        };

        return <p ref={ref} {...props} className={`relative w-full text-gray2 ${textSize[textType]} ${className}`} />;
    }
);

Text.displayName = 'Text';
export default Text;
