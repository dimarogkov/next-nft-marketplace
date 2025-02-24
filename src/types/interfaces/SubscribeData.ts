import { IImage } from './Image';

export interface ISubscribeForm {
    name: string;
    placeholder: string;
    submitText: string;
}

export interface ISubscribeData {
    title: string;
    text: string;
    img: IImage;
    form: ISubscribeForm;
}
