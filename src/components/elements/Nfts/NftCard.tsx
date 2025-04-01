import { FC } from 'react';
import { EnumCard } from '@/src/types/enums';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCardContent from './NftCardContent';
import { ImageLoader } from '../../ui';

type Props = {
    nft: INFT;
    cardType?: EnumCard;
    className?: string;
};

const NftCard: FC<Props> = ({ nft, cardType = EnumCard.gray, className = '' }) => {
    const { img, ...content } = nft;

    const cardClasses = {
        [EnumCard.gray as string]: 'lg:bg-gray',
        [EnumCard.dark as string]: 'lg:bg-black',
    };

    const cardContentClasses = {
        [EnumCard.gray as string]: 'bg-gray',
        [EnumCard.dark as string]: 'bg-black',
    };

    return (
        <div
            className={`relative flex flex-col sm:flex-row lg:flex-col justify-between w-full rounded-lg overflow-hidden ${cardClasses[cardType]} ${className}`}
        >
            <ImageLoader className='w-full sm:w-[35%] md:w-[30%] lg:w-full sm:!h-full lg:!h-0 pb-[100%] sm:pb-0 lg:pb-[100%] sm:rounded-lg lg:rounded-none'>
                <ImageLoader.Link href={img.alt}>
                    <ImageLoader.Image
                        src={img.src}
                        alt={img.alt}
                        className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                    />
                </ImageLoader.Link>
            </ImageLoader>

            <NftCardContent content={content} className={cardContentClasses[cardType]} />
        </div>
    );
};

export default NftCard;
