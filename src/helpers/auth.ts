import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { USER_DATA } from '../variables';
import { IArtist } from '../types/interfaces/Artist';

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

                if (USER_DATA && USER_DATA.password === credentials.password) {
                    const { password, ...userWithoutPassword } = USER_DATA;
                    return userWithoutPassword as User & IArtist;
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
        async session({ session }) {
            const safeUser = session.user as unknown as IArtist;

            safeUser.bio = '';
            safeUser.avatar = '/avatars/avatar_13.png';
            safeUser.info = {
                volume: '0',
                sales: '0',
                followers: '0',
                totalSales: 0,
                links: [],
            };

            return session;
        },
    },
    pages: {
        signIn: '/sign-in',
    },
};
