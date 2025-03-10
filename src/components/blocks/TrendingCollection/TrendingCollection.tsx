import { COLLECTIONS_DATA, PATHS } from '@/src/variables';
import { EnumBtn, EnumText, EnumTitle } from '@/src/types/enums';

import { CollectionCard } from '../../elements';
import { BtnLink, Text, Title } from '../../ui';
import { Eye } from 'lucide-react';
import cn from 'classnames';

const TrendingCollection = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='relative w-full pb-[68px] sm:pb-0'>
                    <div className='flex flex-wrap items-center justify-between w-full mb-5 lg:mb-[30px] last:mb-0'>
                        <div className='w-full sm:w-[65%] md:w-[60%]'>
                            <Title titleType={EnumTitle.h3} className='mb-1 lg:mb-2 last:mb-0'>
                                Trending Collection
                            </Title>

                            <Text textType={EnumText.large}>Checkout our weekly updated trending collection.</Text>
                        </div>

                        <BtnLink
                            href={PATHS.MARKETPLACE}
                            btnType={EnumBtn.outline}
                            icon={Eye}
                            className='absolute sm:relative bottom-0 sm:bottom-auto'
                        >
                            See All
                        </BtnLink>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full'>
                        {COLLECTIONS_DATA.slice(0, 3).map((collection, index) => (
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
