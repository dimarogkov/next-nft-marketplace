import Link from 'next/link';
import { HEADER_LINKS, SOCIAL_LINKS } from '@/src/variables';
import { EnumTitle } from '@/src/types/enums';

import { Logo } from '../../elements';
import { Btn, Input, Label, SocialLink, Text, Title } from '../../ui';

const Footer = () => {
    return (
        <footer className='relative w-full py-8 lg:py-10 bg-gray'>
            <div className='flex flex-wrap justify-between w-full max-w-[1064px] px-4 md:px-5 m-auto'>
                <div className='flex flex-wrap lg:block w-full lg:w-[34%] mb-5 lg:mb-0 last:mb-0'>
                    <Logo disableAnimation className='sm:w-[42%] lg:w-auto h-auto mb-5 lg:mb-4 last:mb-0' />

                    <div className='w-full sm:w-[58%] lg:w-full'>
                        <Text className='mb-2 sm:mb-3 last:mb-0'>Join our community</Text>

                        <div className='flex gap-1.5'>
                            {SOCIAL_LINKS.map(({ id, href, icon }) => (
                                <SocialLink key={id} href={href} icon={icon} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-[42%] lg:w-[20%] pt-1 mb-5 sm:mb-0 last:mb-0'>
                    <Title titleType={EnumTitle.h4} className='font-space-mono mb-1 sm:mb-3 lg:mb-5 last:mb-0'>
                        Explore
                    </Title>

                    <div className='flex sm:flex-col gap-5 sm:gap-2 lg:gap-2.5 w-full'>
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
                    <div className='w-full mb-3 last:mb-0'>
                        <Title titleType={EnumTitle.h4} className='font-space-mono mb-1 sm:mb-3 lg:mb-5 last:mb-0'>
                            Join Our Weekly Digest
                        </Title>

                        <Text>Get exclusive promotions & updates straight to your inbox.</Text>
                    </div>

                    <form className='flex flex-wrap sm:flex-nowrap gap-2 sm:gap-1.5 w-full'>
                        <Label className='w-full'>
                            <Input
                                name='email'
                                placeholder='Enter your email here'
                                className='border-gray2 hover:border-white'
                            />
                        </Label>

                        <Btn type='submit'>Subscribe</Btn>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
