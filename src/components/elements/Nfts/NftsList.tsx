'use client';
import { FC, Fragment, useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { EnumCard, EnumMarketplaceTabs } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import { INFT } from '@/src/types/interfaces/NFT';
import { NoResultsFound } from '../NoResultsFound';
import { CollectionCard } from '../CollectionCard';
import NftCard from './NftCard';

type Props = {
    type?: EnumMarketplaceTabs;
    data: INFT[] | ICollection[];
};

const NftsList: FC<Props> = ({ type = EnumMarketplaceTabs.NFTs, data }) => {
    const [collectionNameQuery, setCollectionNameQuery] = useQueryState('collectionName', { defaultValue: '' });
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });

    const isNFTsType = useMemo(() => type === EnumMarketplaceTabs.NFTs, [type]);

    const filteredData = useMemo(() => {
        let arr = [...data];

        if (isNFTsType && collectionNameQuery) {
            arr = (arr as INFT[]).filter(({ collectionName }) => collectionName === collectionNameQuery);
        }

        if (nameQuery) {
            arr = arr.filter(({ name }) => name.toLowerCase().includes(nameQuery.toLowerCase()));
        }

        return arr;
    }, [data, collectionNameQuery, nameQuery, isNFTsType]);

    const resetFilters = () => {
        setNameQuery('');
        setCollectionNameQuery('');
    };

    return (
        <>
            {filteredData.length ? (
                <div className='grid lg:grid-cols-3 gap-7 w-full'>
                    {filteredData.map((item) => (
                        <Fragment key={item.name}>
                            {!isNFTsType ? (
                                <CollectionCard collection={item as ICollection} cardType={EnumCard.dark} />
                            ) : (
                                <NftCard nft={item as INFT} cardType={EnumCard.dark} />
                            )}
                        </Fragment>
                    ))}
                </div>
            ) : (
                <NoResultsFound handleClick={resetFilters} />
            )}
        </>
    );
};

export default NftsList;
