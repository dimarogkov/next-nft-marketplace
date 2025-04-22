import { FC } from 'react';
import { Metadata } from 'next';
import { convertUrlToString } from '@/src/helpers';
import { getCollectionByName } from '@/src/services';
import { Breadcrumbs, CallToAction, CollectionDetail, Subscribe, TrendingCollection } from '@/src/components/blocks';

type Props = {
    params: {
        collectionName: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { collectionName } = await params;
    const name = convertUrlToString(collectionName);

    return {
        title: name,
    };
};

const CollectionPage: FC<Props> = async ({ params }) => {
    const { collectionName } = await params;
    const collection = await getCollectionByName(convertUrlToString(collectionName));

    return (
        <>
            <Breadcrumbs />
            <CollectionDetail collection={collection} />
            <TrendingCollection />
            <CallToAction />
            <Subscribe />
        </>
    );
};

export default CollectionPage;
