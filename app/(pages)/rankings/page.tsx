import { Metadata } from 'next';
import { Banner, Breadcrumbs, Rankings } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Rankings',
};

const RankingsPage = () => {
    return (
        <>
            <Breadcrumbs />
            <Banner title='Top Creators' text='Check out top ranking NFT artists on the NFT Marketplace.' />
            <Rankings />
        </>
    );
};

export default RankingsPage;
