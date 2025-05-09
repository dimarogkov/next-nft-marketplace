import { FC } from 'react';
import { IProfile } from '@/src/types/interfaces/Profile';
import { SettingsForm } from '../../elements';

type Props = {
    user: IProfile;
};

const Settings: FC<Props> = ({ user }) => {
    const { name, email, bio, info } = user;
    const formData = { name, email, bio, links: info.links };

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <SettingsForm data={formData} />
            </div>
        </section>
    );
};

export default Settings;
