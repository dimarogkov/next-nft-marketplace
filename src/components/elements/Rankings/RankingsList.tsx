'use client';
import { FC } from 'react';
import { usePagination } from '@/src/hooks';
import { EnumColorStyle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { Pagination } from '../Pagination';
import { Text } from '../../ui';
import RankingCard from './RankingCard';

type Props = {
    data: IArtist[];
};

const RankingsList: FC<Props> = ({ data }) => {
    const { data: slicedData, ...paginationOptions } = usePagination(data, 10);

    return (
        <>
            <div className='grid grid-cols-[14%,86%] sm:grid-cols-[8%,52%,20%,20%] lg:grid-cols-[5%,44%,17%,17%,17%] w-full py-3 px-5 rounded-lg border border-gray mb-4 sm:mb-5 last:mb-0'>
                <Text>#</Text>
                <Text>Artist</Text>
                <Text className='!hidden sm:!block'>Change</Text>
                <Text className='!hidden lg:!block'>NFTs Sold</Text>
                <Text className='!hidden sm:!block'>Volume</Text>
            </div>

            <div className='flex flex-col gap-4 sm:gap-5 w-full mb-7 md:mb-10 last:mb-0'>
                {slicedData.map((artist) => (
                    <RankingCard key={artist.userName} artist={artist} />
                ))}
            </div>

            <Pagination options={paginationOptions} type={EnumColorStyle.gray} />
        </>
    );
};

export default RankingsList;
