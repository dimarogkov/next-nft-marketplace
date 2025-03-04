import { FC } from 'react';
import Link from 'next/link';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumText } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { Avatar, Text } from '../../ui';

type Props = {
    content: {
        name: string;
        author: IAuthor;
        price: number;
        highestBid: number;
    };
};

const NftCardContent: FC<Props> = ({ content }) => {
    const { name, author, price, highestBid } = content;

    return (
        <div className='relative flex flex-col justify-between w-full sm:w-[60%] md:w-full p-4 sm:p-5'>
            <div className='w-full mb-5 md:mb-[30px] last:mb-0'>
                <Text textType={EnumText.large} className='font-semibold !text-xl mb-3 last:mb-0'>
                    <Link
                        href={convertToSnakeCase(name)}
                        className='text-white transition-colors duration-300 hover:text-white/70'
                    >
                        {name}
                    </Link>
                </Text>

                <Avatar href={convertToSnakeCase(author.userName)} src={author.avatar} userName={author.userName} />
            </div>

            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className='w-fit'>
                        <span className='block text-sm text-gray2/50 mb-0.5 last:mb-0'>Price</span>
                        <Text className='font-space-mono text-white'>{price} ETH</Text>
                    </div>

                    <div className='w-fit text-right'>
                        <span className='block text-sm text-gray2/50 mb-0.5 last:mb-0'>Highest Bid</span>
                        <Text className='font-space-mono text-white'>{highestBid} wETH</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftCardContent;
