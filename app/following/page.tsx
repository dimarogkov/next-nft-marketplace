import { Suspense } from 'react';
import { Metadata } from 'next';
import { Breadcrumbs, Following } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Following',
};

const FollowingPage = async () => {
    return (
        <>
            <Breadcrumbs className='sm:!fixed' />

            <Suspense fallback={null}>
                <Following />
            </Suspense>
        </>
    );
};

export default FollowingPage;
