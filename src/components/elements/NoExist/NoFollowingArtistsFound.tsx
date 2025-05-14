import { PATHS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../../ui';
import { UserPlus } from 'lucide-react';

const NoFollowingArtistsFound = () => {
    return (
        <div className='relative w-full h-full sm:max-w-[75%] lg:max-w-[50%] text-center m-auto'>
            <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                No Artists You Follow
            </Title>

            <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                You are currently not following any artists. Start exploring and follow your favorite creators to stay
                updated!
            </Text>

            <BtnLink href={`${PATHS.RANKINGS}?${PATHS.PARAMS.PAGE}`} icon={UserPlus}>
                Discover Artists
            </BtnLink>
        </div>
    );
};

export default NoFollowingArtistsFound;
