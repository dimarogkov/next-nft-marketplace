import { Suspense } from 'react';
import { getCollections, getNfts } from '@/src/services';
import { NftsSearch, NftsTabs } from '../../elements';

const Nfts = async () => {
    const nfts = await getNfts();
    const collections = await getCollections();

    return (
        <section className='relative w-full section-padding-bottom'>
            <div className='container section-padding-bottom'>
                <NftsSearch />
            </div>

            <Suspense fallback={null}>
                <NftsTabs data={[nfts, collections]} />
            </Suspense>
        </section>
    );
};

export default Nfts;
