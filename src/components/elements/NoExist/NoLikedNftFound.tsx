import { PATHS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../../ui';
import { Store } from 'lucide-react';

const NoLikedNftFound = () => {
    return (
        <div className='relative w-full h-full sm:max-w-[75%] lg:max-w-[50%] text-center m-auto'>
            <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                No NFTs Found
            </Title>

            <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                You don’t have any liked NFTs. Consider adding some to your favorites!
            </Text>

            <BtnLink href={PATHS.MARKETPLACE} icon={Store}>
                Go to Marketplace
            </BtnLink>
        </div>
    );
};

export default NoLikedNftFound;
