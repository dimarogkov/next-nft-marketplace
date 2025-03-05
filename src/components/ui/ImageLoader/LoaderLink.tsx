'use client';
import { Children, cloneElement, FC, forwardRef, isValidElement, ReactElement, ReactNode, RefAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps, RefAttributes<HTMLAnchorElement> {
    isOptimized?: boolean;
    isLoading?: boolean;
    handleLoad?: () => void;
    handleError?: () => void;
    children?: ReactNode;
    className?: string;
}

const LoaderLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    (
        { isOptimized, isLoading, className = '', handleLoad = () => {}, handleError = () => {}, children, ...props },
        ref
    ) => {
        return (
            <Link ref={ref} {...props} className={`absolute top-0 left-0 w-full h-full ${className}`}>
                {Children.map(children, (child) => {
                    if (isValidElement(child) && child.type !== 'div') {
                        return cloneElement(child as ReactElement, {
                            isOptimized,
                            isLoading,
                            handleLoad,
                            handleError,
                        });
                    }

                    return child;
                })}
            </Link>
        );
    }
);

LoaderLink.displayName = 'LoaderLink';
export default LoaderLink;
