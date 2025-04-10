'use client';
import { FC, ReactNode } from 'react';
import { useBreadcrumbsStatus } from '@/src/hooks';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootMain: FC<Props> = ({ children }) => {
    const { isBreadcrumbsExist } = useBreadcrumbsStatus();

    return (
        <main
            className={cn('relative flex flex-col grow w-full section-padding-bottom', {
                'pt-[116px] sm:pt-[130px] lg:pt-[150px]': isBreadcrumbsExist,
                'pt-[70px] sm:pt-20 lg:pt-[100px]': !isBreadcrumbsExist,
            })}
        >
            {children}
        </main>
    );
};

export default RootMain;
