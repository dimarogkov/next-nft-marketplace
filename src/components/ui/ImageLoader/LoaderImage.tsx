'use client';
import { FC, forwardRef, RefAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { getBlurDataURL } from '@/src/helpers';
import cn from 'classnames';

interface Props extends ImageProps, RefAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    isOptimized?: boolean;
    isLoading?: boolean;
    handleLoad?: () => void;
    handleError?: () => void;
    className?: string;
}

const LoaderImage: FC<Props> = forwardRef<HTMLImageElement, Props>(
    (
        { src, alt, isOptimized, isLoading, className = '', handleLoad = () => {}, handleError = () => {}, ...props },
        ref
    ) => {
        return (
            <Image
                ref={ref}
                {...props}
                src={src}
                blurDataURL={getBlurDataURL()}
                alt={alt}
                className={cn(`img ${className}`, { invisible: isLoading })}
                placeholder='blur'
                sizes='100%'
                fill
                onLoad={handleLoad}
                onError={handleError}
                unoptimized={!isOptimized}
            />
        );
    }
);

LoaderImage.displayName = 'LoaderImage';
export default LoaderImage;
