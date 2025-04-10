import { Metadata } from 'next';
import { FullPage } from '@/src/components/blocks';
import { SignIn, SignInContent } from '@/src/components/elements';

export const metadata: Metadata = {
    title: 'Sign In',
};

const SignInPage = () => {
    return (
        <FullPage>
            <div className='relative flex flex-col md:flex-row grow md:items-center justify-center gap-7 md:gap-5 lg:gap-10 w-full'>
                <SignInContent />
                <SignIn />
            </div>
        </FullPage>
    );
};

export default SignInPage;
