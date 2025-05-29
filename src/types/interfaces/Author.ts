import { IImage } from './Image';

export interface IAuthor {
    id: string;
    name: string;
    avatar: string;
    banner: IImage;
}
