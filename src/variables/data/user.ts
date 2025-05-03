import { WALLET_OPTIONS_DATA } from './walletOptions';
import { IUser } from '@/src/types/interfaces/User';

export const USER_DATA: IUser = {
    name: 'Sam Altman',
    email: 'sam@gmail.com',
    password: '123456',
    wallet: WALLET_OPTIONS_DATA[0],
};
