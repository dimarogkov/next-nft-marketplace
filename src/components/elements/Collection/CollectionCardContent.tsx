import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import { Text, Title } from '../../ui';

type Props = {
    data: Omit<ICollection, 'nfts'>;
};

const CollectionCardContent: FC<Props> = ({ data }) => {
    const { name, totalPrice, totalBid } = data;

    return (
        <div className='flex flex-1 flex-col justify-between gap-4 w-full p-4'>
            <Title titleType={EnumTitle.h5}>
                <Link
                    href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}
                    className='text-white transition-colors duration-300 hover:text-purple'
                >
                    {name}
                </Link>
            </Title>

            <div className='w-full'>
                <div className='grid grid-cols-2'>
                    <div className='w-full'>
                        <Text className='mb-0.5 last:mb-0'>Total Price</Text>
                        <Text className='font-medium text-white'>{totalPrice} ETH</Text>
                    </div>

                    <div className='w-full'>
                        <Text className='mb-0.5 last:mb-0'>Total Bid</Text>
                        <Text className='font-medium text-white'>{totalBid} wETH</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCardContent;
