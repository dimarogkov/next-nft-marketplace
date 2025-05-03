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
        name: 'Open Sea',
        icon: {
            src: '/wallet_options/open_sea.svg',
            alt: 'open_sea',
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
