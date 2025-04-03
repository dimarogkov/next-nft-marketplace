'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Btn, Text, Title } from '@/src/components/ui';
import { RotateCw } from 'lucide-react';
import cn from 'classnames';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: FC<Props> = ({ error, reset = () => {} }) => {
    const pathname = usePathname();

    const isBreadcrumbsVisible =
        pathname !== '/' &&
        Object.values(PATHS)
            .map((path) => path.split('?')[0])
            .includes(pathname);

    return (
        <section
            className={cn('relative grow w-full', {
                'section-height-full-with-breadcrumbs': isBreadcrumbsVisible,
                'section-height-full': !isBreadcrumbsVisible,
            })}
        >
            <div className='flex items-center justify-center container h-full'>
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
            </div>
        </section>
    );
};

export default Error;
