'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useFollow } from '@/src/hooks';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { FollowBtn, ImageLoader, Text, Title } from '../../ui';
import cn from 'classnames';

type Props = {
    artist: IArtist & { index: number };
};

const TopCreatorsCard: FC<Props> = ({ artist }) => {
    const { isFollow, isLoading, isFollowBtnExist, toggleFollow } = useFollow(artist);
    const { index, name, avatar, info } = artist;

    return (
        <div
            className={cn('relative w-full rounded-lg p-4 bg-gray transition-opacity duration-300', {
                'opacity-50 pointer-events-none': isLoading,
                'hidden lg:block': index > 6,
            })}
        >
            <div className='relative flex lg:flex-col items-center justify-between w-full mb-3 last:mb-0'>
                <span className='absolute z-10 -top-1 lg:top-0 -left-1 lg:left-0 flex items-center justify-center text-base text-gray2 size-7 lg:size-7 rounded-full bg-black'>
                    {index}
                </span>

                <ImageLoader className='!size-20 lg:!size-[120px] !pb-0 rounded-full lg:m-auto lg:mb-6 last:mb-0'>
                    <ImageLoader.Link href={`/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}>
                        <ImageLoader.Image
                            src={avatar}
                            alt={name}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <div className='w-[calc(100%-100px)] lg:w-full lg:text-center'>
                    <Title titleType={EnumTitle.h5} className='!text-lg mb-1 last:mb-0'>
                        <Link
                            href={`/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}
                            className='transition-colors duration-300 hover:text-purple'
                        >
                            {name}
                        </Link>
                    </Title>

                    <Text className='text-gray2/50'>
                        Total Sales: <span className='text-white'>{info.totalSales} ETH</span>
                    </Text>
                </div>
            </div>

            {isFollowBtnExist && <FollowBtn isActive={isFollow} onClick={toggleFollow} className='sm:!w-full' />}
        </div>
    );
};

export default TopCreatorsCard;
