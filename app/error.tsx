'use client';
import { FC } from 'react';
import { Btn, Text, Title } from '@/src/components/ui';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { RotateCw } from 'lucide-react';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: FC<Props> = ({ error, reset = () => {} }) => {
    const sectionClasses = 'relative flex items-center justify-center grow w-full';
    const blockClasses = 'w-full sm:max-w-[500px] text-center pb-24';

    const titleClasses = 'line-clamp-2 mb-2 sm:mb-3 last:mb-0';
    const textClasses = 'mb-5 last:mb-0';
    const spanClasses = 'font-medium text-purple';
    const linkClasses = 'm-auto';

    return (
        <section className={sectionClasses}>
            <div className={blockClasses}>
                <Title titleType={EnumTitle.h2} className={titleClasses}>
                    {error?.message}
                </Title>

                <Text textType={EnumText.large} className={textClasses}>
                    Oops, something went wrong. We couldn&apos;t load the page. Please click the&nbsp;
                    <span className={spanClasses}>&apos;Retry&apos;</span> button.
                </Text>

                <Btn icon={RotateCw} onClick={() => reset()} className={linkClasses}>
                    Retry
                </Btn>
            </div>
        </section>
    );
};

export default Error;
