import { PATHS } from '../paths';
import { EnumMarketplaceTabs } from '@/src/types/enums';
import { ILink } from '@/src/types/interfaces/Link';

export const HEADER_LINKS: ILink[] = [
    {
        href: `${PATHS.MARKETPLACE}?activeTab=${EnumMarketplaceTabs.NFTs}`,
        text: 'Marketplace',
    },
    {
        href: PATHS.RANKINGS,
        text: 'Rankings',
    },
    {
        href: PATHS.CONNECT_WALLET,
        text: 'Connect a Wallet',
    },
];
