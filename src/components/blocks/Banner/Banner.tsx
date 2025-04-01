import { FC } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Text, Title } from '../../ui';

type Props = {
    title: string;
    text?: string;
    className?: string;
};

const Banner: FC<Props> = ({ title, text, className = '' }) => {
    return (
        <section className={`relative w-full section-padding ${className}`}>
            <div className='container'>
                <Title titleType={EnumTitle.h2} className='mb-2.5 sm:mb-3.5 last:mb-0'>
                    {title}
                </Title>

                {text && <Text textType={EnumText.large}>{text}</Text>}
            </div>
        </section>
    );
};

export default Banner;
