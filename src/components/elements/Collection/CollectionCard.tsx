import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumColorStyle, EnumTitle } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import CollectionCardNfts from './CollectionCardNfts';
import { Title } from '../../ui';

type Props = {
    collection: ICollection;
    cardType?: EnumColorStyle;
    className?: string;
};

const CollectionCard: FC<Props> = ({ collection, cardType = EnumColorStyle.gray, className = '' }) => {
    const { name, nfts } = collection;

    const nftsImages = nfts.map(({ img }) => img);

    const cardClasses = {
        [EnumColorStyle.gray as string]: 'bg-gray',
        [EnumColorStyle.dark as string]: 'bg-black',
    };

    return (
        <div
            className={`relative w-full p-4 lg:p-0 rounded-lg lg:bg-transparent ${cardClasses[cardType]} ${className}`}
        >
            <CollectionCardNfts nfts={nftsImages} />

            <div className='flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start sm:justify-between gap-3 w-full'>
                <Title titleType={EnumTitle.h5}>
                    <Link
                        href={`${PATHS.MARKETPLACE}/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}
                        className='text-white transition-colors duration-300 hover:text-purple'
                    >
                        {name}
                    </Link>
                </Title>
            </div>
        </div>
    );
};

export default CollectionCard;
