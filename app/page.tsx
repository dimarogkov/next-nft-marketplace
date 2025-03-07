import { Banner, HowItWorks, NewEvent, NewNfts, Subscribe, TopCreators } from '@/src/components/blocks';

const HomePage = () => {
    return (
        <>
            <Banner />
            <TopCreators />
            <NewNfts />
            <NewEvent />
            <Subscribe />
            <HowItWorks />
        </>
    );
};

export default HomePage;
