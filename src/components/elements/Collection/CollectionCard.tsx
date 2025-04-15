import { FC } from 'react';
import { EnumColorStyle } from '@/src/types/enums';
import { ICollection } from '@/src/types/interfaces/Collection';
import CollectionCardNfts from './CollectionCardNfts';
import CollectionCardContent from './CollectionCardContent';

type Props = {
    collection: ICollection;
    cardType?: EnumColorStyle;
    className?: string;
};

const CollectionCard: FC<Props> = ({ collection, cardType = EnumColorStyle.gray, className = '' }) => {
    const { nfts, ...collectionData } = collection;

    const nftsImages = nfts.map(({ img }) => img);

    const cardClasses = {
        [EnumColorStyle.gray as string]: 'bg-gray',
        [EnumColorStyle.dark as string]: 'bg-black',
    };

    const outlineClasses = {
        [EnumColorStyle.gray as string]: 'outline-gray',
        [EnumColorStyle.dark as string]: 'outline-black',
    };

    return (
        <div className={`relative flex flex-col w-full rounded-lg ${cardClasses[cardType]} ${className}`}>
            <CollectionCardNfts nfts={nftsImages} className={outlineClasses[cardType]} />
            <CollectionCardContent data={collectionData} />
        </div>
    );
};

export default CollectionCard;
