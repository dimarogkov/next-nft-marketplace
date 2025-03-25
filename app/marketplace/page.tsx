import { Metadata } from 'next';
import { Banner, Nfts, Subscribe, TopCreators } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Marketplace',
};

const MarketplacePage = () => {
    return (
        <>
            <Banner
                title='Browse Marketplace'
                text='Browse through more than 50k NFTs on the NFT Marketplace.'
                className='!pb-0 mb-10 last:mb-0'
            />

            <Nfts />
            <Subscribe />
            <TopCreators />
        </>
    );
};

export default MarketplacePage;
