import { Metadata } from 'next';
import { FullPage } from '@/src/components/blocks';
import { ConnectWallet } from '@/src/components/elements';
import { ImageLoader } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Connect a Wallet',
};

const ConnectWalletPage = () => {
    return (
        <FullPage>
            <div className='relative grid grid-cols-1 md:grid-cols-2 grow items-center justify-between gap-5 sm:gap-7 lg:gap-10 w-full h-full'>
                <ConnectWallet />

                <ImageLoader className='md:!h-full !pb-[95%] sm:!pb-[50%] md:!pb-0 rounded-lg'>
                    <ImageLoader.Image src='/new_event.jpg' alt='connect_wallet' />
                </ImageLoader>
            </div>
        </FullPage>
    );
};

export default ConnectWalletPage;
