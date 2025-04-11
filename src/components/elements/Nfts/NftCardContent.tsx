import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
// import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { Avatar, Text, Title } from '../../ui';

type Props = {
    content: {
        name: string;
        author: IAuthor;
        price: number;
        highestBid: number;
    };
    className?: string;
};

const NftCardContent: FC<Props> = ({ content, className = '' }) => {
    const { name, author, price, highestBid } = content;

    return (
        <div
            className={`relative flex flex-col justify-between w-full sm:w-[calc(65%-16px)] md:w-[calc(70%-16px)] lg:w-full p-4 sm:p-5 rounded-lg lg:rounded-none lg:bg-transparent ${className}`}
        >
            <div className='w-full mb-6 dm:mb-7 last:mb-0'>
                <Title titleType={EnumTitle.h5} className='mb-3 last:mb-0'>
                    <Link
                        href={PATHS.HOME} // convertToSnakeCase(name)
                        className='text-white transition-colors duration-300 hover:text-purple'
                    >
                        {name}
                    </Link>
                </Title>

                {/* convertToSnakeCase(author.name) */}
                <Avatar href={PATHS.HOME} src={author.avatar} name={author.name} />
            </div>

            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className='w-fit'>
                        <span className='block text-sm text-gray2/50 mb-0.5 last:mb-0'>Price</span>
                        <Text className='text-white'>{price} ETH</Text>
                    </div>

                    <div className='w-fit text-right'>
                        <span className='block text-sm text-gray2/50 mb-0.5 last:mb-0'>Highest Bid</span>
                        <Text className='text-white'>{highestBid} wETH</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftCardContent;
