import { IArtist } from './Artist';
import { IWalletOption } from './WalletOption';
import { INFT } from './NFT';

export interface IProfileData {
    followingArtists: IArtist[];
    likedNfts: INFT[];
}

export interface IProfile extends IArtist {
    email: string;
    wallet: IWalletOption;
    data: IProfileData;
}
