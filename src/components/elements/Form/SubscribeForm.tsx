'use client';
import { useForm } from 'react-hook-form';
import { subscribeFormOptions } from '@/src/helpers/formOptions';
import { Btn, ErrorMessage, Input, Label } from '../../ui';

const SubscribeForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(subscribeFormOptions);

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='relative flex flex-wrap sm:flex-nowrap gap-2.5 sm:gap-1.5 w-full'
        >
            <Label className='flex flex-col gap-2 w-full'>
                <Input
                    {...register('email')}
                    placeholder='Enter your email here'
                    className='border-gray2 hover:border-white'
                />

                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Btn type='submit'>Subscribe</Btn>
        </form>
    );
};

export default SubscribeForm;
