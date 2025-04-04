import { Metadata } from 'next';
import { PATHS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '@/src/components/ui';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: '404',
};

const NotFoundPage = () => {
    return (
        <section className='relative grow w-full section-height-full'>
            <div className='flex items-center justify-center container h-full'>
                <div className='w-full sm:max-w-[550px] text-center pb-[70px] sm:pb-[80px] lg:pb-[100px]'>
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
        </section>
    );
};

export default NotFoundPage;
