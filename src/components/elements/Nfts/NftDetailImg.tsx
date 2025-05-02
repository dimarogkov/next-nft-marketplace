'use client';
import { FC } from 'react';
import { useLike } from '@/src/hooks';
import { INFT } from '@/src/types/interfaces/NFT';
import { ImageLoader, LikeBtn } from '../../ui';
import cn from 'classnames';

type Props = {
    nft: INFT;
};

const NftDetailImg: FC<Props> = ({ nft }) => {
    const { isLiked, isLoading, isLikeBtnExist, toggleLike } = useLike(nft);
    const { img } = nft;

    return (
        <ImageLoader
            className={cn(
                'sm:sticky sm:top-[150px] lg:top-[170px] w-full !pb-[120%] rounded-lg shadow-md transition-opacity duration-300',
                {
                    'opacity-50 pointer-events-none': isLoading,
                }
            )}
        >
            <ImageLoader.Image src={img.src} alt={img.alt} />

            {isLikeBtnExist && (
                <LikeBtn isActive={isLiked} onClick={toggleLike} className='!absolute top-1.5 right-1.5' />
            )}
        </ImageLoader>
    );
};

export default NftDetailImg;
