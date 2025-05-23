import { FC } from 'react';
import { ImageLoader, UploadCircleBtn } from '../../ui';
import { Pencil } from 'lucide-react';

type Props = {
    isUploadImgBtnExist: boolean;
};

const ArtistDetailBanner: FC<Props> = ({ isUploadImgBtnExist }) => {
    const bannerImg = { src: '/artist_banner_img.jpg', alt: 'banner_img' };

    return (
        <div className='relative w-full h-52 sm:h-56 md:h-64 lg:h-80 bg-gray'>
            <ImageLoader className='!absolute h-full !pb-0'>
                <ImageLoader.Image src={bannerImg.src} alt={bannerImg.alt} />
            </ImageLoader>

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-violet-600 to-transparent' />
            {isUploadImgBtnExist && (
                <UploadCircleBtn icon={Pencil} className='!absolute top-3 right-3 sm:right-3.5 md:right-4 lg:right-3' />
            )}
        </div>
    );
};

export default ArtistDetailBanner;
