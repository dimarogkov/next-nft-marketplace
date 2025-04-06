'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useBreadcrumbsStatus } from '@/src/hooks';
import { ImageLoader } from '../../ui';
import cn from 'classnames';

type Props = {
    src: string;
    alt: string;
    children?: ReactNode;
};

const FullPage: FC<Props> = ({ src, alt, children }) => {
    const pathname = usePathname();
    const { isBreadcrumbsExist } = useBreadcrumbsStatus(pathname);

    return (
        <section
            className={cn('relative grow w-full section-padding-top', {
                'section-height-full-with-breadcrumbs': isBreadcrumbsExist,
                'section-height-full': !isBreadcrumbsExist,
            })}
        >
            <div className='container h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-7 lg:gap-10 w-full h-full'>
                    {children}

                    <ImageLoader className='hidden md:block !h-full !pb-0 rounded-lg'>
                        <ImageLoader.Image src={src} alt={alt} />
                    </ImageLoader>
                </div>
            </div>
        </section>
    );
};

export default FullPage;
