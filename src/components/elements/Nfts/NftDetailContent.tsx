import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { IImage } from '@/src/types/interfaces/Image';
import { IAuthor } from '@/src/types/interfaces/Author';
import { Avatar, Text, Title } from '../../ui';

type Props = {
    data: {
        name: string;
        collectionName: string;
        publishDate: string;
        img: IImage;
        author: IAuthor;
    };
};

const NftDetailContent: FC<Props> = async ({ data }) => {
    const { name, collectionName, publishDate, img, author } = data;

    return (
        <>
            <div className='w-full'>
                <Text>{publishDate}</Text>
                <Title titleType={EnumTitle.h2}>{name}</Title>
            </div>

            <div className='flex flex-wrap gap-4 w-full'>
                <div className='w-fit'>
                    <Text className='mb-2.5 last:mb-0'>Collection</Text>

                    <Avatar
                        href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(collectionName)}?${PATHS.PARAMS.PAGE}`}
                        src={img.src}
                        name={collectionName}
                        className='px-4 py-2 shrink-0 rounded-lg bg-gray'
                        classNameImage='!size-6 !pb-0'
                    />
                </div>

                <div className='w-fit'>
                    <Text className='mb-2.5 last:mb-0'>Created By</Text>

                    <Avatar
                        href={`/${convertToSnakeCase(author.name)}?${PATHS.PARAMS.PAGE}`}
                        src={author.avatar}
                        name={author.name}
                        className='px-4 py-2 shrink-0 rounded-lg bg-gray'
                        classNameImage='!size-6 !pb-0'
                    />
                </div>
            </div>
        </>
    );
};

export default NftDetailContent;
