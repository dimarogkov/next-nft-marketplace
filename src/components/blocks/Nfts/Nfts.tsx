import { Suspense } from 'react';
import { getCollections, getNfts } from '@/src/services';
import { NftsSearch, NftsTabs } from '../../elements';

const Nfts = async () => {
    const nfts = await getNfts();
    const collections = await getCollections();

    return (
        <Suspense fallback={null}>
            <section className='relative w-full section-padding-bottom'>
                <div className='container section-padding-bottom'>
                    <NftsSearch />
                </div>

                <NftsTabs data={[nfts, collections]} />
            </section>
        </Suspense>
    );
};

export default Nfts;
