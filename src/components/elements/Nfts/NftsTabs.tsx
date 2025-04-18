'use client';
import { FC, useEffect } from 'react';
import { useQueryState } from 'nuqs';
import { EnumMarketplaceTabs } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import { INFT } from '@/src/types/interfaces/NFT';
import NftsList from './NftsList';
import { Tabs } from '../../ui';
import cn from 'classnames';

type Props = {
    data: [INFT[], ICollection[]];
};

const NftsTabs: FC<Props> = ({ data }) => {
    const [tabQuery, setTabQuery] = useQueryState('tab', { defaultValue: '' });
    const [, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [, setPageQuery] = useQueryState('page', { defaultValue: '' });
    const [nfts, collections] = data;

    useEffect(() => {
        setNameQuery('');
        setPageQuery('1');
    }, [tabQuery, setNameQuery, setPageQuery]);

    return (
        <Tabs>
            <Tabs.TabList classNameList='sm:!px-5'>
                {[EnumMarketplaceTabs.NFTs, EnumMarketplaceTabs.Collections].map((tab) => (
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
                            {tab === EnumMarketplaceTabs.NFTs ? nfts.length : collections.length}
                        </span>
                    </Tabs.Tab>
                ))}
            </Tabs.TabList>

            <Tabs.Panels>
                <Tabs.Panel>
                    <NftsList data={nfts} />
                </Tabs.Panel>

                <Tabs.Panel>
                    <NftsList type={EnumMarketplaceTabs.Collections} data={collections} />
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs>
    );
};

export default NftsTabs;
