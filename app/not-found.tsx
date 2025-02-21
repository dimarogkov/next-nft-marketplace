import { Metadata } from 'next';
import { PATHS } from '@/src/variables/paths';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '@/src/components/ui';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: '404',
};

const NotFoundPage = () => {
    const sectionClasses = 'relative flex items-center justify-center grow w-full';
    const blockClasses = 'w-full sm:max-w-[500px] text-center pb-24';

    const titleClasses = 'mb-2 sm:mb-3 last:mb-0';
    const textClasses = 'mb-5 last:mb-0';
    const spanClasses = 'font-medium text-purple';
    const linkClasses = 'm-auto';

    return (
        <section className={sectionClasses}>
            <div className={blockClasses}>
                <Title titleType={EnumTitle.h2} className={titleClasses}>
                    Page not Found
                </Title>

                <Text textType={EnumText.large} className={textClasses}>
                    It seems that the page you are looking for no longer exists or has been moved. Please check the URL
                    for any mistakes or return to the <span className={spanClasses}>homepage</span>.
                </Text>

                <BtnLink href={PATHS.HOME} icon={ArrowLeft} className={linkClasses}>
                    Go Home
                </BtnLink>
            </div>
        </section>
    );
};

export default NotFoundPage;
