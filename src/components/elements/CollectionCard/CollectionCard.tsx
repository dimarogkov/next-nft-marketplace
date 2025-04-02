import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
// import { convertToSnakeCase } from '@/src/helpers';
import { EnumColorStyle, EnumTitle } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import CollectionCardNfts from './CollectionCardNfts';
import { Avatar, Title } from '../../ui';

type Props = {
    collection: ICollection;
    cardType?: EnumColorStyle;
    className?: string;
};

const CollectionCard: FC<Props> = ({ collection, cardType = EnumColorStyle.gray, className = '' }) => {
    const { name, author, nfts } = collection;

    const cardClasses = {
        [EnumColorStyle.gray as string]: 'bg-gray',
        [EnumColorStyle.dark as string]: 'bg-black',
    };

    return (
        <div
            className={`relative w-full p-4 lg:p-0 rounded-lg lg:bg-transparent ${cardClasses[cardType]} ${className}`}
        >
            <CollectionCardNfts nfts={nfts} />

            <div className='flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start sm:justify-between gap-3 w-full'>
                <Title titleType={EnumTitle.h5}>
                    <Link
                        href={PATHS.MARKETPLACE}
                        className='text-white transition-colors duration-300 hover:text-purple'
                    >
                        {name}
                    </Link>
                </Title>

                {/* convertToSnakeCase(author.userName) */}
                <Avatar href={PATHS.HOME} src={author.avatar} userName={author.userName} />
            </div>
        </div>
    );
};

export default CollectionCard;
