'use client';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { PATHS } from '@/src/variables';
import { EnumBtn, EnumTabs } from '@/src/types/enums';
import { SignInForm } from '../Form';
import SignInInfo from './SignInInfo';
import { AuthBtn, InfoMessage, Text, Toast } from '../../ui';

const SignIn = () => {
    const toggleAuth = (type: string) => {
        signIn(type, { callbackUrl: `${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}` });
        toast.custom((t) => <Toast toast={t} text='👋 Welcome back' />);
    };

    return (
        <div className='relative w-full rounded-lg p-4 overflow-hidden border border-gray'>
            <InfoMessage className='mb-5 last:mb-0'>
                <SignInInfo />
            </InfoMessage>

            <SignInForm />

            <div className='relative flex items-center justify-center w-full my-5'>
                <span className='absolute left-0 w-full h-[1px] bg-gray' />
                <Text className='!w-fit px-2.5 bg-black'>Or</Text>
            </div>

            <div className='flex flex-col gap-2.5 w-full'>
                <AuthBtn btnType={EnumBtn.light} onClick={() => toggleAuth('google')}>
                    <Image src='/google.png' alt='google' width={20} height={20} />
                    <span>Continue with Google</span>
                </AuthBtn>

                <AuthBtn btnType={EnumBtn.light} onClick={() => toggleAuth('github')}>
                    <Image src='/github.png' alt='github' width={20} height={20} />
                    <span>Continue with Github</span>
                </AuthBtn>
            </div>
        </div>
    );
};

export default SignIn;
