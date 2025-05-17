'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useFollow } from '@/src/hooks';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTabs, EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { FollowCircleBtn, ImageLoader, Text, Title } from '../../ui';
import cn from 'classnames';

type Props = {
    artist: IArtist & { index: number };
};

const RankingCard: FC<Props> = ({ artist }) => {
    const { isFollow, isLoading, isFollowBtnExist, toggleFollow } = useFollow(artist);
    const { index, name, avatar, info } = artist;

    return (
        <div
            className={cn(
                'relative grid grid-cols-[12%,88%] sm:grid-cols-[7%,49%,22%,22%] lg:grid-cols-[5%,41%,18%,18%,18%] items-center w-full rounded-lg p-2 sm:p-3 bg-gray transition-opacity duration-300',
                { 'opacity-50 pointer-events-none': isLoading }
            )}
        >
            <span className='flex items-center justify-center text-sm sm:text-base text-gray2 size-7 lg:size-7 rounded-full bg-black'>
                {index}
            </span>

            <div className='flex items-center gap-3 sm:gap-4 lg:gap-5 w-full'>
                <ImageLoader className='!size-14 min-w-14 lg:!size-16 lg:min-w-16 !pb-0 rounded-full'>
                    <ImageLoader.Link href={`/${convertToSnakeCase(name)}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`}>
                        <ImageLoader.Image
                            src={avatar}
                            alt={name}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <Title titleType={EnumTitle.h5} className='!w-auto !text-lg sm:!text-xl truncate'>
                    <Link
                        href={`/${convertToSnakeCase(name)}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`}
                        className='transition-colors duration-300 hover:text-purple'
                    >
                        {name}
                    </Link>
                </Title>
            </div>

            <Text className='!hidden sm:!block font-medium text-green'>+{(info.totalSales / 10).toFixed(2)}%</Text>
            <Text className='!hidden lg:!block font-medium text-white'>{Math.round((info.totalSales * 60) / 10)}</Text>
            <Text className='!hidden sm:!block font-medium text-white'>{info.totalSales} ETH</Text>

            {isFollowBtnExist && (
                <FollowCircleBtn isActive={isFollow} onClick={toggleFollow} className='!absolute right-2 sm:right-3' />
            )}
        </div>
    );
};

export default RankingCard;
