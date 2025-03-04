import { FC } from 'react';
import { INFT } from '@/src/types/interfaces/NFT';
import NftCardImg from './NftCardImg';
import NftCardContent from './NftCardContent';

type Props = {
    nft: INFT;
};

const NftCard: FC<Props> = ({ nft }) => {
    const { name, price, highestBid, img, author } = nft;

    return (
        <div className='relative flex flex-col sm:flex-row md:flex-col w-full rounded-md overflow-hidden bg-gray'>
            <NftCardImg img={img} />
            <NftCardContent content={{ name, author, price, highestBid }} />
        </div>
    );
};

export default NftCard;
