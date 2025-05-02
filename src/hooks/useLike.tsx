'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { INFT } from '../types/interfaces/NFT';
import { IProfile } from '../types/interfaces/Profile';

const useLike = (nft: INFT) => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, update } = useSession();

    const currentData = session?.user as IProfile;
    const likedNfts = currentData?.nfts.likedNfts || [];
    const isLiked = likedNfts.some(({ id }) => id === nft.id);

    const isLikeBtnExist = (session && session.user?.name !== nft.author.name) || false;

    const toggleLike = async () => {
        const updatedLikedNfts = isLiked ? likedNfts.filter(({ id }) => id !== nft.id) : [...likedNfts, nft];
        const newData = { ...currentData, nfts: { likedNfts: updatedLikedNfts } };

        setIsLoading(true);
        await update(newData);
        setIsLoading(false);
    };

    return { isLiked, isLoading, isLikeBtnExist, toggleLike };
};

export default useLike;
