import { PATHS } from '@/src/variables';
import { getCollections } from '@/src/services';
import { EnumBtn, EnumTabs, EnumText, EnumTitle } from '@/src/types/enums';
import { CollectionCard } from '../../elements';
import { BtnLink, Text, Title } from '../../ui';
import { Eye } from 'lucide-react';
import cn from 'classnames';

const TrendingCollection = async () => {
    const collections = await getCollections();

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='relative w-full pb-[68px] sm:pb-0'>
                    <div className='flex flex-wrap items-center justify-between w-full mb-5 lg:mb-7 last:mb-0'>
                        <div className='w-full sm:w-[65%] md:w-[60%]'>
                            <Title titleType={EnumTitle.h3} className='mb-1.5 lg:mb-2 last:mb-0'>
                                Trending Collection
                            </Title>

                            <Text textType={EnumText.large}>Checkout our weekly updated trending collection.</Text>
                        </div>

                        <BtnLink
                            href={`${PATHS.MARKETPLACE}?tab=${EnumTabs.Collections}&${PATHS.PARAMS.PAGE}`}
                            btnType={EnumBtn.outline}
                            icon={Eye}
                            className='!absolute sm:!relative bottom-0 sm:bottom-auto'
                        >
                            See All
                        </BtnLink>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full'>
                        {collections.slice(0, 3).map((collection, index) => (
                            <CollectionCard
                                key={collection.name}
                                collection={collection}
                                className={cn({ 'hidden lg:block': index > 1 })}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingCollection;
