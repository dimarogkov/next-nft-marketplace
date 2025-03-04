'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useImageLoader } from '@/src/hooks';
import { IImage } from '@/src/types/interfaces/Image';

import { ImgPlaceholder, Skeleton } from '../../ui';
import cn from 'classnames';

type Props = {
    img: IImage;
};

const NftCardImg: FC<Props> = ({ img }) => {
    const { isOptimized, isLoading, hasError, handleLoad, handleError } = useImageLoader();

    return (
        <div className='relative w-full sm:w-[40%] md:w-full h-0 pb-[70%] sm:pb-[30%] md:pb-[70%] overflow-hidden'>
            {isLoading && !hasError && <Skeleton />}

            {hasError && <ImgPlaceholder />}

            {!hasError && (
                <Link href={img.alt} className='absolute top-0 left-0 w-full h-full'>
                    <Image
                        src={img.src}
                        alt={img.alt}
                        className={cn(
                            'img will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75',
                            { invisible: isLoading }
                        )}
                        sizes='100%'
                        fill
                        onLoad={handleLoad}
                        onError={handleError}
                        unoptimized={!isOptimized}
                    />
                </Link>
            )}
        </div>
    );
};

export default NftCardImg;
