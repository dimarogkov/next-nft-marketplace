'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
    children?: ReactNode;
};

const queryClient = new QueryClient();

const RootProviders: FC<Props> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default RootProviders;
