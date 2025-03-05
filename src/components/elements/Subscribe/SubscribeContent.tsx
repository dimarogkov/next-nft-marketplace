import { FC } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { ISubscribeForm } from '@/src/types/interfaces/SubscribeData';
import { Btn, Input, Label, Text, Title } from '../../ui';

type Props = {
    content: {
        title: string;
        text: string;
        form: ISubscribeForm;
    };
};

const SubscribeContent: FC<Props> = ({ content }) => {
    const { title, text, form } = content;

    return (
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
    );
};

export default SubscribeContent;
