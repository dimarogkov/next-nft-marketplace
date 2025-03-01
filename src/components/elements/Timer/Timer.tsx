'use client';
import { FC } from 'react';
import { useTimer } from '@/src/hooks';
import { EnumText, EnumTitle } from '@/src/types/enums';

import TimerItem from './TimerItem';
import { Text, Title } from '../../ui';

type Props = {
    hours?: number;
    minutes?: number;
    seconds?: number;
    className?: string;
};

const Timer: FC<Props> = ({ hours = 0, minutes = 0, seconds = 0, className = '' }) => {
    const timer = useTimer(hours, minutes, seconds);

    return (
        <div className={`relative w-fit rounded-md p-4 sm:p-5 lg:p-6 ${className}`}>
            {timer && timer.seconds > 0 ? (
                <>
                    <Text className='font-space-mono text-white mb-2 last:mb-0'>Auction ends in:</Text>

                    <div className='flex items-start gap-2.5 w-full text-center'>
                        <TimerItem timer={{ label: 'Hours', value: timer.hours }} />

                        <Title titleType={EnumTitle.h3} className='-top-0.5 font-space-mono text-4xl'>
                            :
                        </Title>

                        <TimerItem timer={{ label: 'Minutes', value: timer.minutes }} />

                        <Title titleType={EnumTitle.h3} className='-top-0.5 font-space-mono text-4xl'>
                            :
                        </Title>

                        <TimerItem timer={{ label: 'Seconds', value: timer.seconds }} />
                    </div>
                </>
            ) : (
                <div className='w-full'>
                    <Title titleType={EnumTitle.h3} className='mb-1.5 last:mb-0'>
                        Auction Closed!
                    </Title>

                    <Text textType={EnumText.large}>
                        The auction has officially ended. Winners will be announced soon!
                    </Text>
                </div>
            )}
        </div>
    );
};

export default Timer;
