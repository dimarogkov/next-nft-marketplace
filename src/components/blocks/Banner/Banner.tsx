import { FC, ReactNode } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Text, Title } from '../../ui';

type Props = {
    title: string;
    text?: string;
    children?: ReactNode;
};

const Banner: FC<Props> = ({ title, text, children }) => {
    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='w-full mb-5 md:mb-[30px] last:mb-0'>
                    <Title titleType={EnumTitle.h2} className='mb-3 last:mb-0'>
                        {title}
                    </Title>

                    {text && <Text textType={EnumText.large}>{text}</Text>}
                </div>

                <div className='w-full'>{children}</div>
            </div>
        </section>
    );
};

export default Banner;
