'use client';
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
} from 'react';
import { useImageLoader } from '@/src/hooks';
import Skeleton from '../Skeleton';
import ImgPlaceholder from '../ImgPlaceholder';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const LoaderWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const { isOptimized, isLoading, hasError, handleLoad, handleError } = useImageLoader();

    return (
        <div ref={ref} {...props} className={`relative w-full h-0 pb-[100%] overflow-hidden ${className}`}>
            {isLoading && !hasError && <Skeleton />}
            {hasError && <ImgPlaceholder />}

            {!hasError && (
                <>
                    {Children.map(props.children, (child) => {
                        if (isValidElement(child)) {
                            return cloneElement(child as ReactElement, {
                                isOptimized,
                                isLoading,
                                handleLoad,
                                handleError,
                            });
                        }

                        return child;
                    })}
                </>
            )}
        </div>
    );
});

LoaderWrapper.displayName = 'LoaderWrapper';
export default LoaderWrapper;
