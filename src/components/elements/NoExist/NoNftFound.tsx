import { PATHS } from '@/src/variables';
import { EnumTabs, EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../../ui';
import { CirclePlus } from 'lucide-react';

const NoNftFound = () => {
    return (
        <div className='relative w-full h-full sm:max-w-[75%] lg:max-w-[50%] text-center m-auto'>
            <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                No NFTs Found
            </Title>

            <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                It looks like there are no NFTs available. Why not create one?
            </Text>

            <BtnLink href={`${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`} icon={CirclePlus}>
                Create NFT
            </BtnLink>
        </div>
    );
};

export default NoNftFound;
