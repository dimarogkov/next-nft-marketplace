import { ARTISTS_DATA, PATHS } from '@/src/variables';
import { EnumBtn, EnumTitle } from '@/src/types/enums';
import { Avatar, BtnLink, Title } from '../../ui';
import { Eye } from 'lucide-react';

const NewEventContent = () => {
    const { userName, avatar } = ARTISTS_DATA[0];

    return (
        <div className='relative flex flex-col gap-5 w-full'>
            <Avatar href={PATHS.HOME} src={avatar} username={userName} className='rounded-md py-2 px-4 bg-black' />
            <Title titleType={EnumTitle.h2}>Magic Mushrooms</Title>

            <BtnLink href={PATHS.HOME} icon={Eye} btnType={EnumBtn.light}>
                See NFT
            </BtnLink>
        </div>
    );
};

export default NewEventContent;
