import { EnumText, EnumTitle } from '@/src/types/enums';
import { SubscribeForm } from '../Form';
import { Text, Title } from '../../ui';

const SubscribeContent = () => {
    return (
        <div className='w-full md:w-auto'>
            <div className='w-full mb-4 md:mb-5 last:mb-0'>
                <Title titleType={EnumTitle.h3} className='mb-1 md:mb-2 last:mb-0'>
                    Join Our Weekly Digest
                </Title>

                <Text textType={EnumText.large} className='w-full md:w-[90%]'>
                    Get exclusive promotions & updates straight to your inbox.
                </Text>
            </div>

            <SubscribeForm />
        </div>
    );
};

export default SubscribeContent;
