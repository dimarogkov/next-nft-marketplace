import { Metadata } from 'next';
import { PATHS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { FullPage } from '@/src/components/blocks';
import { BtnLink, Text, Title } from '@/src/components/ui';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: '404',
};

const NotFoundPage = () => {
    return (
        <FullPage>
            <div className='flex items-center justify-center container'>
                <div className='w-full sm:max-w-[550px] text-center'>
                    <Title titleType={EnumTitle.h2} className='mb-2 sm:mb-3 last:mb-0'>
                        Page not Found
                    </Title>

                    <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                        It seems that the page you are looking for no longer exists or has been moved. Please check the
                        URL for any mistakes or return to the <span className='font-medium text-purple'>homepage</span>.
                    </Text>

                    <BtnLink href={PATHS.HOME} icon={ArrowLeft} className='m-auto'>
                        Go Home
                    </BtnLink>
                </div>
            </div>
        </FullPage>
    );
};

export default NotFoundPage;
