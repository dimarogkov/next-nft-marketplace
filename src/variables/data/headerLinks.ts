import { PATHS } from '../paths';
import { EnumTabs } from '@/src/types/enums';
import { ILink } from '@/src/types/interfaces/Link';
import { CircleUser, Heart, Settings } from 'lucide-react';

export const HEADER_LINKS_DATA: ILink[] = [
    {
        href: `${PATHS.MARKETPLACE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`,
        text: 'Marketplace',
    },
    {
        href: `${PATHS.RANKINGS}?${PATHS.PARAMS.PAGE}`,
        text: 'Rankings',
    },
];

export const HEADER_USER_LINKS_DATA: ILink[] = [
    {
        href: `${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`,
        text: 'Profile',
        icon: CircleUser,
    },
    {
        href: `${PATHS.PROFILE}?tab=${EnumTabs.Liked}&${PATHS.PARAMS.PAGE}`,
        text: 'Favorite NFT',
        icon: Heart,
    },
    {
        href: PATHS.SETTINGS,
        text: 'Settings',
        icon: Settings,
    },
];
