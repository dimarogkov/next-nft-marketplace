import { FC } from 'react';
import { EnumTitle } from '@/src/types/enums';
import { ITimerItem } from '@/src/types/interfaces/Timer';
import { Text, Title } from '../../ui';

type Props = {
    timer: ITimerItem;
};

const TimerItem: FC<Props> = ({ timer }) => {
    const { label, value } = timer;

    return (
        <div className='w-full'>
            <Title titleType={EnumTitle.h3} className='font-space-mono text-4xl mb-1.5 last:mb-0'>
                {value < 10 ? `0${value}` : value}
            </Title>

            <Text className='font-space-mono text-sm text-white'>{label}</Text>
        </div>
    );
};

export default TimerItem;
