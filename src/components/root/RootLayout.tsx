'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';

import { Breadcrumbs, Footer, Header } from '../blocks';
import { ProgressLine } from '../elements';
import { LenisScroll } from '../other';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const isVisible = pathname !== '/' && Object.values(PATHS).includes(pathname);

    return (
        <LenisScroll>
            <ProgressLine />
            <Header />

            {isVisible && <Breadcrumbs pathname={pathname} />}

            <main
                className={cn('relative flex flex-col grow w-full', {
                    'pt-[116px] sm:pt-[130px] lg:pt-[150px]': isVisible,
                    'pt-[70px] sm:pt-20 lg:pt-[100px]': !isVisible,
                })}
            >
                {children}
            </main>
            <Footer />
        </LenisScroll>
    );
};

export default RootLayout;
