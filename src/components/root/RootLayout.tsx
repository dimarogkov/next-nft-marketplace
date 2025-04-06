'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useBreadcrumbsStatus } from '@/src/hooks';
import { Breadcrumbs, Footer, Header } from '../blocks';
import { ProgressLine } from '../elements';
import { LenisScroll } from '../other';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const { isBreadcrumbsExist } = useBreadcrumbsStatus(pathname);

    return (
        <LenisScroll>
            <ProgressLine />
            <Header />

            {isBreadcrumbsExist && <Breadcrumbs pathname={pathname} />}

            <main
                className={cn('relative flex flex-col grow w-full section-padding-bottom', {
                    'pt-[116px] sm:pt-[130px] lg:pt-[150px]': isBreadcrumbsExist,
                    'pt-[70px] sm:pt-20 lg:pt-[100px]': !isBreadcrumbsExist,
                })}
            >
                {children}
            </main>

            <Footer />
        </LenisScroll>
    );
};

export default RootLayout;
