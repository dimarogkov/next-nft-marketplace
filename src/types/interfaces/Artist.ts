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

export interface IArtist {
    userName: string;
    bio: string;
    avatar: string;
    info: IArtistInfo;
}
