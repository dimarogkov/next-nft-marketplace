'use client';
import { FC, useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCard from './NftCard';

type Props = {
    nfts: INFT[];
};

const NftsList: FC<Props> = ({ nfts }) => {
    const [nameQuery] = useQueryState('name');
    const [collectionNameQuery] = useQueryState('collectionName');

    const filteredNfts = useMemo(() => {
        let arr = [...nfts];

        if (collectionNameQuery) {
            arr = arr.filter(({ collectionName }) => collectionName === collectionNameQuery);
        }

        if (nameQuery) {
            arr = arr.filter(({ name }) => name.toLowerCase().includes(nameQuery.toLowerCase()));
        }

        return arr;
    }, [collectionNameQuery, nameQuery, nfts]);

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full'>
            {filteredNfts.map((nft) => (
                <NftCard key={nft.name} nft={nft} />
            ))}
        </div>
    );
};

export default NftsList;
