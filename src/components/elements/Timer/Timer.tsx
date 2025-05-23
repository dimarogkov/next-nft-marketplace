'use client';
import { FC } from 'react';
import { useTimer } from '@/src/hooks';
import { EnumTitle } from '@/src/types/enums';
import TimerItem from './TimerItem';
import TimerEnd from './TimerEnd';
import { Text, Title } from '../../ui';

type Props = {
    hours?: number;
    minutes?: number;
    seconds?: number;
    className?: string;
};

const Timer: FC<Props> = ({ hours = 0, minutes = 0, seconds = 0, className = '' }) => {
    const { timer, isTimerEnd } = useTimer(hours, minutes, seconds);

    return (
        <div className={`relative w-fit max-w-[300px] rounded-lg p-4 md:p-5 ${className}`}>
            {!isTimerEnd ? (
                <div className='w-fit'>
                    <Text className='text-white mb-2.5 last:mb-0'>Auction ends in:</Text>

                    <div className='flex items-start gap-2.5 w-full text-center'>
                        <TimerItem timer={{ label: 'Hours', value: timer.hours }} />

                        <Title titleType={EnumTitle.h3} className='-top-0.5 text-4xl'>
                            :
                        </Title>

                        <TimerItem timer={{ label: 'Minutes', value: timer.minutes }} />

                        <Title titleType={EnumTitle.h3} className='-top-0.5 text-4xl'>
                            :
                        </Title>

                        <TimerItem timer={{ label: 'Seconds', value: timer.seconds }} />
                    </div>
                </div>
            ) : (
                <TimerEnd />
            )}
        </div>
    );
};

export default Timer;
