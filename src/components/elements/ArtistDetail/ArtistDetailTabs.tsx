'use client';
import { FC, useState } from 'react';
import { INFT } from '@/src/types/interfaces/NFT';
import { ICollection } from '@/src/types/interfaces/Collection';
import { Tabs } from '../../ui';
import cn from 'classnames';
import { NftsList } from '../Nfts';
import { EnumMarketplaceTabs } from '@/src/types/enums';

type Props = {
    data: [INFT[], ICollection[]];
};

const ArtistDetailTabs: FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState(EnumMarketplaceTabs.NFTs);
    const [nfts, collections] = data;

    return (
        <Tabs>
            <Tabs.TabList>
                {[EnumMarketplaceTabs.NFTs, EnumMarketplaceTabs.Collections].map((tab) => (
                    <Tabs.Tab
                        key={tab}
                        onMouseDown={() => setActiveTab(tab)}
                        classNameText='flex items-center justify-center gap-2.5 font-medium'
                    >
                        <span>{tab}</span>

                        <span
                            className={cn(
                                'flex items-center justify-center size-7 md:size-8 text-base rounded-full transition-colors duration-300',
                                {
                                    'text-gray bg-gray2': tab === activeTab,
                                    'text-white bg-gray': tab !== activeTab,
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

export default ArtistDetailTabs;
