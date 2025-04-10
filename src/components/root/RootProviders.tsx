'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { SessionProvider } from 'next-auth/react';

type Props = {
    children?: ReactNode;
};

const queryClient = new QueryClient();

const RootProviders: FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
                <SessionProvider>{children}</SessionProvider>
            </NuqsAdapter>
        </QueryClientProvider>
    );
};

export default RootProviders;
