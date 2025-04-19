import { IImage } from './Image';
import { IAuthor } from './Author';

export interface INewEvent {
    name: string;
    collectionName: string;
    description: string;
    img: IImage;
    author: IAuthor;
}
