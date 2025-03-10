import { NTFS_DATA } from '@/src/variables';
import { NewEventContent } from '../../elements';
import { ImageLoader } from '../../ui';

const NewEvent = () => {
    const { img, ...content } = NTFS_DATA[1];

    return (
        <section className='relative w-full md:h-[600px] lg:h-[700px] xl:h-[800px] bg-gray'>
            <ImageLoader className='!absolute h-full !pb-0'>
                <ImageLoader.Image src={img.src} blurDataURL={img.src} alt={img.alt} placeholder='blur' />
            </ImageLoader>

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple to-transparent' />

            <div className='relative flex items-end container h-full py-10 lg:py-[60px] pt-56 md:pt-0'>
                <NewEventContent content={content} />
            </div>
        </section>
    );
};

export default NewEvent;
