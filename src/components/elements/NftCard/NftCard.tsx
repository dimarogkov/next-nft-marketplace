import { FC } from 'react';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCardContent from './NftCardContent';
import { ImageLoader } from '../../ui';

type Props = {
    nft: INFT;
};

const NftCard: FC<Props> = ({ nft }) => {
    const { name, price, highestBid, img, author } = nft;

    return (
        <div className='relative flex flex-col sm:flex-row md:flex-col w-full rounded-md overflow-hidden bg-gray'>
            <ImageLoader className='sm:w-[40%] md:w-full pb-[70%] sm:pb-[30%] md:pb-[70%]'>
                <ImageLoader.Link href={img.alt}>
                    <ImageLoader.Image
                        src={img.src}
                        alt={img.alt}
                        className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                    />
                </ImageLoader.Link>
            </ImageLoader>

            <NftCardContent content={{ name, author, price, highestBid }} />
        </div>
    );
};

export default NftCard;
