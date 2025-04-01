import { Metadata } from 'next';
import { NewNfts, Subscribe } from '@/src/components/blocks';
import { Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Connect a Wallet',
};

const ConnectWalletPage = () => {
    return (
        <>
            <section className='relative w-full section-padding'>
                <div className='container'>
                    <Title>Connect a Wallet Page</Title>
                </div>
            </section>

            <Subscribe />
            <NewNfts />
        </>
    );
};

export default ConnectWalletPage;
