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
    const [activeTabQuery, setActiveTabQuery] = useQueryState('activeTab', { defaultValue: '' });
    const [, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [nfts, collections] = data;

    useEffect(() => {
        setNameQuery('');
    }, [activeTabQuery, setNameQuery]);

    return (
        <Tabs>
            <Tabs.TabList>
                {[EnumMarketplaceTabs.NFTs, EnumMarketplaceTabs.Collections].map((tab) => (
                    <Tabs.Tab
                        key={tab}
                        isActive={tab === activeTabQuery}
                        onMouseDown={() => setActiveTabQuery(tab)}
                        classNameText='flex items-center justify-center gap-2.5 font-medium'
                    >
                        <span>{tab}</span>

                        <span
                            className={cn(
                                'flex items-center justify-center size-[30px] md:size-8 text-base rounded-full transition-colors duration-300',
                                {
                                    'text-gray bg-gray2': tab === activeTabQuery,
                                    'text-white bg-gray': tab !== activeTabQuery,
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
                    <NftsList data={nfts.slice(0, 6)} />
                </Tabs.Panel>

                <Tabs.Panel>
                    <NftsList type={EnumMarketplaceTabs.Collections} data={collections} />
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs>
    );
};

export default NftsTabs;
