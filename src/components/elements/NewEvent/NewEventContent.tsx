import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumBtn, EnumTabs, EnumText, EnumTitle } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { Avatar, BtnLink, Text, Title } from '../../ui';
import { Eye } from 'lucide-react';

type Props = {
    content: {
        name: string;
        collectionName: string;
        description: string;
        author: IAuthor;
    };
};

const NewEventContent: FC<Props> = ({ content }) => {
    const { name, collectionName, description, author } = content;

    return (
        <div className='relative flex flex-col justify-between gap-4 sm:gap-5 w-full rounded-lg p-4 lg:p-5 border border-gray'>
            <Avatar
                href={`/${convertToSnakeCase(author.name)}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`}
                src={author.avatar}
                name={author.name}
                className='rounded-lg py-2 px-4 bg-gray'
                classNameImage='!size-6 !pb-0'
            />

            <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                <div className='w-full md:w-[90%]'>
                    <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                        {name}
                    </Title>

                    <Text textType={EnumText.large} className='sm:line-clamp-2'>
                        {description}
                    </Text>
                </div>

                <BtnLink
                    href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}/${convertToSnakeCase(name)}`}
                    icon={Eye}
                    btnType={EnumBtn.light}
                >
                    See NFT
                </BtnLink>
            </div>
        </div>
    );
};

export default NewEventContent;
