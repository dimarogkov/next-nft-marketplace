'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { PATHS } from '@/src/variables';
import { IProfile } from '@/src/types/interfaces/Profile';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const RootMain: FC<Props> = ({ children }) => {
    const { data: session } = useSession();
    const pathname = usePathname();

    const followingArtists = (session?.user as IProfile)?.data.followingArtists || [];
    const isFollowingPage = pathname === PATHS.FOLLOWING;

    return (
        <main
            className={cn(
                'relative flex flex-col grow w-full section-padding-bottom pt-[70px] sm:pt-20 lg:pt-[100px]',
                { 'justify-center': isFollowingPage && followingArtists.length === 0 }
            )}
        >
            {children}
        </main>
    );
};

export default RootMain;
