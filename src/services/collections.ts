import axios from 'axios';
import { API } from '../variables';
import { INFT } from './../types/interfaces/NFT';
import { ICollection } from '../types/interfaces/Collection';

export const getCollections = async () => {
    const response = await axios.get<INFT[]>(`${API}/nfts`);

    const collectionItems = response.data.reduce<{ [key: string]: ICollection }>((acc, nft, index) => {
        const { collectionName, author, price, highestBid } = nft;

        if (!acc[collectionName]) {
            acc[collectionName] = {
                id: `${index + 1}`,
                name: collectionName,
                totalPrice: 0,
                totalBid: 0,
                items: 0,
                authors: [],
                nfts: [],
                _authorNames: new Set<string>(),
            };
        }

        const collection = acc[collectionName];

        collection.nfts.push(nft);
        collection.totalPrice += price;
        collection.totalBid += highestBid;
        collection.items += 1;

        if (!collection._authorNames?.has(author.name)) {
            collection._authorNames?.add(author.name);
            collection.authors.push(author);
        }

        return acc;
    }, {});

    return Object.values(collectionItems).map(({ _authorNames, ...rest }) => ({
        ...rest,
        totalPrice: +rest.totalPrice.toFixed(2),
        totalBid: +rest.totalBid.toFixed(2),
    }));
};

export const getCollectionByName = async (collectionName: string) => {
    const collections = await getCollections();

    return collections.find(({ name }) => name === collectionName) || null;
};
