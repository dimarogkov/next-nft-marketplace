import axios from 'axios';
import { API } from '../variables';
import { INFT } from '../types/interfaces/NFT';

export const getNfts = async () => {
    return (await axios.get<INFT[]>(`${API}/nfts`)).data;
};

export const getNftByQuery = async (query: string, value: string) => {
    return (await axios.get<INFT[]>(`${API}/nfts?${query}=${value}`)).data[0];
};
