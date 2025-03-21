import { Metadata } from 'next';
import { Banner, Subscribe, TopCreators } from '@/src/components/blocks';
import { Input } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Marketplace',
};

const MarketplacePage = () => {
    return (
        <>
            <Banner title='Browse Marketplace' text='Browse through more than 50k NFTs on the NFT Marketplace.'>
                <Input name='search' placeholder='Search Your Favorite NFTs' />
            </Banner>
            <Subscribe />
            <TopCreators />
        </>
    );
};

export default MarketplacePage;
