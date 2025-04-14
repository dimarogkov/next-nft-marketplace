import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { ICollection } from '@/src/types/interfaces/Collection';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Avatar, Text, Title } from '../../ui';

type Props = {
    data: Omit<ICollection, 'nfts'>;
};

const CollectionBanner: FC<Props> = ({ data }) => {
    const { name, totalPrice, totalBid, items, authors } = data;

    const collectionInfoArr = [
        {
            value: totalPrice,
            text: 'Total price',
            type: 'ETH',
        },
        {
            value: totalBid,
            text: 'Total bid',
            type: 'wETH',
        },
        {
            value: items,
            text: 'Items',
            type: null,
        },
        {
            value: authors.length,
            text: 'Authors',
            type: null,
        },
    ];

    return (
        <div className='relative flex flex-col gap-5 lg:gap-7 w-full'>
            <Title titleType={EnumTitle.h2}>{name}</Title>

            <div className='w-full'>
                <Text textType={EnumText.large} className='!text-[18px] md:!text-[20px] mb-3 last:mb-0'>
                    About
                </Text>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 w-full'>
                    {collectionInfoArr.map(({ value, text, type }) => (
                        <div key={text} className='w-full px-3 sm:px-4 py-2 rounded-lg bg-gray'>
                            <Text
                                textType={EnumText.large}
                                className='!text-[18px] md:!text-[20px] font-medium text-white mb-0.5 last:mb-0'
                            >
                                {value} {type}
                            </Text>

                            <Text>{text}</Text>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full'>
                <Text textType={EnumText.large} className='!text-[18px] md:!text-[20px] mb-3 last:mb-0'>
                    Authors
                </Text>

                <div className='flex gap-3 w-full overflow-x-auto pb-2'>
                    {authors.map((author) => (
                        <Avatar
                            key={author.name}
                            href={PATHS.HOME}
                            src={author.avatar}
                            name={author.name}
                            className='px-4 py-2 shrink-0 rounded-lg bg-gray'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionBanner;
