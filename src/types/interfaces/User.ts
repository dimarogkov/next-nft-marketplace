import { IWalletOption } from './WalletOption';

export interface IUser {
    name: string;
    email: string;
    password: string;
    wallet: IWalletOption;
}
