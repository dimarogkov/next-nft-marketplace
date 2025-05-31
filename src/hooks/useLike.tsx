'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { INFT } from '../types/interfaces/NFT';
import { IProfile } from '../types/interfaces/Profile';
import { Toast } from '../components/ui';

const useLike = (nft: INFT) => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, update } = useSession();

    const currentData = session?.user as IProfile;
    const likedNfts = currentData?.data.likedNfts || [];

    const isLiked = likedNfts.some(({ id }) => id === nft.id);
    const isLikeBtnExist = (session && session.user?.name !== nft.author.name) || false;

    const toggleLike = async () => {
        const updatedLikedNfts = isLiked ? likedNfts.filter(({ id }) => id !== nft.id) : [...likedNfts, nft];
        const newData = { ...currentData, data: { ...currentData.data, likedNfts: updatedLikedNfts } };

        setIsLoading(true);
        await update(newData);
        toast.custom((t) => <Toast toast={t} text={`❤️ ${!isLiked ? 'Add to Favorite' : 'Remove from Favorite'}`} />);
        setIsLoading(false);
    };

    return { isLiked, isLoading, isLikeBtnExist, toggleLike };
};

export default useLike;
