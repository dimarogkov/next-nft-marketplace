'use client';
import { FC } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { FullPage } from '@/src/components/blocks';
import { Btn, Text, Title } from '@/src/components/ui';
import { RotateCw } from 'lucide-react';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <FullPage>
            <div className='flex items-center justify-center container'>
                <div className='w-full sm:max-w-[550px] text-center'>
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
            </div>
        </FullPage>
    );
};

export default Error;
