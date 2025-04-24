import { FC } from 'react';
import { Text } from '../../ui';
import { EnumText } from '@/src/types/enums';

type Props = {
    data: {
        price: number;
        highestBid: number;
        tags: string[];
        description: string;
    };
};

const NftDetailInfo: FC<Props> = ({ data }) => {
    const { price, highestBid, description, tags } = data;

    const NftInfoArr = [
        {
            value: `${price} ETH`,
            text: 'Price',
        },
        {
            value: `${highestBid} wETH`,
            text: 'Highest Bid',
        },
    ];

    return (
        <div className='relative container py-8 sm:py-4 md:py-5'>
            <div className='flex flex-col gap-5 lg:gap-7 w-full'>
                <div className='w-full'>
                    <Text className='text-white mb-2.5 last:mb-0'>Total Value</Text>

                    <div className='grid sm:grid-cols-2 gap-2.5 w-full'>
                        {NftInfoArr.map(({ value, text }) => (
                            <div key={text} className='w-full px-3 sm:px-4 py-2 rounded-lg bg-black'>
                                <Text
                                    textType={EnumText.large}
                                    className='!text-[18px] md:!text-[20px] font-medium text-white mb-0.5 last:mb-0'
                                >
                                    {value}
                                </Text>

                                <Text>{text}</Text>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full'>
                    <Text className='text-white mb-2.5 last:mb-0'>Description</Text>

                    <div className='flex flex-col gap-2.5 w-full'>
                        <Text>{description}</Text>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum reprehenderit
                            recusandae nesciunt laboriosam quas perspiciatis in facilis velit pariatur dicta illo aut
                            quasi voluptate, numquam molestias corrupti rem molestiae!
                        </Text>
                    </div>
                </div>

                <div className='w-full'>
                    <Text className='text-white mb-2.5 last:mb-0'>Tags</Text>

                    <div className='flex flex-wrap gap-2 w-full'>
                        {tags.map((tag) => (
                            <div key={tag} className='px-4 py-2 rounded-lg bg-black'>
                                <Text>{tag}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftDetailInfo;
