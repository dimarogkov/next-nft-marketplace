import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { PROJECT_NAME } from '@/src/variables';
import { Root, RootLayout, RootProviders } from '@/src/components/root';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: `${PROJECT_NAME} | Home Page`,
        template: `${PROJECT_NAME} | %s`,
    },
    description: 'Generated by Dmytro Rogkov',
};

type Props = {
    children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Root>
            <RootProviders>
                <RootLayout>{children}</RootLayout>
            </RootProviders>
        </Root>
    );
};

export default MainLayout;
