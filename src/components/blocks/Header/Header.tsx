import { getServerSession } from 'next-auth';
import { authConfig } from '@/src/helpers';
import HeaderClient from './HeaderClient';

const Header = async () => {
    const session = await getServerSession(authConfig);

    return <HeaderClient initialSession={session} />;
};

export default Header;
