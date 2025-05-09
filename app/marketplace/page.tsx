import { Metadata } from 'next';
import { Banner, Breadcrumbs, CallToAction, Nfts, Subscribe, TopCreators } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Marketplace',
};

const MarketplacePage = () => {
    return (
        <>
            <Breadcrumbs />
            <Banner
                title='Browse Marketplace'
                text='Browse through more than 50k NFTs on the NFT Marketplace.'
                className='!pb-0 mb-6 last:mb-0'
            />
            <Nfts />
            <TopCreators />
            <CallToAction />
            <Subscribe />
        </>
    );
};

export default MarketplacePage;
