import { FC, useMemo } from 'react';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { IImage } from '@/src/types/interfaces/Image';
import { ImageLoader, Title } from '../../ui';
import cn from 'classnames';

type Props = {
    nfts: IImage[];
    collectionName: string;
    className?: string;
};

const CollectionCardNfts: FC<Props> = ({ nfts, collectionName, className = '' }) => {
    const nftCount = useMemo(() => nfts.length - 4, [nfts]);

    const nftsArr = useMemo(() => {
        return Array.from({ length: 4 }, (_, index) => nfts[index] || null).filter((nft) => nft !== null);
    }, [nfts]);

    return (
        <div className='grid grid-cols-6 w-full'>
            {nftsArr.map((nft, index) => (
                <ImageLoader
                    key={nft.alt}
                    className={cn(index !== 0 && `${className}`, {
                        'left-4 rounded-full outline outline-4 -mt-[50%] bg-gray': index !== 0,
                        'col-span-6 !pb-[75%] rounded-lg': index === 0,
                    })}
                    style={{
                        ...(index !== 0 && {
                            left: `${16 - (index * 10 - 10)}px`,
                        }),
                    }}
                >
                    <ImageLoader.Link href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}/${nft.alt}`}>
                        <ImageLoader.Image
                            src={nft.src}
                            alt={nft.alt}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>
            ))}

            {nftCount > 0 && (
                <div
                    className={`relative -left-[14px] flex items-center justify-center rounded-full outline outline-4  bg-violet-600 -mt-[50%] ${className}`}
                >
                    <Title titleType={EnumTitle.h5} className='!font-medium !text-[18px] text-white'>
                        {nftCount}+
                    </Title>
                </div>
            )}
        </div>
    );
};

export default CollectionCardNfts;
