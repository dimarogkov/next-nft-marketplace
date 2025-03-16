import { Metadata } from 'next';
import { Banner, Breadcrumbs, NewNfts, Rankings, Subscribe } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Rankings',
};

const RankingsPage = () => {
    return (
        <>
            <Breadcrumbs />
            <Banner title='Top Creators' text='Check out top ranking NFT artists on the NFT Marketplace.' />
            <Rankings />
            <Subscribe />
            <NewNfts />
        </>
    );
};

export default RankingsPage;
