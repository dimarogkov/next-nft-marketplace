import { IImage } from './Image';

export interface IHowItWorksItem {
    title: string;
    text: string;
    img: IImage;
}

export interface IHowItWorksData {
    title: string;
    text: string;
    items: IHowItWorksItem[];
}
