import { FC } from 'react';
import { Session } from 'next-auth';
import { PATHS } from '@/src/variables';
import { getArtists } from '@/src/services';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { INFT } from '@/src/types/interfaces/NFT';
import NftDetailBidItem from './NftDetailBidItem';
import NftDetailInfo from './NftDetailInfo';
import { Timer } from '../Timer';
import { Avatar, Btn, BtnLink, Tabs, Text, Title } from '../../ui';

type Props = {
    session: Session | null;
    data: INFT;
};

const NftDetailContent: FC<Props> = async ({ data, session }) => {
    const { name, collectionName, publishDate, img, author, ...infoData } = data;
    const artists = await getArtists();

    return (
        <div className='relative flex flex-col gap-5 lg:gap-7 w-full'>
            <div className='w-full'>
                <Text>{publishDate}</Text>
                <Title titleType={EnumTitle.h2}>{name}</Title>
            </div>

            <div className='flex flex-wrap gap-4 w-full'>
                <div className='w-fit'>
                    <Text className='mb-2.5 last:mb-0'>Collection</Text>

                    <Avatar
                        href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}?${PATHS.PARAMS.PAGE}`}
                        src={img.src}
                        name={collectionName}
                        className='px-4 py-2 shrink-0 rounded-lg bg-gray'
                        classNameImage='!size-6 !pb-0'
                    />
                </div>

                <div className='w-fit'>
                    <Text className='mb-2.5 last:mb-0'>Created By</Text>

                    {/* convertToSnakeCase(author.name) */}
                    <Avatar
                        href={PATHS.HOME}
                        src={author.avatar}
                        name={author.name}
                        className='px-4 py-2 shrink-0 rounded-lg bg-gray'
                        classNameImage='!size-6 !pb-0'
                    />
                </div>
            </div>

            <Tabs className='-left-4 sm:left-auto !w-[calc(100%+32px)] sm:!w-full sm:border sm:border-gray sm:rounded-lg'>
                <Tabs.TabList className='sm:!border-none'>
                    {['Details', 'Bids', 'History'].map((tab) => (
                        <Tabs.Tab key={tab}>{tab}</Tabs.Tab>
                    ))}
                </Tabs.TabList>

                <Tabs.Panels>
                    <Tabs.Panel>
                        <NftDetailInfo data={infoData} />
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

            <Timer hours={6} className='!w-full !max-w-full bg-gray' />

            {!session ? (
                <BtnLink href={PATHS.SIGN_IN} className='sm:w-full'>
                    Place a Bid
                </BtnLink>
            ) : (
                <Btn className='sm:w-full'>Place a Bid</Btn>
            )}
        </div>
    );
};

export default NftDetailContent;
