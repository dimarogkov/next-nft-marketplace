import { getServerSession } from 'next-auth';
import { PATHS } from '@/src/variables';
import { authConfig } from '@/src/helpers';
import { BtnLink, FollowBtn } from '../../ui';
import { Plus } from 'lucide-react';

const Follow = async () => {
    const session = await getServerSession(authConfig);

    return (
        <>
            {!session ? (
                <BtnLink href={PATHS.SIGN_IN} icon={Plus}>
                    Follow
                </BtnLink>
            ) : (
                <FollowBtn />
            )}
        </>
    );
};

export default Follow;
