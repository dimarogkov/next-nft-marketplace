import { FC } from 'react';
import { IImage } from '@/src/types/interfaces/Image';
import { ImageLoader, UploadCircleBtn } from '../../ui';
import { Camera } from 'lucide-react';

type Props = {
    img: IImage;
    isUploadImgBtnExist: boolean;
};

const ArtistDetailAvatar: FC<Props> = ({ img, isUploadImgBtnExist }) => {
    const { src, alt } = img;

    return (
        <div className='relative size-20 md:size-24 lg:size-28 outline outline-4 outline-black rounded-full'>
            <ImageLoader className='!h-full !pb-0 rounded-full'>
                <ImageLoader.Image src={src} alt={alt} />
            </ImageLoader>

            {isUploadImgBtnExist && (
                <UploadCircleBtn icon={Camera} className='!absolute bottom-0 -right-2 md:-right-0.5 lg:right-0.5' />
            )}
        </div>
    );
};

export default ArtistDetailAvatar;
