import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { ImageLoader, Text, Title } from '../../ui';

type Props = {
    artist: IArtist & { index: number };
};

const RankingCard: FC<Props> = ({ artist }) => {
    const { index, name, avatar, info } = artist;

    return (
        <div className='relative grid grid-cols-[14%,86%] sm:grid-cols-[8%,52%,20%,20%] lg:grid-cols-[5%,44%,17%,17%,17%] items-center w-full rounded-lg p-2 sm:p-3 bg-gray'>
            <span className='flex items-center justify-center text-sm sm:text-base text-gray2 size-7 lg:size-7 rounded-full bg-black'>
                {index}
            </span>

            <div className='flex items-center gap-4 lg:gap-5 w-full'>
                <ImageLoader className='!size-14 min-w-14 lg:!size-16 lg:min-w-16 !pb-0 rounded-full'>
                    <ImageLoader.Link href={`/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}>
                        <ImageLoader.Image
                            src={avatar}
                            alt={name}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <Title titleType={EnumTitle.h5} className='!w-auto text-lg sm:text-xl truncate'>
                    <Link
                        href={`/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}
                        className='transition-colors duration-300 hover:text-purple'
                    >
                        {name}
                    </Link>
                </Title>
            </div>

            <Text className='!hidden sm:!block font-medium text-green'>+{(info.totalSales / 10).toFixed(2)}%</Text>
            <Text className='!hidden lg:!block font-medium text-white'>{Math.round((info.totalSales * 60) / 10)}</Text>
            <Text className='!hidden sm:!block font-medium text-white'>{info.totalSales} ETH</Text>
        </div>
    );
};

export default RankingCard;
