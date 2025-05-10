import { FC } from 'react';
import { Metadata } from 'next';
import { convertUrlToString } from '@/src/helpers';
import { getArtistByQuery } from '@/src/services';
import { ArtistDetail, CallToAction, Subscribe } from '@/src/components/blocks';

type Props = {
    params: {
        artistName: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { artistName } = await params;
    const name = convertUrlToString(artistName);

    return {
        title: name,
    };
};

const ArtistPage: FC<Props> = async ({ params }) => {
    const { artistName } = await params;
    const artist = await getArtistByQuery('name', convertUrlToString(artistName));

    return (
        <>
            <ArtistDetail artist={artist} />
            <CallToAction />
            <Subscribe />
        </>
    );
};

export default ArtistPage;
