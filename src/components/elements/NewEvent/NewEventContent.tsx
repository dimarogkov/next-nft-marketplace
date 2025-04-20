import { FC } from 'react';
import { PATHS } from '@/src/variables';
// import { convertToSnakeCase } from '@/src/helpers';
import { EnumBtn, EnumText, EnumTitle } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { Timer } from '../Timer';
import { Avatar, BtnLink, ImageLoader, Text, Title } from '../../ui';
import { Eye } from 'lucide-react';
import { convertToSnakeCase } from '@/src/helpers';
import { INFT } from '@/src/types/interfaces/NFT';

type Props = {
    content: Omit<INFT, 'img'>;
};

const NewEventContent: FC<Props> = ({ content }) => {
    const { name, collectionName, description, author } = content;

    return (
        <div className='relative flex flex-col gap-4 sm:gap-5 w-full md:pr-[298px]'>
            {/* // convertToSnakeCase(author.name) */}
            <Avatar
                href={PATHS.HOME}
                src={author.avatar}
                name={author.name}
                className='rounded-lg py-2 px-4 bg-black'
                classNameImage='!size-6 !pb-0'
            />

            <Timer hours={6} className='md:absolute md:right-0 md:bottom-0 bg-black/40' />

            <div className='w-full md:w-[90%]'>
                <Title titleType={EnumTitle.h2} className='sm:mb-2 md:mb-1 last:mb-0'>
                    {name}
                </Title>

                <Text textType={EnumText.large} className='hidden sm:block md:line-clamp-2 text-white'>
                    {description}
                </Text>
            </div>

            {/* convertToSnakeCase(name) */}
            <BtnLink
                href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}/${convertToSnakeCase(name)}`}
                icon={Eye}
                btnType={EnumBtn.light}
            >
                See NFT
            </BtnLink>
        </div>
    );
};

export default NewEventContent;
