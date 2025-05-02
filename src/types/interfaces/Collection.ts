import { IAuthor } from './Author';
import { INFT } from './NFT';

export interface ICollection {
    id: string;
    name: string;
    totalPrice: number;
    totalBid: number;
    items: number;
    authors: IAuthor[];
    nfts: INFT[];
    _authorNames?: Set<string>;
}
