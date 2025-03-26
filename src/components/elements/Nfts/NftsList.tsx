'use client';
import { FC, useEffect, useMemo, useState } from 'react';
import { useQueryState } from 'nuqs';
import { INFT } from '@/src/types/interfaces/NFT';

import { NoResultsFound } from '../NoResultsFound';
import NftCardSkeleton from './NftCardSkeleton';
import NftCard from './NftCard';
import cn from 'classnames';

type Props = {
    nfts: INFT[];
};

const NftsList: FC<Props> = ({ nfts }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [collectionNameQuery, setCollectionNameQuery] = useQueryState('collectionName', { defaultValue: '' });

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

    useEffect(() => {
        setIsLoading(true);

        const time = setTimeout(() => setIsLoading(false), 1000);

        return () => clearTimeout(time);
    }, [filteredNfts]);

    const resetFilters = () => {
        setNameQuery('');
        setCollectionNameQuery('');
    };

    if (isLoading) {
        return (
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full'>
                {[...new Array(6).fill(0)].map((_, index) => (
                    <NftCardSkeleton
                        key={crypto.randomUUID()}
                        className={cn({ 'hidden sm:block': index > 1, 'hidden lg:block': index > 3 })}
                    />
                ))}
            </div>
        );
    }

    return (
        <>
            {filteredNfts.length ? (
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full'>
                    {filteredNfts.map((nft) => (
                        <NftCard key={nft.name} nft={nft} />
                    ))}
                </div>
            ) : (
                <NoResultsFound handleClick={resetFilters} />
            )}
        </>
    );
};

export default NftsList;
