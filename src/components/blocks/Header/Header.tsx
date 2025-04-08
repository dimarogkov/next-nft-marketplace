'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// import { useSession } from 'next-auth/react';
import { useDisableScroll } from '@/src/hooks';
import { HeaderBurger, HeaderLayer, HeaderLinks, Logo } from '../../elements';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const { data: session } = useSession();
    const pathname = usePathname();

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
                <HeaderLinks isOpen={isOpen} />
                {/* {session && <span className='rounded-lg px-2.5 bg-purple'>{session?.user?.name}</span>} */}
                <HeaderBurger isOpen={isOpen} toggleMenu={toggleMenu} />
                <HeaderLayer isOpen={isOpen} closeMenu={closeMenu} />
            </div>
        </header>
    );
};

export default Header;
