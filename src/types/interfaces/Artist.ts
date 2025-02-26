import { IAuthor } from './Author';

export interface IArtistLink {
    id: string;
    href: string;
}

export interface IArtistInfo {
    volume: string;
    sales: string;
    followers: string;
    links: IArtistLink[];
}

export interface IArtist extends IAuthor {
    bio: string;
    info: IArtistInfo;
}
