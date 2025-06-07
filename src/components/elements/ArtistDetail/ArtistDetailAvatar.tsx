import { FC } from 'react';
import { IImage } from '@/src/types/interfaces/Image';
import { ImageLoader } from '../../ui';

type Props = {
    img: IImage;
};

const ArtistDetailAvatar: FC<Props> = ({ img }) => {
    const { src, alt } = img;

    return (
        <div className='relative size-20 md:size-24 lg:size-28 outline outline-4 outline-black rounded-full'>
            <ImageLoader className='!h-full !pb-0 rounded-full'>
                <ImageLoader.Image src={src} alt={alt} />
            </ImageLoader>
        </div>
    );
};

export default ArtistDetailAvatar;
