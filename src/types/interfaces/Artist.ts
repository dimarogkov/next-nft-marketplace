import { IAuthor } from './Author';

export interface IArtistLink {
    id: string;
    href: string;
}

export interface IArtistInfo {
    volume: number;
    sales: number;
    followers: number;
    totalSales: number;
    links: IArtistLink[];
}

export interface IArtist extends IAuthor {
    bio: string;
    info: IArtistInfo;
}
