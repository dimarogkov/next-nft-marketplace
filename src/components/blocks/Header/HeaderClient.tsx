'use client';
import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { useDisableScroll } from '@/src/hooks';
import { IArtist } from '@/src/types/interfaces/Artist';
import { HeaderBurger, HeaderLayer, HeaderLinks, HeaderUser, Logo } from '../../elements';

type Props = {
    initialSession: Session | null;
};

const HeaderClient: FC<Props> = ({ initialSession }) => {
    const { data: clientSession, status } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const session = clientSession || initialSession;

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useDisableScroll(isOpen);

    const toggleMenu = () => setIsOpen((prevState) => !prevState);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className='fixed z-30 top-0 left-0 flex items-center w-full h-[70px] sm:h-20 lg:h-[100px] border-b border-gray bg-black'>
            <div className='relative flex items-center justify-between container h-full'>
                <Logo />

                <div className='flex items-center gap-5 sm:gap-6 lg:gap-8 h-full'>
                    {status !== 'loading' && <HeaderLinks isOpen={isOpen} session={session} />}
                    <HeaderBurger isOpen={isOpen} toggleMenu={toggleMenu} />
                    {session && <HeaderUser user={session.user as IArtist & AdapterUser} closeMenu={closeMenu} />}
                </div>

                <HeaderLayer isOpen={isOpen} closeMenu={closeMenu} />
            </div>
        </header>
    );
};

export default HeaderClient;
