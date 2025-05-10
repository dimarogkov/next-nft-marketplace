import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/src/helpers';
import { IProfile } from '@/src/types/interfaces/Profile';
import { Settings } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Settings',
};

const SettingsPage = async () => {
    const session = await getServerSession(authConfig);
    const user = session?.user as IProfile;

    return <Settings user={user} />;
};

export default SettingsPage;
