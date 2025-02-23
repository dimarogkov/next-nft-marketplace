import { PATHS } from '../paths';
import { IBannerData } from '@/src/types/interfaces/BannerData';
import { Rocket } from 'lucide-react';

export const BANNER_DATA: IBannerData = {
    title: 'Discover Digital Art & Collect NFTs',
    text: 'NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.',
    img: {
        src: '/banner_img.gif',
        alt: 'banner_img',
    },
    link: {
        href: PATHS.HOME,
        text: 'Get Started',
        icon: Rocket,
    },
    info: [
        {
            value: '300k+',
            text: 'Total Sale',
        },
        {
            value: '150k+',
            text: 'Auctions',
        },
        {
            value: '100k+',
            text: 'Artists',
        },
    ],
};
