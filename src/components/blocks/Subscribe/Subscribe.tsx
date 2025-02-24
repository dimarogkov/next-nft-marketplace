import Image from 'next/image';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Btn, Input, Label, Text, Title } from '../../ui';

const Subscribe = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='flex flex-wrap md:flex-nowrap items-center gap-4 sm:gap-5 lg:gap-10 w-full rounded-md p-4 md:p-5 lg:p-10 bg-gray'>
                <div className='relative w-full md:w-[48%] h-0 pb-[100%] sm:pb-[42%] md:pb-[31%] rounded-md overflow-hidden bg-black'>
                    <Image
                        src='/subscribe_img.jpg'
                        blurDataURL='/subscribe_img.jpg'
                        alt='subscribe_img'
                        placeholder='blur'
                        className='img !object-top'
                        sizes='100%'
                        fill
                    />
                </div>

                <div className='w-full md:w-auto'>
                    <div className='w-full mb-4 md:mb-5 last:mb-0'>
                        <Title titleType={EnumTitle.h3} className='mb-1 md:mb-2 last:mb-0'>
                            Join Our Weekly Digest
                        </Title>

                        <Text textType={EnumText.large}>
                            Get exclusive promotions & updates straight to your inbox.
                        </Text>
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
        </section>
    );
};

export default Subscribe;
