import { IArtist } from './Artist';
import { INFT } from './NFT';

export interface IProfileNfts {
    likedNfts: INFT[];
}

export interface IProfile extends IArtist {
    email: string;
    nfts: IProfileNfts;
}
