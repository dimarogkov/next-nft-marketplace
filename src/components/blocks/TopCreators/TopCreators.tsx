import { PATHS } from '@/src/variables';
import { getArtists } from '@/src/services';
import { EnumBtn, EnumText, EnumTitle } from '@/src/types/enums';
import { TopCreatorsCard } from '../../elements';
import { BtnLink, Text, Title } from '../../ui';
import { Rocket } from 'lucide-react';

const TopCreators = async () => {
    const artists = await getArtists();

    const sortedArtists = artists.sort((a, b) => b.info.totalSales - a.info.totalSales).slice(0, 12);

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='relative w-full pb-[68px] sm:pb-0'>
                    <div className='flex flex-wrap items-center justify-between w-full mb-5 lg:mb-7 last:mb-0'>
                        <div className='w-full sm:w-[65%] md:w-[60%]'>
                            <Title titleType={EnumTitle.h3} className='mb-1.5 lg:mb-2 last:mb-0'>
                                Top Creators
                            </Title>

                            <Text textType={EnumText.large}>Checkout Top Rated Creators on the NFT Marketplace.</Text>
                        </div>

                        <BtnLink
                            href={PATHS.RANKINGS}
                            btnType={EnumBtn.outline}
                            icon={Rocket}
                            className='!absolute sm:!relative bottom-0 sm:bottom-auto'
                        >
                            View Rankings
                        </BtnLink>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-7 w-full'>
                        {sortedArtists.map((artist, index) => (
                            <TopCreatorsCard key={artist.userName} artist={{ index: index + 1, ...artist }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCreators;
