import { IAuthor } from './Author';
import { IImage } from './Image';

export interface INFT {
    id: string;
    name: string;
    collectionName: string;
    publishDate: string;
    price: number;
    highestBid: number;
    img: IImage;
    author: IAuthor;
    tags: string[];
    description: string;
}
