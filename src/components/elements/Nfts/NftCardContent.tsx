import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTabs, EnumTitle } from '@/src/types/enums';
import { INFT } from '@/src/types/interfaces/NFT';
import { Btn, ImageLoader, SimpleLink, Text, Title } from '../../ui';
import { PlusCircle } from 'lucide-react';

type Props = {
    content: Omit<INFT, 'img'>;
    colorType: string;
    isBuyBtnExist: boolean;
    className?: string;
};

const NftCardContent: FC<Props> = ({ content, colorType, isBuyBtnExist, className = '' }) => {
    const { name, collectionName, author, price, highestBid } = content;

    return (
        <div className={`relative flex flex-col gap-5 w-full p-4 -mt-12 ${className}`}>
            <div className='flex flex-col gap-3 w-full'>
                <ImageLoader className={`!size-14 !pb-0 rounded-full outline outline-4 bg-gray ${colorType}`}>
                    <ImageLoader.Link
                        href={`/${convertToSnakeCase(author.name)}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`}
                    >
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
                        By&nbsp;
                        <SimpleLink
                            href={`/${convertToSnakeCase(author.name)}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`}
                        >
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

            {isBuyBtnExist && (
                <Btn icon={PlusCircle} className='sm:!w-full'>
                    Buy NFT
                </Btn>
            )}
        </div>
    );
};

export default NftCardContent;
