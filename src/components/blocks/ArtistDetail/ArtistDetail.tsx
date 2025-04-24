import { FC } from 'react';
import { getCollections, getNfts } from '@/src/services';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { ArtistDetailBanner, ArtistDetailInfo, ArtistDetailTabs, FollowBtn } from '../../elements';
import { ImageLoader, Text, Title } from '../../ui';

type Props = {
    artist: IArtist;
};

const ArtistDetail: FC<Props> = async ({ artist }) => {
    const nfts = await getNfts();
    const collections = await getCollections();

    const { name, avatar, bio, info } = artist;

    const artistNfts = nfts.filter(({ author }) => author.name === name);
    const artistCollections = collections.filter(({ authors }) => authors.map(({ name }) => name).includes(name));

    const bannerImg = { src: '/artist_banner_img.jpg', alt: 'banner_img' };

    return (
        <section className='relative w-full section-padding-bottom'>
            <ArtistDetailBanner img={bannerImg} />

            <div className='container !-mt-10 md:!-mt-12 lg:!-mt-14 !mb-10 last:!mb-0'>
                <div className='flex flex-col gap-5 lg:gap-7 w-full'>
                    <ImageLoader className='!size-20 md:!size-24 lg:!size-28 !pb-0 outline outline-4 outline-black rounded-full'>
                        <ImageLoader.Image src={avatar} alt={name} />
                    </ImageLoader>

                    <div className='flex flex-wrap justify-between gap-7 sm:gap-0 w-full'>
                        <div className='flex flex-col gap-7 lg:gap-10 w-full sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%]'>
                            <div className='w-full'>
                                <Title titleType={EnumTitle.h3} className='mb-1 md:mb-2 last:mb-0'>
                                    {name}
                                </Title>

                                <Text textType={EnumText.large}>{bio}</Text>
                            </div>

                            <ArtistDetailInfo info={info} />
                        </div>

                        <FollowBtn />
                    </div>
                </div>
            </div>

            <ArtistDetailTabs data={[artistNfts, artistCollections]} />
        </section>
    );
};

export default ArtistDetail;
