import { FC } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { IImage } from '@/src/types/interfaces/Image';
import { ImageLoader } from '../../ui';

type Props = {
    images: IImage[];
    y: MotionValue<number>;
    className?: string;
};

const GalleryColumn: FC<Props> = ({ images, y, className = '' }) => {
    return (
        <motion.div className={`relative flex flex-col gap-4 w-full ${className}`} style={{ y }}>
            {images.map(({ src, alt }) => (
                <ImageLoader key={alt} className='pb-[145%] rounded-lg'>
                    <ImageLoader.Image src={src} alt={alt} />
                </ImageLoader>
            ))}
        </motion.div>
    );
};

export default GalleryColumn;
