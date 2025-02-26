import { IArtist } from '@/src/types/interfaces/Artist';

export const ARTISTS_DATA: IArtist[] = [
    {
        userName: 'Shroomie',
        bio: "The internet's friendliest designer kid.",
        avatar: '/avatar_img.png',
        info: {
            volume: '250k+',
            sales: '50+',
            followers: '1000+',
            links: [
                {
                    id: 'facebook',
                    href: 'https://www.google.com/',
                },
                {
                    id: 'twitter',
                    href: 'https://www.google.com/',
                },
                {
                    id: 'instagram',
                    href: 'https://www.google.com/',
                },
            ],
        },
    },
];
