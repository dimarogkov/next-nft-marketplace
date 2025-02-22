import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumTitle } from '@/src/types/enums/Title';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    titleType?: EnumTitle;
    className?: string;
}

const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ titleType = EnumTitle.h1, className = '', ...props }, ref) => {
        const titleClasses = 'relative font-semibold';

        const titleSize = {
            [EnumTitle.h1 as string]:
                'text-[38px] sm:text-[44px] md:text-[58px] lg:text-[66px] leading-[1.25] sm:leading-[1.2] lg:leading-[1.15]',
            [EnumTitle.h2 as string]: 'text-[28px] sm:text-3xl md:text-4xl lg:text-5xl',
            [EnumTitle.h3 as string]: 'text-2xl md:text-3xl lg:text-4xl',
            [EnumTitle.h4 as string]: 'text-xl md:text-2xl',
        };

        return (
            <>
                {titleType === EnumTitle.h1 && (
                    <h1 ref={ref} {...props} className={`${titleClasses} ${titleSize[titleType]} ${className}`} />
                )}

                {titleType === EnumTitle.h2 && (
                    <h2 ref={ref} {...props} className={`${titleClasses} ${titleSize[titleType]} ${className}`} />
                )}

                {titleType === EnumTitle.h3 && (
                    <h3 ref={ref} {...props} className={`${titleClasses} ${titleSize[titleType]} ${className}`} />
                )}

                {titleType === EnumTitle.h4 && (
                    <h4 ref={ref} {...props} className={`${titleClasses} ${titleSize[titleType]} ${className}`} />
                )}
            </>
        );
    }
);

Title.displayName = 'Title';
export default Title;
