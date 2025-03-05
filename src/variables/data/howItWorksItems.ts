import { IHowItWorksItem } from '@/src/types/interfaces/HowItWorksItem';

export const HOW_IT_WORKS_ITEMS_DATA: IHowItWorksItem[] = [
    {
        title: 'Setup Your Wallet',
        text: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
        img: {
            src: '/how_it_works_1.png',
            alt: 'setup_your_wallet',
        },
    },
    {
        title: 'Create Collection',
        text: 'Upload your work and setup your collection. Add a description, social links and floor price.',
        img: {
            src: '/how_it_works_2.png',
            alt: 'create_collection',
        },
    },
    {
        title: 'Start Earning',
        text: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
        img: {
            src: '/how_it_works_3.png',
            alt: 'start_earning',
        },
    },
];
