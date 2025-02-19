import Link from 'next/link';
import { PATHS } from '@/src/variables/paths';

const Header = () => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-[100px]'>
            <div className='flex items-center justify-between w-full h-full max-w-[1064px] px-5 m-auto'>
                <Link
                    href={PATHS.HOME}
                    className='flex items-center gap-4 transition-opacity duration-300 hover:opacity-75'
                >
                    NFT Marketplace
                </Link>
            </div>
        </header>
    );
};

export default Header;
