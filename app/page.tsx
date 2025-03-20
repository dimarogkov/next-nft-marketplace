import {
    Gallery,
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
            <Gallery />
            <TopCreators />
            <Subscribe />
            <NewNfts />
            <NewEvent />
            <HowItWorks />
        </>
    );
};

export default HomePage;
