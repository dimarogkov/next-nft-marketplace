import axios from 'axios';
import { API } from '../variables';
import { IArtist } from '../types/interfaces/Artist';

export const getArtists = async () => {
    return (await axios.get<IArtist[]>(`${API}/artists`)).data;
};

export const getArtistByQuery = async (query: string, value: string) => {
    return (await axios.get<IArtist[]>(`${API}/artists?${query}=${value}`)).data[0];
};
