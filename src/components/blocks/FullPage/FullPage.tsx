'use client';
import { FC, ReactNode } from 'react';
import { useBreadcrumbsStatus } from '@/src/hooks';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const FullPage: FC<Props> = ({ children }) => {
    const { isBreadcrumbsExist } = useBreadcrumbsStatus();

    return (
        <section
            className={cn('relative flex flex-col grow w-full section-padding', {
                'section-height-full-with-breadcrumbs': isBreadcrumbsExist,
                'section-height-full': !isBreadcrumbsExist,
            })}
        >
            <div className='flex flex-col justify-center grow container'>{children}</div>
        </section>
    );
};

export default FullPage;
