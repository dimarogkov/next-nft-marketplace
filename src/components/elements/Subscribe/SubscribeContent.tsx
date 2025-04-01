import { EnumText, EnumTitle } from '@/src/types/enums';
import { SubscribeForm } from '../Form';
import { Text, Title } from '../../ui';

const SubscribeContent = () => {
    return (
        <div className='relative w-full md:w-auto p-4 sm:p-5 lg:p-7'>
            <div className='w-full mb-5 md:mb-6 last:mb-0'>
                <Title titleType={EnumTitle.h3} className='mb-1.5 md:mb-2.5 last:mb-0'>
                    Join Our Weekly Digest
                </Title>

                <Text textType={EnumText.large} className='w-full md:w-[85%]'>
                    Get exclusive promotions & updates straight to your inbox.
                </Text>
            </div>

            <SubscribeForm />
        </div>
    );
};

export default SubscribeContent;
