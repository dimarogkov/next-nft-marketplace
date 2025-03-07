import { FC } from 'react';
import Link from 'next/link';
import { EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { convertToSnakeCase } from '@/src/helpers';

import { ImageLoader, Text, Title } from '../../ui';
import cn from 'classnames';

type Props = {
    artist: IArtist & { index: number };
};

const TopCreatorsCard: FC<Props> = ({ artist }) => {
    const { index, userName, avatar, info } = artist;

    return (
        <div
            className={cn('relative w-full rounded-lg p-4 sm:p-5 bg-gray', {
                'hidden lg:block': index > 6,
            })}
        >
            <div className='relative flex lg:flex-col items-center justify-between w-full'>
                <span className='absolute z-10 -top-0.5 lg:top-0 -left-0.5 lg:left-0 flex items-center justify-center font-space-mono text-base text-gray2 size-7 lg:size-[30px] rounded-full bg-black'>
                    {index}
                </span>

                <ImageLoader className='!size-20 lg:!size-[120px] !pb-0 rounded-full lg:m-auto lg:mb-6 last:mb-0'>
                    <ImageLoader.Link href={convertToSnakeCase(userName)}>
                        <ImageLoader.Image
                            src={avatar}
                            alt={userName}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <div className='w-[calc(100%-100px)] lg:w-full lg:text-center'>
                    <Title titleType={EnumTitle.h5} className='mb-0.5 last:mb-0'>
                        <Link
                            href={convertToSnakeCase(userName)}
                            className='transition-colors duration-300 hover:text-purple'
                        >
                            {userName}
                        </Link>
                    </Title>

                    <Text className='text-gray2/50'>
                        Total Sales: <span className='font-space-mono text-white'>{info.totalSales} ETH</span>
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default TopCreatorsCard;
