import { FC } from 'react';
import { IImage } from '@/src/types/interfaces/Image';
import { ImageLoader } from '../../ui';

type Props = {
    banner: IImage;
};

const ArtistDetailBanner: FC<Props> = ({ banner }) => {
    const { src, alt } = banner;

    return (
        <div className='relative w-full h-52 sm:h-56 md:h-64 lg:h-80 bg-gray'>
            <ImageLoader className='!absolute h-full !pb-0'>
                <ImageLoader.Image src={src} alt={alt} />
            </ImageLoader>

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-violet-600 to-transparent' />
        </div>
    );
};

export default ArtistDetailBanner;
