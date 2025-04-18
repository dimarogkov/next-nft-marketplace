import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumColorStyle } from '@/src/types/enums';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCardContent from './NftCardContent';
import { ImageLoader } from '../../ui';

type Props = {
    nft: INFT;
    cardType?: EnumColorStyle;
    className?: string;
};

const NftCard: FC<Props> = ({ nft, cardType = EnumColorStyle.gray, className = '' }) => {
    const { img, ...content } = nft;

    const cardClasses = {
        [EnumColorStyle.gray as string]: 'lg:bg-gray',
        [EnumColorStyle.dark as string]: 'lg:bg-black',
    };

    const cardContentClasses = {
        [EnumColorStyle.gray as string]: 'bg-gray',
        [EnumColorStyle.dark as string]: 'bg-black',
    };

    const outlineClasses = {
        [EnumColorStyle.gray as string]: 'outline-gray',
        [EnumColorStyle.dark as string]: 'outline-black',
    };

    return (
        <div className={`relative w-full rounded-lg overflow-hidden ${cardClasses[cardType]} ${className}`}>
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
            </ImageLoader>

            <NftCardContent
                content={content}
                colorType={outlineClasses[cardType]}
                className={cardContentClasses[cardType]}
            />
        </div>
    );
};

export default NftCard;
