import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { JWT } from 'next-auth/jwt';
import { USER_DATA } from '../variables';
import { getArtistByQuery } from '../services';
import { IProfile } from '../types/interfaces/Profile';

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }

                if (USER_DATA && USER_DATA.email === credentials.email && USER_DATA.password === credentials.password) {
                    const { password, ...userWithoutPassword } = USER_DATA;
                    return userWithoutPassword as User & IProfile;
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ session, token, trigger }) {
            const artist = await getArtistByQuery('name', USER_DATA.name);
            const currentToken = token as JWT & IProfile;
            const isTestAccount = currentToken.name === artist.name;

            if (session && trigger === 'update') {
                currentToken.name = session.name;
                currentToken.email = session.email;
                currentToken.wallet = session.wallet;
                currentToken.bio = session.bio;
                currentToken.avatar = session.avatar;
                currentToken.info = session.info;
                currentToken.nfts = session.nfts;
                return currentToken;
            }

            currentToken.name = isTestAccount ? artist.name : currentToken.name || '';
            currentToken.email = currentToken.email;
            currentToken.wallet = isTestAccount ? USER_DATA.wallet : currentToken.wallet;
            currentToken.bio = isTestAccount ? artist.bio : currentToken.bio || '';
            currentToken.avatar = isTestAccount ? artist.avatar : currentToken.picture || '';
            currentToken.info = currentToken.info || {
                volume: isTestAccount ? artist.info.volume : 0,
                sales: isTestAccount ? artist.info.sales : 0,
                followers: isTestAccount ? artist.info.followers : 0,
                totalSales: isTestAccount ? artist.info.totalSales : 0,
                links: isTestAccount ? artist.info.links : [],
            };
            currentToken.nfts = currentToken.nfts || {
                likedNfts: [],
            };

            return currentToken;
        },
        async session({ session, token }) {
            const currentUser = session.user as User & IProfile;
            const currentToken = token as JWT & IProfile;

            currentUser.name = currentToken.name;
            currentUser.email = currentToken.email;
            currentUser.wallet = currentToken.wallet;
            currentUser.bio = currentToken.bio;
            currentUser.avatar = currentToken.avatar;
            currentUser.info = currentToken.info;
            currentUser.nfts = currentToken.nfts;

            return session;
        },
    },
    pages: {
        signIn: '/sign-in',
    },
};
