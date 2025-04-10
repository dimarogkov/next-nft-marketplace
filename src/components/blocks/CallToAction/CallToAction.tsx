import { getServerSession } from 'next-auth';
import { PATHS } from '@/src/variables';
import { authConfig } from '@/src/helpers';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../../ui';
import { Rocket, Store } from 'lucide-react';

const CallToAction = async () => {
    const session = await getServerSession(authConfig);

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full'>
                    <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <div className='flex items-center justify-center size-12 sm:size-14 min-w-12 sm:min-w-14 rounded-lg bg-gradient-to-br from-purple to-violet-600'>
                            <Store className='size-7 sm:size-8 text-white' />
                        </div>

                        <div className='w-auto text-center lg:text-left'>
                            <Title titleType={EnumTitle.h3} className='mb-3 sm:mb-2 last:mb-0'>
                                Start Your NFT Journey Right Now
                            </Title>

                            <Text textType={EnumText.large}>
                                Explore, create, and trade unique digital assets on our platform.
                            </Text>
                        </div>
                    </div>

                    <BtnLink href={session ? PATHS.HOME : PATHS.SIGN_IN} icon={Rocket}>
                        Get Started
                    </BtnLink>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
