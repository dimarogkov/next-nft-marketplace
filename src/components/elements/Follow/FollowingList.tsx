'use client';
import { FC, useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { usePagination } from '@/src/hooks';
import { EnumColorStyle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import FollowingArtistCard from './FollowingArtistCard';
import { Pagination } from '../Pagination';
import { NoFollowingArtistsFoundBySearch } from '../NoExist';

type Props = {
    data: IArtist[];
};

const FollowingList: FC<Props> = ({ data }) => {
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });

    const filteredData = useMemo(() => {
        let arr = [...data];

        if (nameQuery) {
            arr = arr.filter(({ name }) => name.toLowerCase().includes(nameQuery.toLowerCase()));
        }

        return arr;
    }, [data, nameQuery]);

    const { data: slicedData, ...options } = usePagination(filteredData, 10);

    return (
        <>
            {filteredData.length ? (
                <div className='relative w-full border-t border-gray'>
                    {slicedData.map((artist) => (
                        <FollowingArtistCard key={artist.name} artist={artist} />
                    ))}

                    <Pagination type={EnumColorStyle.gray} options={options} />
                </div>
            ) : (
                <NoFollowingArtistsFoundBySearch handleClick={() => setNameQuery('')} />
            )}
        </>
    );
};

export default FollowingList;
