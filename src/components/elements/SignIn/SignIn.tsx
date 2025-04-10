'use client';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { PATHS } from '@/src/variables';
import { EnumBtn } from '@/src/types/enums';
import { SignInForm } from '../Form';
import SignInInfo from './SignInInfo';
import { AuthBtn, InfoMessage, Text } from '../../ui';
import Image from 'next/image';

const SignIn = () => {
    return (
        <div className='relative w-full rounded-lg p-4 md:p-5 overflow-hidden border border-gray'>
            <InfoMessage className='mb-5 last:mb-0'>
                <SignInInfo />
            </InfoMessage>

            <SignInForm />

            <div className='relative flex items-center justify-center w-full my-5'>
                <span className='absolute left-0 w-full h-[1px] bg-gray' />
                <Text className='!w-fit px-2.5 bg-black'>Or</Text>
            </div>

            <div className='flex flex-col gap-2.5 w-full'>
                <AuthBtn btnType={EnumBtn.light} onClick={() => signIn('google', { callbackUrl: PATHS.HOME })}>
                    <Image src='/google.png' alt='google' width={20} height={20} />
                    <span>Continue with Google</span>
                </AuthBtn>

                <AuthBtn btnType={EnumBtn.light} onClick={() => signIn('github', { callbackUrl: PATHS.HOME })}>
                    <Image src='/github.png' alt='github' width={20} height={20} />
                    <span>Continue with Github</span>
                </AuthBtn>
            </div>
        </div>
    );
};

export default SignIn;
