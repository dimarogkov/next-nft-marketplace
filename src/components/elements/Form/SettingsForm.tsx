'use client';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PATHS } from '@/src/variables';
import { settingsFormOptions } from '@/src/helpers/formOptions';
import { EnumBtn, EnumTabs, EnumTitle } from '@/src/types/enums';
import { IArtistLink } from '@/src/types/interfaces/Artist';
import { Btn, BtnLink, ErrorMessage, Input, Label, Text, Title } from '../../ui';
import { ArrowDownLeft, Save } from 'lucide-react';

type Props = {
    data: {
        name: string;
        email: string;
        bio: string;
        links: IArtistLink[];
    };
};

const SettingsForm: FC<Props> = ({ data }) => {
    const { name: fullName, email, bio, links } = data;
    const [name, surname] = fullName.split(' ');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm(settingsFormOptions);

    const socials = {
        facebook: links.find(({ id }) => id === 'facebook')?.href,
        twitter: links.find(({ id }) => id === 'twitter')?.href,
        instagram: links.find(({ id }) => id === 'instagram')?.href,
    };

    useEffect(() => {
        reset({
            name,
            surname,
            email,
            bio,
            facebook: socials.facebook,
            twitter: socials.twitter,
            instagram: socials.instagram,
        });
    }, [name, surname, email, bio, socials.facebook, socials.twitter, socials.instagram, reset]);

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='relative grid gap-7 lg:gap-10 w-full'>
            <Title titleType={EnumTitle.h3} className='text-white'>
                Personal information
            </Title>

            <div className='grid md:grid-cols-2 gap-2.5 sm:gap-5 w-full'>
                <Label className='flex flex-col gap-2.5 w-full'>
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    <Text>Name</Text>
                    <Input {...register('name')} placeholder='Name' />
                </Label>

                <Label className='flex flex-col gap-2.5 w-full'>
                    {errors.surname && <ErrorMessage>{errors.surname.message}</ErrorMessage>}
                    <Text>Surname</Text>
                    <Input {...register('surname')} placeholder='Surname' />
                </Label>

                <Label className='flex flex-col gap-2.5 w-full'>
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    <Text>Email</Text>
                    <Input {...register('email')} placeholder='Email' />
                </Label>

                <Label className='flex flex-col gap-2.5 w-full'>
                    <Text>BIO</Text>
                    <Input {...register('bio')} placeholder='BIO' />
                </Label>
            </div>

            <Title titleType={EnumTitle.h3} className='text-white'>
                Socials
            </Title>

            <div className='grid gap-2.5 sm:gap-5 w-full'>
                <Label className='flex flex-col gap-2.5 w-full'>
                    <Text>Facebook</Text>
                    <Input {...register('facebook')} placeholder='Facebook' />
                </Label>

                <Label className='flex flex-col gap-2.5 w-full'>
                    <Text>Twitter</Text>
                    <Input {...register('twitter')} placeholder='Twitter' />
                </Label>

                <Label className='flex flex-col gap-2.5 w-full'>
                    <Text>Instagram</Text>
                    <Input {...register('instagram')} placeholder='Instagram' />
                </Label>
            </div>

            <div className='flex flex-wrap justify-end gap-2.5 w-full'>
                <BtnLink
                    href={`${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`}
                    btnType={EnumBtn.outline}
                    icon={ArrowDownLeft}
                >
                    Back to Profile
                </BtnLink>

                <Btn type='submit' icon={Save} disabled={isSubmitting}>
                    Save
                </Btn>
            </div>
        </form>
    );
};

export default SettingsForm;
