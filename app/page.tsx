import { EnumText } from '@/src/types/enums';
import { Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-2 last:mb-0'>NFT Marketplace</Title>
            <Title className='mb-2 last:mb-0'>NFT Marketplace</Title>
            <Title className='mb-2 last:mb-0'>NFT Marketplace</Title>
            <Title className='mb-2 last:mb-0'>NFT Marketplace</Title>
            <Title className='mb-2 last:mb-0'>NFT Marketplace</Title>

            <Text textType={EnumText.large} className='mb-3 last:mb-0'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat asperiores temporibus facere, sapiente
                est necessitatibus provident id quaerat quod quam ad consectetur saepe at voluptatibus tempore,
                laudantium, in debitis iure!
            </Text>

            <Text className='mb-3 last:mb-0'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat asperiores temporibus facere, sapiente
                est necessitatibus provident id quaerat quod quam ad consectetur saepe at voluptatibus tempore,
                laudantium, in debitis iure!
            </Text>
        </section>
    );
};

export default HomePage;
