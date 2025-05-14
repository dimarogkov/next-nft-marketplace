'use client';
import { useSession } from 'next-auth/react';
import { usePagination } from '@/src/hooks';
import { EnumColorStyle, EnumTitle } from '@/src/types/enums';
import { IProfile } from '@/src/types/interfaces/Profile';
import { FullPage } from '../FullPage';
import { FollowingArtistCard, NoFollowingArtistsFound, Pagination } from '../../elements';
import { Title } from '../../ui';

const Following = () => {
    const { data: session } = useSession();
    const followingArtists = (session?.user as IProfile)?.data.followingArtists || [];

    const { data: slicedData, ...options } = usePagination(followingArtists, 10);

    return (
        <>
            {followingArtists.length > 0 ? (
                <section className='relative w-full section-padding'>
                    <div className='container'>
                        <div className='flex flex-col gap-5 md:gap-7 w-full'>
                            <Title titleType={EnumTitle.h3}>Following: {followingArtists.length}</Title>

                            <div className='w-full border-t border-gray'>
                                {slicedData.map((artist) => (
                                    <FollowingArtistCard key={artist.name} artist={artist} />
                                ))}
                            </div>

                            <Pagination type={EnumColorStyle.gray} options={options} />
                        </div>
                    </div>
                </section>
            ) : (
                <FullPage isBreadcrumbsExist>
                    <NoFollowingArtistsFound />
                </FullPage>
            )}
        </>
    );
};

export default Following;
