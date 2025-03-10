import { ICollection } from '@/src/types/interfaces/Collection';

export const COLLECTIONS_DATA: ICollection[] = [
    {
        name: 'Monkey Characters',
        author: {
            userName: 'Davis Workman',
            avatar: '/avatars/avatar_12.png',
        },
        nfts: [
            {
                src: '/nfts/monkey_characters/monkey_characters_1.jpg',
                alt: 'explorer_monkey',
            },
            {
                src: '/nfts/monkey_characters/monkey_characters_2.jpg',
                alt: 'gentleman_monkey',
            },
        ],
    },
    {
        name: 'Botanical Portraits',
        author: {
            userName: 'Ruben Carder',
            avatar: '/avatars/avatar_2.png',
        },
        nfts: [
            {
                src: '/nfts/botanical_portraits/botanical_portraits_1.jpg',
                alt: 'whispering_blooms',
            },
            {
                src: '/nfts/botanical_portraits/botanical_portraits_2.jpg',
                alt: 'enchanted_greens',
            },
            {
                src: '/nfts/botanical_portraits/botanical_portraits_3.jpg',
                alt: 'petal_symphony',
            },
            {
                src: '/nfts/botanical_portraits/botanical_portraits_4.jpg',
                alt: 'garden_fantasy',
            },
        ],
    },
    {
        name: 'Planet',
        author: {
            userName: 'Lindsey Lipshutz',
            avatar: '/avatars/avatar_13.png',
        },
        nfts: [
            {
                src: '/nfts/planet/planet_1.jpg',
                alt: 'moon_dream',
            },
            {
                src: '/nfts/planet/planet_2.jpg',
                alt: 'venus',
            },
            {
                src: '/nfts/planet/planet_3.jpg',
                alt: 'mars',
            },
            {
                src: '/nfts/planet/planet_4.jpg',
                alt: 'jupiter',
            },
            {
                src: '/nfts/planet/planet_5.jpg',
                alt: 'neptune',
            },
            {
                src: '/nfts/planet/planet_6.jpg',
                alt: 'uranus',
            },
        ],
    },
];
