import Link from 'next/link';
import { HEADER_LINKS, SOCIAL_LINKS } from '@/src/variables';
import { EnumSocial, EnumTitle } from '@/src/types/enums';

import { Logo, SubscribeForm } from '../../elements';
import { SocialLink, Text, Title } from '../../ui';

const Footer = () => {
    return (
        <footer className='relative w-full py-8 lg:py-10 bg-gray'>
            <div className='flex flex-wrap justify-between container'>
                <div className='flex flex-wrap lg:block w-full lg:w-[34%] mb-5 lg:mb-0 last:mb-0'>
                    <Logo disableAnimation className='sm:w-[42%] lg:w-auto !h-auto mb-5 lg:mb-4 last:mb-0' />

                    <div className='w-full sm:w-[58%] lg:w-full'>
                        <Text className='mb-3 sm:mb-4 last:mb-0'>Join our community</Text>

                        <div className='flex gap-1.5'>
                            {SOCIAL_LINKS.map(({ id, href, icon }) => (
                                <SocialLink key={id} href={href} icon={icon} socialType={EnumSocial.dark} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-[42%] lg:w-[20%] pt-1 mb-5 sm:mb-0 last:mb-0'>
                    <Title titleType={EnumTitle.h4} className='font-space-mono mb-1 sm:mb-3 lg:mb-5 last:mb-0'>
                        Explore
                    </Title>

                    <div className='flex sm:flex-col gap-5 sm:gap-3 w-full'>
                        {HEADER_LINKS.map(({ href, text }) => (
                            <Link
                                key={text}
                                href={href}
                                className='text-gray2 transition-colors duration-300 hover:text-white'
                            >
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='w-full sm:w-[58%] lg:w-[46%] pt-1'>
                    <div className='w-full mb-4 last:mb-0'>
                        <Title titleType={EnumTitle.h4} className='font-space-mono mb-1 sm:mb-3 lg:mb-5 last:mb-0'>
                            Join Our Weekly Digest
                        </Title>

                        <Text>Get exclusive promotions & updates straight to your inbox.</Text>
                    </div>

                    <SubscribeForm />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
