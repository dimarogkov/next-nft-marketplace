import { HERO_INFO_DATA, PATHS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../../ui';
import { Rocket } from 'lucide-react';

const HeroContent = () => {
    return (
        <div className='relative order-1 sm:order-none w-full'>
            <div className='w-full mb-7 md:mb-[30px] last:mb-0'>
                <Title className='mb-4 md:mb-5 last:mb-0'>Discover Digital Art & Collect NFTs</Title>

                <Text textType={EnumText.large} className='mb-6 sm:mb-7 md:mb-[30px] last:mb-0'>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
                    artists.
                </Text>

                <BtnLink href={PATHS.SIGN_UP} icon={Rocket}>
                    Get Started
                </BtnLink>
            </div>

            <div className='flex justify-between w-full'>
                {HERO_INFO_DATA.map(({ value, text }) => (
                    <div key={text} className='w-auto'>
                        <Title titleType={EnumTitle.h4} className='font-space-mono'>
                            {value}
                        </Title>

                        <Text textType={EnumText.large}>{text}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroContent;
