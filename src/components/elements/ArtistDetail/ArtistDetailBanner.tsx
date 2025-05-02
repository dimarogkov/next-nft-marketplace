import { ImageLoader } from '../../ui';

const ArtistDetailBanner = () => {
    const bannerImg = { src: '/artist_banner_img.jpg', alt: 'banner_img' };

    return (
        <div className='relative w-full h-52 sm:h-56 md:h-64 lg:h-80 bg-gray'>
            <ImageLoader className='!absolute h-full !pb-0'>
                <ImageLoader.Image src={bannerImg.src} alt={bannerImg.alt} />
            </ImageLoader>

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-violet-600 to-transparent' />
        </div>
    );
};

export default ArtistDetailBanner;
