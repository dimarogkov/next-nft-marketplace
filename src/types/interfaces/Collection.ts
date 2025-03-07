import { IAuthor } from './Author';
import { IImage } from './Image';

export interface ICollection {
    name: string;
    author: IAuthor;
    nfts: IImage[];
}
