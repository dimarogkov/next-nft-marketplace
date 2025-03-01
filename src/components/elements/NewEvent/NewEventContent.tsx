import { FC } from 'react';
import { EnumBtn, EnumTitle } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';
import { convertToSnakeCase } from '@/src/helpers';

import { Timer } from '../Timer';
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
        <div className='relative flex flex-col gap-5 w-full md:pr-[298px]'>
            <Avatar
                href={convertToSnakeCase(author.userName)}
                src={author.avatar}
                username={author.userName}
                className='rounded-md py-2 px-4 bg-black'
            />

            <Title titleType={EnumTitle.h2}>Magic Mushrooms</Title>
            <Timer hours={6} className='md:absolute md:right-0 md:bottom-0 bg-black/40' />

            <BtnLink href={convertToSnakeCase(name)} icon={Eye} btnType={EnumBtn.light}>
                See NFT
            </BtnLink>
        </div>
    );
};

export default NewEventContent;
