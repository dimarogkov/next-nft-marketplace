import {
    Banner,
    HowItWorks,
    NewEvent,
    NewNfts,
    Subscribe,
    TopCreators,
    TrendingCollection,
} from '@/src/components/blocks';

const HomePage = () => {
    return (
        <>
            <Banner />
            <TrendingCollection />
            <TopCreators />
            <Subscribe />
            <NewNfts />
            <NewEvent />
            <HowItWorks />
        </>
    );
};

export default HomePage;
