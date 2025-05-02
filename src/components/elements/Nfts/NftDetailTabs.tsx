import { FC } from 'react';
import { IArtist } from '@/src/types/interfaces/Artist';
import NftDetailBidItem from './NftDetailBidItem';
import NftDetailInfo from './NftDetailInfo';
import { Tabs } from '../../ui';

type Props = {
    data: {
        price: number;
        highestBid: number;
        tags: string[];
        description: string;
    };
    artists: IArtist[];
};

const NftDetailTabs: FC<Props> = ({ data, artists }) => {
    return (
        <Tabs className='-left-4 sm:left-auto !w-[calc(100%+32px)] sm:!w-full sm:border sm:border-gray sm:rounded-lg'>
            <Tabs.TabList className='sm:!border-none'>
                {['Details', 'Bids', 'History'].map((tab) => (
                    <Tabs.Tab key={tab}>{tab}</Tabs.Tab>
                ))}
            </Tabs.TabList>

            <Tabs.Panels>
                <Tabs.Panel>
                    <NftDetailInfo data={data} />
                </Tabs.Panel>
                <Tabs.Panel>
                    <div className='relative w-full'>
                        {artists.slice(0, 6).map((artist) => (
                            <NftDetailBidItem key={artist.name} artist={artist} />
                        ))}
                    </div>
                </Tabs.Panel>
                <Tabs.Panel>
                    <div className='relative w-full'>
                        {artists.slice(0, 5).map((artist) => (
                            <NftDetailBidItem key={artist.name} artist={artist} />
                        ))}
                    </div>
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs>
    );
};

export default NftDetailTabs;
