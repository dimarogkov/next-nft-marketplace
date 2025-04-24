import { getServerSession } from 'next-auth';
import { authConfig } from '@/src/helpers';
import { Btn } from '../../ui';
import { Plus } from 'lucide-react';

const FollowBtn = async () => {
    const session = await getServerSession(authConfig);

    return <>{session && <Btn icon={Plus}>Follow</Btn>}</>;
};

export default FollowBtn;
