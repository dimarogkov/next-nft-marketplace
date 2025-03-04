import { EnumTitle } from '@/src/types/enums';
import { Text, Title } from '../../ui';

const TimerEnd = () => {
    return (
        <div className='relative w-full'>
            <Title titleType={EnumTitle.h4} className='mb-1.5 last:mb-0'>
                Auction Closed
            </Title>

            <Text>The auction has officially ended. Winners will be announced soon!</Text>
        </div>
    );
};

export default TimerEnd;
