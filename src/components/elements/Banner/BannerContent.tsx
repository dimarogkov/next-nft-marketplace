import { BANNER_DATA } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../../ui';

const BannerContent = () => {
    const { title, text, link, info } = BANNER_DATA;

    return (
        <div className='relative order-1 sm:order-none w-full'>
            <div className='w-full mb-7 md:mb-[30px] last:mb-0'>
                <Title className='mb-4 md:mb-5 last:mb-0'>{title}</Title>

                <Text textType={EnumText.large} className='mb-6 sm:mb-7 md:mb-[30px] last:mb-0'>
                    {text}
                </Text>

                <BtnLink href={link.href} icon={link.icon}>
                    {link.text}
                </BtnLink>
            </div>

            <div className='flex justify-between w-full'>
                {info.map(({ value, text }) => (
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

export default BannerContent;
