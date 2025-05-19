'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootMain: FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const isFollowingPage = pathname === PATHS.FOLLOWING;

    return (
        <main
            className={cn(
                'relative flex flex-col grow w-full section-padding-bottom pt-[70px] sm:pt-20 lg:pt-[100px]',
                { 'justify-center': isFollowingPage }
            )}
        >
            {children}
        </main>
    );
};

export default RootMain;
