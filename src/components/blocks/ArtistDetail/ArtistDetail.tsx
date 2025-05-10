import { FC, Suspense } from 'react';
import { USER_DATA } from '@/src/variables';
import { getCollections, getNfts } from '@/src/services';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { IProfile } from '@/src/types/interfaces/Profile';
import { ArtistDetailBanner, ArtistDetailInfo, FollowBtn, NftsTabs, ProfileDropdown } from '../../elements';
import { ImageLoader, Text, Title } from '../../ui';
import { Camera } from 'lucide-react';

type Props = {
    artist: IArtist | IProfile;
    isProfile?: boolean;
};

const ArtistDetail: FC<Props> = async ({ artist, isProfile = false }) => {
    const nfts = await getNfts();
    const collections = await getCollections();

    const { name, avatar, bio, info } = artist;
    const isTestAccount = name === USER_DATA.name;

    const artistNfts = nfts.filter(({ author }) => author.name === name);
    const artistCollections = collections.filter(({ authors }) => authors.some((author) => author.name === name));

    return (
        <section className='relative w-full section-padding-bottom'>
            <ArtistDetailBanner />

            <div className='container !-mt-10 md:!-mt-12 lg:!-mt-14 !mb-10 last:!mb-0'>
                <div className='flex flex-col gap-5 lg:gap-7 w-full'>
                    <div className='relative size-20 md:size-24 lg:size-28 outline outline-4 outline-black rounded-full'>
                        <ImageLoader className='!h-full !pb-0 rounded-full'>
                            <ImageLoader.Image src={avatar} alt={name} />
                        </ImageLoader>

                        {isProfile && !isTestAccount && (
                            <button
                                type='button'
                                className='absolute bottom-0 right-0.5 flex items-center justify-center size-8 rounded-full bg-gray outline-none transition-colors duration-300 hover:bg-gray/80'
                            >
                                <Camera className='size-4 text-white' />
                            </button>
                        )}
                    </div>

                    <div className='flex flex-wrap items-start justify-between gap-7 sm:gap-0 w-full'>
                        <div className='flex flex-col gap-7 lg:gap-10 w-full sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%]'>
                            <div className='w-full'>
                                <Title titleType={EnumTitle.h3} className='mb-1 md:mb-2 last:mb-0'>
                                    {name}
                                </Title>

                                <Text textType={EnumText.large}>{bio}</Text>
                            </div>

                            <ArtistDetailInfo info={info} />
                        </div>

                        {isProfile ? <ProfileDropdown /> : <FollowBtn />}
                    </div>
                </div>
            </div>

            <Suspense fallback={null}>
                <NftsTabs data={[artistNfts, artistCollections]} isProfile={isProfile} />
            </Suspense>
        </section>
    );
};

export default ArtistDetail;
