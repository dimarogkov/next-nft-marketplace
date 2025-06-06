'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { IArtist } from '../types/interfaces/Artist';
import { IProfile } from '../types/interfaces/Profile';
import { Toast } from '../components/ui';

const useFollow = (artist: IArtist) => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, update } = useSession();

    const currentData = session?.user as IProfile;
    const followingArtists = currentData?.data.followingArtists || [];

    const isFollow = followingArtists.some(({ id }) => id === artist.id);
    const isFollowBtnExist = (session && session.user?.name !== artist.name) || false;

    const toggleFollow = async () => {
        const updatedFollowingArtists = isFollow
            ? followingArtists.filter(({ id }) => id !== artist.id)
            : [...followingArtists, artist];

        const newData = {
            ...currentData,
            info: { ...currentData.info, followers: updatedFollowingArtists.length },
            data: { ...currentData.data, followingArtists: updatedFollowingArtists },
        };

        setIsLoading(true);
        await update(newData);
        toast.custom((t) => <Toast toast={t} text={`👏 ${!isFollow ? 'Follow' : 'Unfollow'} - ${artist.name}`} />);
        setIsLoading(false);
    };

    return { isFollow, isLoading, isFollowBtnExist, toggleFollow };
};

export default useFollow;
