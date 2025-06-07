'use client';
import { useSession } from 'next-auth/react';
import { EnumTitle } from '@/src/types/enums';
import { IProfile } from '@/src/types/interfaces/Profile';
import { FollowingList, FollowingSearch, NoFollowingArtistsFound } from '../../elements';
import { Title } from '../../ui';
import cn from 'classnames';

const Following = () => {
    const { data: session } = useSession();
    const followingArtists = (session?.user as IProfile)?.data.followingArtists || [];
    const isFollowingArtistsExist = followingArtists.length > 0;

    return (
        <section
            className={cn('relative w-full section-height-full-with-breadcrumbs', {
                'flex items-center': !isFollowingArtistsExist,
                'section-padding': isFollowingArtistsExist,
            })}
        >
            <div className='container'>
                {isFollowingArtistsExist ? (
                    <div className='flex flex-col gap-5 md:gap-7 w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 items-center justify-between w-full'>
                            <Title titleType={EnumTitle.h3}>Following: {followingArtists.length}</Title>
                            <FollowingSearch />
                        </div>

                        <FollowingList data={followingArtists} />
                    </div>
                ) : (
                    <NoFollowingArtistsFound />
                )}
            </div>
        </section>
    );
};

export default Following;
