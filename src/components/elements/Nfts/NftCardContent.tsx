import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
// import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { Avatar, SimpleLink, Text, Title } from '../../ui';

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
        <div className={`relative w-full p-4 sm:p-5 ${className}`}>
            <div className='flex flex-col gap-5 w-full -mt-10 sm:-mt-12 mb-5 last:mb-0'>
                {/* convertToSnakeCase(author.name) */}
                <Avatar href={PATHS.HOME} src={author.avatar} classNameImage='!size-12 !pb-0' />

                <div className='w-full'>
                    <Title titleType={EnumTitle.h5} className='line-clamp-1 mb-1.5 last:mb-0'>
                        <Link
                            href={PATHS.HOME} // convertToSnakeCase(name)
                            className='text-white transition-colors duration-300 hover:text-purple'
                        >
                            {name}
                        </Link>
                    </Title>

                    <Text>
                        {/* convertToSnakeCase(author.name) */}
                        By <SimpleLink href={PATHS.HOME}>{author.name}</SimpleLink>
                    </Text>
                </div>
            </div>

            <div className='w-full'>
                <div className='grid grid-cols-2'>
                    <div className='w-full'>
                        <Text className='mb-0.5 last:mb-0'>Price</Text>
                        <Text className='font-medium text-white'>{price} ETH</Text>
                    </div>

                    <div className='w-full'>
                        <Text className='mb-0.5 last:mb-0'>Highest Bid</Text>
                        <Text className='font-medium text-white'>{highestBid} wETH</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftCardContent;
