'use client';
import { FC } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Btn, Text, Title } from '@/src/components/ui';
import { RotateCw } from 'lucide-react';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative flex items-center justify-center grow w-full section-height-full'>
            <div className='w-full sm:max-w-[550px] text-center pb-[70px] sm:pb-[80px] lg:pb-[100px]'>
                <Title titleType={EnumTitle.h2} className='line-clamp-2 mb-2 sm:mb-3 last:mb-0'>
                    {error?.message}
                </Title>

                <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                    Oops, something went wrong. We couldn&apos;t load the page. Please click the&nbsp;
                    <span className='font-medium text-purple'>&apos;Retry&apos;</span> button.
                </Text>

                <Btn icon={RotateCw} onClick={() => reset()} className='m-auto'>
                    Retry
                </Btn>
            </div>
        </section>
    );
};

export default Error;
