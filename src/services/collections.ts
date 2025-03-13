import axios from 'axios';
import { API } from '../variables';
import { convertToSnakeCase } from '../helpers';
import { INFT } from './../types/interfaces/NFT';
import { ICollection } from '../types/interfaces/Collection';

export const getCollections = async () => {
    const response = await axios.get<INFT[]>(`${API}/nfts`);

    const collectionItems = response.data.reduce<{ [key: string]: ICollection }>(
        (acc, { collectionName, author, img, name }) => {
            if (!acc[collectionName]) {
                acc[collectionName] = {
                    name: collectionName,
                    author: { userName: author.userName, avatar: author.avatar },
                    nfts: [],
                };
            }

            acc[collectionName].nfts.push({
                src: img.src,
                alt: convertToSnakeCase(name),
            });

            return acc;
        },
        {}
    );

    return [...Object.values(collectionItems)];
};

export const getCollectionByName = async (collectionName: string) => {
    const collections = await getCollections();

    return collections.filter(({ name }) => name === collectionName);
};
