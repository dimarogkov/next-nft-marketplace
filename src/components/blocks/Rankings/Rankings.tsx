import { Suspense } from 'react';
import { getArtists } from '@/src/services';
import { RankingsList } from '../../elements';

const Rankings = async () => {
    const artists = await getArtists();

    const sortedArtists = artists
        .sort((a, b) => b.info.totalSales - a.info.totalSales)
        .map((artist, index) => ({ index: index + 1, ...artist }));

    return (
        <Suspense fallback={null}>
            <section className='relative w-full section-padding-bottom'>
                <div className='container'>
                    <RankingsList data={sortedArtists} />
                </div>
            </section>
        </Suspense>
    );
};

export default Rankings;
