import { Metadata } from 'next';
import { FullPage } from '@/src/components/blocks';
import { ConnectWallet } from '@/src/components/elements';

export const metadata: Metadata = {
    title: 'Connect a Wallet',
};

const ConnectWalletPage = () => {
    return (
        <>
            <FullPage src='/new_event.jpg' alt='connect_wallet'>
                <ConnectWallet />
            </FullPage>
        </>
    );
};

export default ConnectWalletPage;
