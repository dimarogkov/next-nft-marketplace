import { FC } from 'react';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCardContent from './NftCardContent';
import { ImageLoader } from '../../ui';

type Props = {
    nft: INFT;
    className?: string;
};

const NftCard: FC<Props> = ({ nft, className = '' }) => {
    const { img, ...content } = nft;

    return (
        <div className={`relative w-full rounded-lg overflow-hidden bg-gray ${className}`}>
            <ImageLoader className='w-full pb-[70%]'>
                <ImageLoader.Link href={img.alt}>
                    <ImageLoader.Image
                        src={img.src}
                        alt={img.alt}
                        className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                    />
                </ImageLoader.Link>
            </ImageLoader>

            <NftCardContent content={content} />
        </div>
    );
};

export default NftCard;
