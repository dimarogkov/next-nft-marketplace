import { IArtist } from './Artist';
import { IWalletOption } from './WalletOption';
import { INFT } from './NFT';

export interface IProfileNfts {
    likedNfts: INFT[];
}

export interface IProfile extends IArtist {
    email: string;
    wallet: IWalletOption;
    nfts: IProfileNfts;
}
