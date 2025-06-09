'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { PATHS } from '@/src/variables';
import { signInFormOptions } from '@/src/helpers/formOptions';
import { EnumTabs } from '@/src/types/enums';
import { Btn, ErrorMessage, Input, Label, Toast } from '../../ui';
import { CircleUser } from 'lucide-react';

const SignInForm = () => {
    const [responseError, setResponseError] = useState('');
    const { replace } = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm(signInFormOptions);

    const onSubmit = async (data: any) => {
        const { email, password } = data;
        const response = await signIn('credentials', { email, password, redirect: false });

        if (response && !response.error) {
            replace(`${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`);
            toast.custom((t) => <Toast toast={t} text='👋 Welcome back' />);
        } else {
            setResponseError('Your Email or Password is wrong!');
        }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='relative w-full'>
            {responseError && <ErrorMessage className='mb-2.5 last:mb-0'>{responseError}</ErrorMessage>}

            <div className='flex flex-col gap-2.5 sm:gap-5 w-full mb-7 md:mb-5 last:mb-0'>
                <Label className='flex flex-col gap-2.5 w-full'>
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    <Input {...register('email')} placeholder='Email' />
                </Label>

                <Label className='flex flex-col gap-2.5 w-full'>
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    <Input {...register('password')} placeholder='Password' />
                </Label>
            </div>

            <Btn type='submit' icon={CircleUser} disabled={isSubmitting} className='sm:!w-full'>
                Sign In
            </Btn>
        </form>
    );
};

export default SignInForm;
