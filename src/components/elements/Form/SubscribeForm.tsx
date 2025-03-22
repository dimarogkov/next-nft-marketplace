'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { subscribeFormOptions } from '@/src/helpers/formOptions';
import { EnumBtn } from '@/src/types/enums';

import { Btn, ErrorMessage, Input, Label } from '../../ui';
import { MailCheck } from 'lucide-react';

const SubscribeForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(subscribeFormOptions);
    const pathname = usePathname();

    useEffect(() => {
        reset();
    }, [pathname, reset]);

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='relative w-full'>
            {errors.email && <ErrorMessage className='mb-2.5'>{errors.email.message}</ErrorMessage>}

            <div className='flex flex-wrap sm:flex-nowrap gap-2.5 sm:gap-1.5 w-full'>
                <Label className='flex flex-col gap-2 w-full'>
                    <Input
                        {...register('email')}
                        placeholder='Enter your email here'
                        className='border-gray2 hover:border-white'
                    />
                </Label>

                <Btn type='submit' icon={MailCheck} btnType={EnumBtn.light}>
                    Subscribe
                </Btn>
            </div>
        </form>
    );
};

export default SubscribeForm;
