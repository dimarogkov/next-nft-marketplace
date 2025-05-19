import { PATHS } from '../paths';
import { ILink } from '@/src/types/interfaces/Link';
import { CirclePlus, Settings } from 'lucide-react';

export const PROFILE_LINKS_DATA: ILink[] = [
    {
        href: PATHS.HOME,
        text: 'Create NFT',
        icon: CirclePlus,
    },
    {
        href: PATHS.SETTINGS,
        text: 'Settings',
        icon: Settings,
    },
];
