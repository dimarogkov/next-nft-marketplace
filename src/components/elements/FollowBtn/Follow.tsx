import { getServerSession } from 'next-auth';
import { PATHS } from '@/src/variables';
import { authConfig } from '@/src/helpers';
import { Btn, BtnLink } from '../../ui';
import { Plus } from 'lucide-react';

const FollowBtn = async () => {
    const session = await getServerSession(authConfig);

    return (
        <>
            {!session ? (
                <BtnLink href={PATHS.SIGN_IN} icon={Plus}>
                    Follow
                </BtnLink>
            ) : (
                <Btn icon={Plus}>Follow</Btn>
            )}
        </>
    );
};

export default FollowBtn;
