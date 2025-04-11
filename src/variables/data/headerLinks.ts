import { PATHS } from '../paths';
import { EnumMarketplaceTabs } from '@/src/types/enums';
import { ILink } from '@/src/types/interfaces/Link';
import { CirclePlus, CircleUser, Heart, Settings } from 'lucide-react';

export const HEADER_LINKS_DATA: ILink[] = [
    {
        href: `${PATHS.MARKETPLACE}&tab=${EnumMarketplaceTabs.NFTs}`,
        text: 'Marketplace',
    },
    {
        href: PATHS.RANKINGS,
        text: 'Rankings',
    },
];

export const HEADER_USER_LINKS_DATA: ILink[] = [
    {
        href: PATHS.HOME,
        text: 'Profile',
        icon: CircleUser,
    },
    {
        href: PATHS.HOME,
        text: 'Create NFT',
        icon: CirclePlus,
    },
    {
        href: PATHS.HOME,
        text: 'Favorite NFT',
        icon: Heart,
    },
    {
        href: PATHS.HOME,
        text: 'Settings',
        icon: Settings,
    },
];
