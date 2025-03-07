import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumTitle } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';

import CollectionCardNfts from './CollectionCardNfts';
import { Avatar, Title } from '../../ui';

type Props = {
    collection: ICollection;
    className?: string;
};

const CollectionCard: FC<Props> = ({ collection, className = '' }) => {
    const { name, author, nfts } = collection;

    return (
        <div className={`relative w-full ${className}`}>
            <CollectionCardNfts nfts={nfts} />

            <div className='w-full'>
                <Title titleType={EnumTitle.h5} className='mb-3 last:mb-0'>
                    <Link
                        href={PATHS.MARKETPLACE}
                        className='text-white transition-colors duration-300 hover:text-purple'
                    >
                        {name}
                    </Link>
                </Title>

                <Avatar href={convertToSnakeCase(author.userName)} src={author.avatar} userName={author.userName} />
            </div>
        </div>
    );
};

export default CollectionCard;
