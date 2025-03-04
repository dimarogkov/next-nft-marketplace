import { Banner, HowItWorks, NewEvent, NewNfts, Subscribe } from '@/src/components/blocks';

const HomePage = () => {
    return (
        <>
            <Banner />
            <NewNfts />
            <NewEvent />
            <Subscribe />
            <HowItWorks />
        </>
    );
};

export default HomePage;
