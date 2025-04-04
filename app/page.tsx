import {
    CallToAction,
    Clients,
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
            <Gallery />
            <Subscribe />
            <NewNfts />
            <NewEvent />
            <Clients />
            <CallToAction />
            <HowItWorks />
        </>
    );
};

export default HomePage;
