'use client';
import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { useLike } from '@/src/hooks';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumColorStyle } from '@/src/types/enums';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCardContent from './NftCardContent';
import { ImageLoader, LikeBtn } from '../../ui';
import cn from 'classnames';

type Props = {
    nft: INFT;
    cardType?: EnumColorStyle;
    className?: string;
};

const NftCard: FC<Props> = ({ nft, cardType = EnumColorStyle.gray, className = '' }) => {
    const { isLiked, isLoading, isLikeBtnExist, toggleLike } = useLike(nft);
    const { img, ...content } = nft;

    const cardClasses = {
        [EnumColorStyle.gray as string]: 'bg-gray',
        [EnumColorStyle.dark as string]: 'bg-black',
    };

    const outlineClasses = {
        [EnumColorStyle.gray as string]: 'outline-gray',
        [EnumColorStyle.dark as string]: 'outline-black',
    };

    return (
        <div
            className={cn(
                `relative w-full rounded-lg overflow-hidden transition-opacity duration-300 ${className}`,
                cardClasses[cardType],
                {
                    'opacity-50 pointer-events-none': isLoading,
                }
            )}
        >
            <ImageLoader className='w-full !pb-[75%] rounded-lg'>
                <ImageLoader.Link
                    href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(content.collectionName)}/${img.alt}`}
                >
                    <ImageLoader.Image
                        src={img.src}
                        alt={img.alt}
                        className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                    />
                </ImageLoader.Link>

                {isLikeBtnExist && (
                    <LikeBtn
                        isActive={isLiked}
                        colorType={cardType}
                        onClick={toggleLike}
                        className='!absolute top-1.5 right-1.5'
                    />
                )}
            </ImageLoader>

            <NftCardContent content={content} colorType={outlineClasses[cardType]} />
        </div>
    );
};

export default NftCard;
