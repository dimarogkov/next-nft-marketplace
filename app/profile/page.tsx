import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/src/helpers';
import { ArtistDetail, CallToAction, Subscribe } from '@/src/components/blocks';
import { IProfile } from '@/src/types/interfaces/Profile';

export const metadata: Metadata = {
    title: 'Profile',
};

const ProfilePage = async () => {
    const session = await getServerSession(authConfig);
    const artist = session?.user as IProfile;

    return (
        <>
            <ArtistDetail artist={artist} isProfile />
            <CallToAction />
            <Subscribe />
        </>
    );
};

export default ProfilePage;
