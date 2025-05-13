'use client';
import { FC, useEffect } from 'react';
import { useQueryState } from 'nuqs';
import { useSession } from 'next-auth/react';
import { EnumTabs } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import { INFT } from '@/src/types/interfaces/NFT';
import { IProfile } from '@/src/types/interfaces/Profile';
import NftsList from './NftsList';
import { NoLikedNftFound, NoNftFound, NoResultsFound } from '../NoExist';
import { Tabs } from '../../ui';
import cn from 'classnames';

type Props = {
    data: [INFT[], ICollection[]];
    isProfile?: boolean;
};

const NftsTabs: FC<Props> = ({ data, isProfile = false }) => {
    const { data: session } = useSession();
    const [tabQuery, setTabQuery] = useQueryState('tab', { defaultValue: '' });
    const [, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [, setCollectionNameQuery] = useQueryState('collectionName', { defaultValue: '' });
    const [, setPageQuery] = useQueryState('page', { defaultValue: '' });

    const [nfts, collections] = data;
    const likedNfts = (session?.user as IProfile)?.data.likedNfts || [];

    useEffect(() => {
        setNameQuery('');
        setPageQuery('1');
    }, [tabQuery, setNameQuery, setPageQuery]);

    const tabsArr = isProfile
        ? [EnumTabs.NFTs, EnumTabs.Collections, EnumTabs.Liked]
        : [EnumTabs.NFTs, EnumTabs.Collections];

    const tabCount = {
        [EnumTabs.NFTs as string]: nfts.length,
        [EnumTabs.Collections as string]: collections.length,
        [EnumTabs.Liked as string]: likedNfts.length,
    };

    const resetFilters = () => {
        setNameQuery('');
        setCollectionNameQuery('');
    };

    const notExist = !isProfile ? <NoResultsFound handleClick={resetFilters} /> : <NoNftFound />;

    return (
        <Tabs>
            <Tabs.TabList classNameList='md:!px-5'>
                {tabsArr.map((tab) => (
                    <Tabs.Tab
                        key={tab}
                        isActive={tab === tabQuery}
                        onMouseDown={() => setTabQuery(tab)}
                        classNameText='flex items-center justify-center gap-2.5 font-medium'
                    >
                        <span>{tab}</span>

                        <span
                            className={cn(
                                'flex items-center justify-center size-7 md:size-8 text-base rounded-full transition-colors duration-300',
                                {
                                    'text-gray bg-gray2': tab === tabQuery,
                                    'text-white bg-gray': tab !== tabQuery,
                                }
                            )}
                        >
                            {tabCount[tab]}
                        </span>
                    </Tabs.Tab>
                ))}
            </Tabs.TabList>

            <Tabs.Panels>
                <Tabs.Panel>
                    <NftsList data={nfts} notExistComponent={notExist} />
                </Tabs.Panel>

                <Tabs.Panel>
                    <NftsList data={collections} type={EnumTabs.Collections} notExistComponent={notExist} />
                </Tabs.Panel>

                {isProfile && (
                    <Tabs.Panel>
                        <NftsList data={likedNfts} notExistComponent={<NoLikedNftFound />} />
                    </Tabs.Panel>
                )}
            </Tabs.Panels>
        </Tabs>
    );
};

export default NftsTabs;
