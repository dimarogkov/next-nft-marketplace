import { FC } from 'react';
import { getServerSession } from 'next-auth';
import { PATHS } from '@/src/variables';
import { getArtists } from '@/src/services';
import { authConfig } from '@/src/helpers';
import { INFT } from '@/src/types/interfaces/NFT';
import { NftDetailContent, NftDetailImg, NftDetailTabs, Timer } from '../../elements';
import { Btn, BtnLink } from '../../ui';

type Props = {
    nft: INFT;
};

const NftDetail: FC<Props> = async ({ nft }) => {
    const session = await getServerSession(authConfig);
    const artists = await getArtists();

    const { id, name, collectionName, publishDate, img, author, ...infoData } = nft;
    const data = { name, collectionName, publishDate, img, author };

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='grid sm:grid-cols-[1fr,2fr] md:grid-cols-[2fr,3fr] gap-5 lg:gap-7 w-full'>
                    <NftDetailImg nft={nft} />

                    <div className='relative flex flex-col gap-5 lg:gap-7 w-full'>
                        <NftDetailContent data={data} />
                        <NftDetailTabs data={infoData} artists={artists} />

                        <Timer hours={6} className='!w-full !max-w-full bg-gray' />

                        {!session ? (
                            <BtnLink href={PATHS.SIGN_IN} className='sm:w-full'>
                                Place a Bid
                            </BtnLink>
                        ) : (
                            <Btn className='sm:w-full'>Place a Bid</Btn>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NftDetail;
