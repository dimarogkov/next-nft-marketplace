import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { INFT } from '@/src/types/interfaces/NFT';
import { ImageLoader, SimpleLink, Text, Title } from '../../ui';

type Props = {
    content: Omit<INFT, 'img'>;
    colorType: string;
    className?: string;
};

const NftCardContent: FC<Props> = ({ content, colorType, className = '' }) => {
    const { name, collectionName, author, price, highestBid } = content;

    return (
        <div className={`relative w-full p-4 ${className}`}>
            <div className='flex flex-col gap-3 w-full -mt-12 mb-5 last:mb-0'>
                <ImageLoader className={`!size-14 !pb-0 rounded-full outline outline-4 bg-gray ${colorType}`}>
                    <ImageLoader.Link href={`/${convertToSnakeCase(author.name)}?${PATHS.PARAMS.PAGE}`}>
                        <ImageLoader.Image
                            src={author.avatar}
                            alt={author.name}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <div className='w-full'>
                    <Title titleType={EnumTitle.h5} className='truncate mb-1.5 last:mb-0'>
                        <Link
                            href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}/${convertToSnakeCase(
                                name
                            )}`}
                            className='text-white transition-colors duration-300 hover:text-purple'
                        >
                            {name}
                        </Link>
                    </Title>

                    <Text>
                        By{' '}
                        <SimpleLink href={`/${convertToSnakeCase(author.name)}?${PATHS.PARAMS.PAGE}`}>
                            {author.name}
                        </SimpleLink>
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
