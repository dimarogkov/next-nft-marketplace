import { PATHS } from '@/src/variables';
import { EnumBtn, EnumTitle } from '@/src/types/enums';

import { Btn, BtnLink, Text, Title } from '../../ui';
import { Eye } from 'lucide-react';

const NewEventContent = () => {
    return (
        <div className='relative flex flex-col gap-5 w-full'>
            <div className='flex items-center gap-2.5 w-fit rounded-md p-2.5 bg-black'>
                <span className='size-6 rounded-full bg-gray' />
                <Text className='!w-auto text-white'>Shroomie</Text>
            </div>

            <Title titleType={EnumTitle.h2}>Magic Mushrooms</Title>

            <Btn icon={Eye} btnType={EnumBtn.light}>
                Send Form
            </Btn>

            <BtnLink href={PATHS.HOME} icon={Eye} btnType={EnumBtn.dark}>
                See NFT
            </BtnLink>
        </div>
    );
};

export default NewEventContent;
