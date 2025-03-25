'use client';
import { FC } from 'react';
import { useQueryState } from 'nuqs';
import { Tag } from '../../ui';
import cn from 'classnames';

type Props = {
    tags: string[];
};

const NftsTags: FC<Props> = ({ tags }) => {
    const [collectionNameQuery, setCollectionNameQuery] = useQueryState('collectionName', { defaultValue: '' });

    return (
        <div className='flex flex-wrap gap-2 w-full'>
            {tags.map((tag) => (
                <button
                    key={tag}
                    type='button'
                    onClick={() => (tag === 'All' ? setCollectionNameQuery('') : setCollectionNameQuery(tag))}
                    className={cn('outline-none', { 'pointer-events-none': tag === collectionNameQuery })}
                >
                    <Tag isActive={collectionNameQuery ? tag === collectionNameQuery : tag === 'All'}>{tag}</Tag>
                </button>
            ))}
        </div>
    );
};

export default NftsTags;
