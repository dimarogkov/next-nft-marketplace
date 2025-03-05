import { EnumText, EnumTitle } from '@/src/types/enums';
import { Btn, Input, Label, Text, Title } from '../../ui';

const SubscribeContent = () => {
    return (
        <div className='w-full md:w-auto'>
            <div className='w-full mb-4 md:mb-5 last:mb-0'>
                <Title titleType={EnumTitle.h3} className='mb-1 md:mb-2 last:mb-0'>
                    Join Our Weekly Digest
                </Title>

                <Text textType={EnumText.large} className='w-full md:w-[90%]'>
                    Get exclusive promotions & updates straight to your inbox.
                </Text>
            </div>

            <form className='flex flex-wrap sm:flex-nowrap gap-2.5 sm:gap-1.5 w-full'>
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
    );
};

export default SubscribeContent;
