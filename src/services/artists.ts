import axios from 'axios';
import { API } from '../variables';
import { IArtist } from '../types/interfaces/Artist';

export const getArtists = async () => {
    return (await axios.get<IArtist[]>(`${API}/artists`)).data;
};

export const getArtistByName = async (name: string) => {
    return (await axios.get<IArtist[]>(`${API}/artists?name=${name}`)).data[0];
};
