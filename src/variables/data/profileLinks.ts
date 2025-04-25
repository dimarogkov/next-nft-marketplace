import { PATHS } from '../paths';
import { ILink } from '@/src/types/interfaces/Link';
import { CirclePlus, Settings, Wallet } from 'lucide-react';

export const PROFILE_LINKS_DATA: ILink[] = [
    {
        href: PATHS.HOME,
        text: 'Create NFT',
        icon: CirclePlus,
    },
    {
        href: PATHS.CONNECT_WALLET,
        text: 'Connect Wallet',
        icon: Wallet,
    },
    {
        href: PATHS.HOME,
        text: 'Settings',
        icon: Settings,
    },
];
