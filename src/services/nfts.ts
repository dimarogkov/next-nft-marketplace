import axios from 'axios';
import { API } from '../variables';
import { INFT } from '../types/interfaces/NFT';

export const getNfts = async () => {
    return (await axios.get<INFT[]>(`${API}/nfts`)).data;
};

export const getNftByName = async (nftName: string) => {
    return (await axios.get<INFT[]>(`${API}/nfts?name=${nftName}`)).data[0];
};
