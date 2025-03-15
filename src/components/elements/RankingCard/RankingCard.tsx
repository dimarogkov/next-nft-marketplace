import { FC } from 'react';
import { convertToSnakeCase } from '@/src/helpers';
import { IArtist } from '@/src/types/interfaces/Artist';
import { ImageLoader, Text, Title } from '../../ui';
import Link from 'next/link';
import { EnumTitle } from '@/src/types/enums';

type Props = {
    artist: IArtist & { index: number };
};

const RankingCard: FC<Props> = ({ artist }) => {
    const { index, userName, avatar, info } = artist;

    return (
        <div className='relative grid grid-cols-[14%,86%] sm:grid-cols-[8%,52%,20%,20%] lg:grid-cols-[6%,41%,17%,17%,17%] items-center w-full rounded-lg p-2 sm:p-3 bg-gray'>
            <span className='flex items-center justify-center font-space-mono text-sm sm:text-base text-gray2 size-7 lg:size-[30px] rounded-full bg-black'>
                {index}
            </span>

            <div className='flex items-center gap-4 lg:gap-5 w-full'>
                <ImageLoader className='!size-12 lg:!size-[60px] !pb-0 rounded-full'>
                    <ImageLoader.Link href={convertToSnakeCase(userName)}>
                        <ImageLoader.Image
                            src={avatar}
                            alt={userName}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <Title titleType={EnumTitle.h5} className='!w-auto text-lg sm:text-xl line-clamp-1'>
                    <Link
                        href={convertToSnakeCase(userName)}
                        className='transition-colors duration-300 hover:text-purple'
                    >
                        {userName}
                    </Link>
                </Title>
            </div>

            <Text className='!hidden sm:!block font-space-mono font-medium text-green'>
                +{(info.totalSales / 10).toFixed(2)}%
            </Text>

            <Text className='!hidden lg:!block font-space-mono font-medium text-white'>
                {Math.round((info.totalSales * 60) / 10)}
            </Text>

            <Text className='!hidden sm:!block font-space-mono font-medium text-white'>{info.totalSales} ETH</Text>
        </div>
    );
};

export default RankingCard;
