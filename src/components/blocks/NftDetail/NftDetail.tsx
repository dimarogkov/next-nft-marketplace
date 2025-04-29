import { FC } from 'react';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/src/helpers';
import { INFT } from '@/src/types/interfaces/NFT';
import { NftDetailContent } from '../../elements';
import { ImageLoader, LikeBtn } from '../../ui';

type Props = {
    nft: INFT;
};

const NftDetail: FC<Props> = async ({ nft }) => {
    const session = await getServerSession(authConfig);
    const { img } = nft;

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='grid sm:grid-cols-[1fr,2fr] md:grid-cols-[2fr,3fr] gap-5 lg:gap-7 w-full'>
                    <ImageLoader className='sm:sticky sm:top-[150px] lg:top-[170px] w-full !pb-[120%] rounded-lg shadow-md'>
                        <ImageLoader.Image src={img.src} alt={img.alt} />
                        <LikeBtn className='!absolute top-1.5 right-1.5' />
                    </ImageLoader>

                    <NftDetailContent data={nft} session={session} />
                </div>
            </div>
        </section>
    );
};

export default NftDetail;
