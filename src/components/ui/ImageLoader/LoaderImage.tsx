import { FC, forwardRef, RefAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { getBlurDataURL } from '@/src/helpers';
import cn from 'classnames';

interface Props extends ImageProps, RefAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const LoaderImage: FC<Props> = forwardRef<HTMLImageElement, Props>(({ src, alt, className = '', ...props }, ref) => {
    return (
        <Image
            ref={ref}
            {...props}
            src={src}
            blurDataURL={getBlurDataURL()}
            alt={alt}
            className={cn(`img ${className}`)}
            placeholder='blur'
            loading='lazy'
            sizes='100%'
            fill
        />
    );
});

LoaderImage.displayName = 'LoaderImage';
export default LoaderImage;
