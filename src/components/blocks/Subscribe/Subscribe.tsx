import Image from 'next/image';
import { SUBSCRIBE_DATA } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Btn, Input, Label, Text, Title } from '../../ui';

const Subscribe = () => {
    const { title, text, img, form } = SUBSCRIBE_DATA;

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='flex flex-wrap md:flex-nowrap items-center gap-5 lg:gap-[30px] w-full rounded-md p-4 sm:p-5 lg:p-[30px] bg-gray'>
                    <div className='relative w-full md:w-[48%] h-0 pb-[100%] sm:pb-[42%] md:pb-[31%] rounded-md overflow-hidden bg-black'>
                        <Image
                            src={img.src}
                            blurDataURL={img.src}
                            alt={img.alt}
                            placeholder='blur'
                            className='img !object-top'
                            sizes='100%'
                            fill
                        />
                    </div>

                    <div className='w-full md:w-auto'>
                        <div className='w-full mb-4 md:mb-5 last:mb-0'>
                            <Title titleType={EnumTitle.h3} className='mb-1 md:mb-2 last:mb-0'>
                                {title}
                            </Title>

                            <Text textType={EnumText.large} className='w-full md:w-[90%]'>
                                {text}
                            </Text>
                        </div>

                        <form className='flex flex-wrap sm:flex-nowrap gap-2.5 sm:gap-1.5 w-full'>
                            <Label className='w-full'>
                                <Input
                                    name={form.name}
                                    placeholder={form.placeholder}
                                    className='border-gray2 hover:border-white'
                                />
                            </Label>

                            <Btn type='submit'>{form.submitText}</Btn>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
