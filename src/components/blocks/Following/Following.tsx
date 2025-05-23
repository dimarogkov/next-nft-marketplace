'use client';
import { useSession } from 'next-auth/react';
import { usePagination } from '@/src/hooks';
import { EnumColorStyle, EnumTitle } from '@/src/types/enums';
import { IProfile } from '@/src/types/interfaces/Profile';
import { FollowingArtistCard, NoFollowingArtistsFound, Pagination } from '../../elements';
import { Title } from '../../ui';
import cn from 'classnames';

const Following = () => {
    const { data: session } = useSession();
    const followingArtists = (session?.user as IProfile)?.data.followingArtists || [];

    const { data: slicedData, ...options } = usePagination(followingArtists, 10);
    const isFollowingArtistsExist = followingArtists.length > 0;

    return (
        <section
            className={cn('relative w-full', {
                'pt-16 pb-8 sm:section-padding-top': !isFollowingArtistsExist,
                'section-padding sm:mt-[50px]': isFollowingArtistsExist,
            })}
        >
            <div className='container'>
                {isFollowingArtistsExist ? (
                    <div className='flex flex-col gap-5 md:gap-7 w-full'>
                        <Title titleType={EnumTitle.h3}>Following: {followingArtists.length}</Title>

                        <div className='w-full border-t border-gray'>
                            {slicedData.map((artist) => (
                                <FollowingArtistCard key={artist.name} artist={artist} />
                            ))}
                        </div>

                        <Pagination type={EnumColorStyle.gray} options={options} />
                    </div>
                ) : (
                    <NoFollowingArtistsFound />
                )}
            </div>
        </section>
    );
};

export default Following;
