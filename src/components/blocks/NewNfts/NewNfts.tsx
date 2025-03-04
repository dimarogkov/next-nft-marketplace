import { NTFS_DATA, PATHS } from '@/src/variables';
import { EnumBtn, EnumText, EnumTitle } from '@/src/types/enums';

import { NftCard } from '../../elements';
import { BtnLink, Text, Title } from '../../ui';
import { Eye } from 'lucide-react';

const NewNfts = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='relative w-full pb-[68px] sm:pb-0'>
                    <div className='flex flex-wrap items-center justify-between w-full mb-5 lg:mb-[30px] last:mb-0'>
                        <div className='w-full sm:w-[60%] md:w-[50%]'>
                            <Title titleType={EnumTitle.h3} className='mb-1 lg:mb-2 last:mb-0'>
                                Discover More
                            </Title>

                            <Text textType={EnumText.large}>Explore new trending NFTs</Text>
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

                    <div className='grid md:grid-cols-3 gap-5 lg:gap-[30px] w-full'>
                        {NTFS_DATA.slice(0, 3).map((nft) => (
                            <NftCard key={nft.name} nft={nft} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewNfts;
