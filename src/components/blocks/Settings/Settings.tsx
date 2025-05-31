'use client';
import toast from 'react-hot-toast';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { IProfile } from '@/src/types/interfaces/Profile';
import { SettingsForm } from '../../elements';
import { Toast } from '../../ui';

type Props = {
    user: IProfile;
};

const Settings: FC<Props> = ({ user }) => {
    const { update } = useSession();
    const { name, email, bio, info } = user;
    const formData = { name, email, bio, links: info.links };

    const updateData = async (data: any) => {
        const { facebook, twitter, instagram, name, surname, ...updatedData } = data;

        const socialLinks = [
            { id: 'facebook', href: facebook },
            { id: 'twitter', href: twitter },
            { id: 'instagram', href: instagram },
        ];

        const links = socialLinks.filter((link) => link.href);

        await update({
            ...user,
            name: `${name} ${surname}`,
            info: { ...user.info, links },
            ...updatedData,
        });

        toast.custom((t) => <Toast toast={t} text='🎉 Settings updated!' />);
    };

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <SettingsForm data={formData} updateData={updateData} />
            </div>
        </section>
    );
};

export default Settings;
