import { IImage } from './Image';
import { ILink } from './Link';

export interface IBannerInfo {
    value: string;
    text: string;
}

export interface IBannerData {
    title: string;
    text: string;
    img: IImage;
    link: ILink;
    info: IBannerInfo[];
}
