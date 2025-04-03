import { Metadata } from 'next';
import { Banner, NewNfts, Rankings, Subscribe } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Rankings',
};

const RankingsPage = () => {
    return (
        <>
            <Banner title='Top Creators' text='Check out top ranking NFT artists on the NFT Marketplace.' />
            <Rankings />
            <NewNfts />
            <Subscribe />
        </>
    );
};

export default RankingsPage;
