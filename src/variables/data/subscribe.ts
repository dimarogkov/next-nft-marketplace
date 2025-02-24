import { ISubscribeData } from '@/src/types/interfaces/SubscribeData';

export const SUBSCRIBE_DATA: ISubscribeData = {
    title: 'Join Our Weekly Digest',
    text: 'Get exclusive promotions & updates straight to your inbox.',
    img: {
        src: '/subscribe_img.jpg',
        alt: 'join_our_weekly_digest',
    },
    form: {
        name: 'email',
        placeholder: 'Enter your email here',
        submitText: 'Subscribe',
    },
};
