import { FC } from 'react';
import Image from 'next/image';
import { IImage } from '@/src/types/interfaces/Image';

type Props = {
    img: IImage;
};

const NewEventImg: FC<Props> = ({ img }) => {
    const { src, alt } = img;

    return (
        <div className='absolute top-0 left-0 w-full h-full'>
            <Image src={src} blurDataURL={src} alt={alt} placeholder='blur' className='img' sizes='100%' fill />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple to-transparent' />
        </div>
    );
};

export default NewEventImg;
