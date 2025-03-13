import axios from 'axios';
import { API } from '../variables';
import { IArtist } from '../types/interfaces/Artist';

export const getArtists = async () => {
    return (await axios.get<IArtist[]>(`${API}/artists`)).data;
};

export const getArtistByUserName = async (userName: string) => {
    return (await axios.get<IArtist[]>(`${API}/artists?userName=${userName}`)).data[0];
};
