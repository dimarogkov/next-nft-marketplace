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
            <TopCreators />
            {/* <Gallery /> // remove in feature */}
            <Subscribe />
            <NewNfts />
            <NewEvent />
            <HowItWorks />
        </>
    );
};

export default HomePage;
