import { FC, useMemo } from 'react';
import { PATHS } from '@/src/variables';
import { EnumTitle } from '@/src/types/enums';
import { IImage } from '@/src/types/interfaces/Image';
import { ImageLoader, ImgPlaceholder, Title } from '../../ui';
import cn from 'classnames';

type Props = {
    nfts: IImage[];
};

const CollectionCardNfts: FC<Props> = ({ nfts }) => {
    const nftCount = useMemo(() => nfts.length - 3, [nfts]);

    const nftsArr = useMemo(() => {
        return Array.from({ length: 3 }, (_, index) => nfts[index] || null);
    }, [nfts]);

    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-3 w-full mb-5 lg:mb-4 last:mb-0'>
            {nftsArr.map((nft, index) =>
                nft ? (
                    <ImageLoader key={nft.alt} className={cn('rounded-lg', { 'lg:col-span-3': index === 0 })}>
                        {/* href={nft.alt} */}
                        <ImageLoader.Link href={PATHS.HOME}>
                            <ImageLoader.Image
                                src={nft.src}
                                alt={nft.alt}
                                className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                            />
                        </ImageLoader.Link>
                    </ImageLoader>
                ) : (
                    <div key={`placeholder-${index}`} className='relative w-full'>
                        <ImgPlaceholder className='rounded-lg' />
                    </div>
                )
            )}

            {nftCount > 0 ? (
                <div className='flex items-center justify-center rounded-lg bg-violet-600'>
                    <Title titleType={EnumTitle.h5} className='text-white'>
                        {nftCount}+
                    </Title>
                </div>
            ) : (
                <div className='relative w-full'>
                    <ImgPlaceholder className='rounded-lg' />
                </div>
            )}
        </div>
    );
};

export default CollectionCardNfts;
