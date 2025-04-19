import { FC } from 'react';
import { Metadata } from 'next';
import { convertUrlToString } from '@/src/helpers';
import { getNftByName } from '@/src/services';
import { CallToAction, NewNfts, NftDetail, Subscribe } from '@/src/components/blocks';

type Props = {
    params: {
        nftName: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { nftName } = await params;
    const name = convertUrlToString(nftName);

    return {
        title: name,
    };
};

const NftPage: FC<Props> = async ({ params }) => {
    const { nftName } = await params;
    const nft = await getNftByName(convertUrlToString(nftName));

    return (
        <>
            <NftDetail nft={nft} />
            <NewNfts />
            <CallToAction />
            <Subscribe />
        </>
    );
};

export default NftPage;
