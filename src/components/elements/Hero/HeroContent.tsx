import { getServerSession } from 'next-auth';
import { HERO_INFO_DATA, PATHS } from '@/src/variables';
import { authConfig } from '@/src/helpers';
import { EnumTabs, EnumText } from '@/src/types/enums';
import HeroInfoItem from './HeroInfoItem';
import { BtnLink, Text, Title } from '../../ui';
import { Rocket } from 'lucide-react';

const HeroContent = async () => {
    const session = await getServerSession(authConfig);

    return (
        <div className='relative order-1 sm:order-none w-full'>
            <div className='w-full mb-7 md:mb-7 last:mb-0'>
                <Title className='mb-4 md:mb-5 last:mb-0'>Discover Digital Art & Collect NFTs</Title>

                <Text textType={EnumText.large} className='mb-6 sm:mb-7 md:mb-7 last:mb-0'>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
                    artists.
                </Text>

                <BtnLink
                    href={session ? `${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}` : PATHS.SIGN_IN}
                    icon={Rocket}
                >
                    Get Started
                </BtnLink>
            </div>

            <div className='flex justify-between w-full'>
                {HERO_INFO_DATA.map((info) => (
                    <HeroInfoItem key={info.text} info={info} />
                ))}
            </div>
        </div>
    );
};

export default HeroContent;
