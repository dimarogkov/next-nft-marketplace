'use client';
import { FC } from 'react';
import { usePagination } from '@/src/hooks';
import { INFT } from '@/src/types/interfaces/NFT';
import { NftCard } from '../Nfts';
import { Pagination } from '../Pagination';
import { EnumColorStyle } from '@/src/types/enums';

type Props = {
    nfts: INFT[];
};

const CollectionList: FC<Props> = ({ nfts }) => {
    const { data: slicedData, ...options } = usePagination(nfts);

    return (
        <div className='relative w-full'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-5 lg:gap-7 w-full mb-7 md:mb-10 last:mb-0'>
                {slicedData.map((nft) => (
                    <NftCard key={nft.name} nft={nft} />
                ))}
            </div>

            <Pagination type={EnumColorStyle.gray} options={options} />
        </div>
    );
};

export default CollectionList;
