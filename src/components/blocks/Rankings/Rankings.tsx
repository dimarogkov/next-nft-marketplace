import { getArtists } from '@/src/services';
import { RankingCard } from '../../elements';
import { Text } from '../../ui';

const Rankings = async () => {
    const artists = await getArtists();

    const sortedArtists = artists.sort((a, b) => b.info.totalSales - a.info.totalSales);

    return (
        <section className='relative w-full section-padding-bottom'>
            <div className='container'>
                <div className='grid grid-cols-[14%,86%] sm:grid-cols-[8%,52%,20%,20%] lg:grid-cols-[5%,44%,17%,17%,17%] w-full py-3 px-5 rounded-lg border border-gray mb-4 sm:mb-5 last:mb-0'>
                    <Text>#</Text>
                    <Text>Artist</Text>
                    <Text className='!hidden sm:!block'>Change</Text>
                    <Text className='!hidden lg:!block'>NFTs Sold</Text>
                    <Text className='!hidden sm:!block'>Volume</Text>
                </div>

                <div className='flex flex-col gap-4 sm:gap-5 w-full'>
                    {sortedArtists.map((artist, index) => (
                        <RankingCard key={artist.userName} artist={{ index: index + 1, ...artist }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rankings;
