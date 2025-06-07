import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '@/src/components/ui';

type Props = {
    content: {
        collectionName: string;
        price: number;
        highestBid: number;
    };
};

const NewEventInfo: FC<Props> = ({ content }) => {
    const { collectionName, price, highestBid } = content;

    const contentArr = [
        { value: price, text: 'Price' },
        { value: highestBid, text: 'Highest Bid' },
    ];

    return (
        <div className='relative grid sm:grid-cols-3 gap-4 sm:gap-5 w-full'>
            <BtnLink
                href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}`}
                className='sm:!w-full !h-[92px] sm:!h-full font-semibold !text-xl'
            >
                Collection
            </BtnLink>

            {contentArr.map(({ value, text }) => (
                <div
                    key={text}
                    className='flex flex-col items-center justify-center w-full text-center rounded-lg p-4 md:p-0 border border-gray'
                >
                    <div className='w-auto'>
                        <Title titleType={EnumTitle.h3} className='mb-0.5 last:mb-0'>
                            {value}
                        </Title>

                        <Text>{text}</Text>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewEventInfo;
