import { FC } from 'react';
import { EnumBtn, EnumTitle } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { convertToSnakeCase } from '@/src/helpers';

import { Avatar, BtnLink, Title } from '../../ui';
import { Eye } from 'lucide-react';

type Props = {
    content: {
        name: string;
        author: IAuthor;
    };
};

const NewEventContent: FC<Props> = ({ content }) => {
    const { name, author } = content;

    return (
        <div className='relative flex flex-col gap-6 md:gap-5 w-full md:pr-[296px]'>
            <Avatar
                href={convertToSnakeCase(author.userName)}
                src={author.avatar}
                username={author.userName}
                className='rounded-md py-2 px-4 bg-black'
            />

            <Title titleType={EnumTitle.h2}>Magic Mushrooms</Title>

            {/* for test */}
            <div className='md:absolute md:right-0 md:bottom-0 md:w-[296px] h-[150px] rounded-md bg-black/40' />

            <BtnLink href={convertToSnakeCase(name)} icon={Eye} btnType={EnumBtn.light}>
                See NFT
            </BtnLink>
        </div>
    );
};

export default NewEventContent;
