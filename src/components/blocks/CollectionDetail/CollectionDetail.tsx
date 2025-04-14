import { FC } from 'react';
import { ICollection } from '@/src/types/interfaces/Collection';
import { CollectionBanner, CollectionList } from '../../elements';

type Props = {
    collection: ICollection;
};

const CollectionDetail: FC<Props> = async ({ collection }) => {
    const { nfts, ...collectionData } = collection;

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='flex flex-col gap-8 md:gap-12 lg:gap-[60px] w-full'>
                    <CollectionBanner data={collectionData} />
                    <CollectionList nfts={nfts} />
                </div>
            </div>
        </section>
    );
};

export default CollectionDetail;
