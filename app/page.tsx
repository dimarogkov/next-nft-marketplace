import {
    CallToAction,
    Clients,
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
            <CallToAction />
            <Subscribe />
            <NewNfts />
            <NewEvent />
            <Clients />
            <HowItWorks />
        </>
    );
};

export default HomePage;
