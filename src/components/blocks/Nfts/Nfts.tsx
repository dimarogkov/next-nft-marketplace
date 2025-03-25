import { getNfts } from '@/src/services';
import { NftsList, NftsTags, Search } from '../../elements';

const Nfts = async () => {
    const nfts = await getNfts();

    const tags = [...new Set(nfts.map(({ collectionName }) => collectionName))];

    return (
        <section className='relative w-full section-padding-bottom'>
            <div className='container'>
                <div className='w-full mb-10 last:mb-0'>
                    <Search className='mb-4 last:mb-0' />
                    <NftsTags tags={['All', ...tags]} />
                </div>

                <NftsList nfts={nfts} />
            </div>
        </section>
    );
};

export default Nfts;
