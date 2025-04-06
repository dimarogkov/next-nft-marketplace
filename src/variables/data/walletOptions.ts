import { IWalletOption } from '@/src/types/interfaces/WalletOption';

export const WALLET_OPTIONS_DATA: IWalletOption[] = [
    {
        name: 'Metamask',
        icon: {
            src: '/wallet_options/metamask.svg',
            alt: 'metamask',
        },
    },
    {
        name: 'Wallet Connect',
        icon: {
            src: '/wallet_options/wallet_connect.svg',
            alt: 'wallet_connect',
        },
    },
    {
        name: 'Coinbase',
        icon: {
            src: '/wallet_options/coinbase.svg',
            alt: 'coinbase',
        },
    },
];
