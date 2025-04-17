'use client';
import { FC, Fragment, useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { usePagination } from '@/src/hooks';
import { EnumColorStyle, EnumMarketplaceTabs } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import { INFT } from '@/src/types/interfaces/NFT';
import { NoResultsFound } from '../NoResultsFound';
import { CollectionCard } from '../Collection';
import { Pagination } from '../Pagination';
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

    const { data: slicedData, ...paginationOptions } = usePagination(filteredData);

    const resetFilters = () => {
        setNameQuery('');
        setCollectionNameQuery('');
    };

    return (
        <div className='relative flex flex-col items-center w-full min-h-[50vh]'>
            {filteredData.length ? (
                <div className='w-full'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-5 lg:gap-7 w-full mb-7 last:mb-0'>
                        {slicedData.map((item) => (
                            <Fragment key={item.name}>
                                {!isNFTsType ? (
                                    <CollectionCard collection={item as ICollection} cardType={EnumColorStyle.dark} />
                                ) : (
                                    <NftCard nft={item as INFT} cardType={EnumColorStyle.dark} />
                                )}
                            </Fragment>
                        ))}
                    </div>

                    <Pagination options={paginationOptions} />
                </div>
            ) : (
                <NoResultsFound handleClick={resetFilters} />
            )}
        </div>
    );
};

export default NftsList;
