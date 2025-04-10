'use client';
import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { useDisableScroll } from '@/src/hooks';
import { HeaderBurger, HeaderLayer, HeaderLinks, Logo } from '../../elements';

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

                {status !== 'loading' && <HeaderLinks isOpen={isOpen} />}
                {session && <span className='rounded-lg px-2.5 bg-purple'>{session?.user?.name}</span>}

                <HeaderBurger isOpen={isOpen} toggleMenu={toggleMenu} />
                <HeaderLayer isOpen={isOpen} closeMenu={closeMenu} />
            </div>
        </header>
    );
};

export default HeaderClient;
