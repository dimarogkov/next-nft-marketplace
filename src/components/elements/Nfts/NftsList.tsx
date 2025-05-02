'use client';
import { FC, Fragment, ReactNode, useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { usePagination } from '@/src/hooks';
import { EnumColorStyle, EnumTabs } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import { INFT } from '@/src/types/interfaces/NFT';
import { CollectionCard } from '../Collection';
import { Pagination } from '../Pagination';
import NftCard from './NftCard';

type Props = {
    data: INFT[] | ICollection[];
    type?: EnumTabs;
    notExistComponent: ReactNode;
};

const NftsList: FC<Props> = ({ data, type = EnumTabs.NFTs, notExistComponent }) => {
    const [nameQuery] = useQueryState('name');
    const [collectionNameQuery] = useQueryState('collectionName');

    const isNFTsType = useMemo(() => type === EnumTabs.NFTs, [type]);

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

    return (
        <div className='relative flex flex-col items-center w-full min-h-[50vh]'>
            <div className='container section-padding'>
                {filteredData.length ? (
                    <div className='w-full'>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-5 lg:gap-7 w-full mb-7 last:mb-0'>
                            {slicedData.map((item) => (
                                <Fragment key={item.name}>
                                    {!isNFTsType ? (
                                        <CollectionCard
                                            collection={item as ICollection}
                                            cardType={EnumColorStyle.dark}
                                        />
                                    ) : (
                                        <NftCard nft={item as INFT} cardType={EnumColorStyle.dark} />
                                    )}
                                </Fragment>
                            ))}
                        </div>

                        <Pagination options={paginationOptions} />
                    </div>
                ) : (
                    <>{notExistComponent}</>
                )}
            </div>
        </div>
    );
};

export default NftsList;
