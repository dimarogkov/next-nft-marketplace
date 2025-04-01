import { FC } from 'react';
import { EnumTitle } from '@/src/types/enums';
import { IHowItWorksItem } from '@/src/types/interfaces/HowItWorksItem';
import { ImageLoader, Text, Title } from '../../ui';

type Props = {
    item: IHowItWorksItem;
};

const HowItWorksCard: FC<Props> = ({ item }) => {
    const { title, text, img } = item;

    return (
        <div className='relative flex flex-row md:flex-col items-center gap-5 w-full p-4 sm:p-5 lg:p-7 lg:pt-2.5 rounded-lg bg-gray'>
            <div className='relative hidden sm:block w-[22%] md:w-[90%] h-0 pb-[22%] md:pb-[90%]'>
                <ImageLoader.Image src={img.src} alt={img.alt} />
            </div>

            <div className='w-full sm:w-[calc(78%-20px)] md:w-full md:text-center'>
                <Title titleType={EnumTitle.h4} className='mb-2 last:mb-0'>
                    {title}
                </Title>

                <Text>{text}</Text>
            </div>
        </div>
    );
};

export default HowItWorksCard;
