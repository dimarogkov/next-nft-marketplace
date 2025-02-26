import { IAuthor } from './Author';
import { IImage } from './Image';

export interface INFT {
    name: string;
    publishDate: string;
    price: number;
    highestBid: number;
    img: IImage;
    author: IAuthor;
    tags: string[];
    description: string;
}
