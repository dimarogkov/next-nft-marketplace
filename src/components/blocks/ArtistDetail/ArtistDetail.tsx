import { FC, Suspense } from 'react';
import { USER_DATA } from '@/src/variables';
import { getCollections, getNfts } from '@/src/services';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { IProfile } from '@/src/types/interfaces/Profile';
import {
    ArtistDetailAvatar,
    ArtistDetailBanner,
    ArtistDetailInfo,
    Follow,
    NftsTabs,
    ProfileDropdown,
} from '../../elements';
import { Text, Title } from '../../ui';

type Props = {
    artist: IArtist | IProfile;
    isProfile?: boolean;
};

const ArtistDetail: FC<Props> = async ({ artist, isProfile = false }) => {
    const nfts = await getNfts();
    const collections = await getCollections();

    const { name, avatar, banner, bio, info } = artist;
    const isTestAccount = name === USER_DATA.name;
    const isUploadImgBtnExist = isProfile && !isTestAccount;

    const artistNfts = nfts.filter(({ author }) => author.name === name);
    const artistCollections = collections.filter(({ authors }) => authors.some((author) => author.name === name));

    return (
        <section className='relative w-full section-padding-bottom'>
            <ArtistDetailBanner banner={banner} isUploadImgBtnExist={isUploadImgBtnExist} />

            <div className='container !-mt-10 md:!-mt-12 lg:!-mt-14 !mb-16 last:!mb-0'>
                <div className='flex flex-col gap-5 lg:gap-7 w-full'>
                    <ArtistDetailAvatar img={{ src: avatar, alt: name }} isUploadImgBtnExist={isUploadImgBtnExist} />

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

                        {isProfile ? <ProfileDropdown /> : <Follow artist={artist} />}
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
