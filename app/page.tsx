import {
    Hero,
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
            <Hero />
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
