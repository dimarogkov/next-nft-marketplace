import { NEW_EVENT_DATA } from '@/src/variables';
import { NewEventContent } from '../../elements';
import { ImageLoader } from '../../ui';

const NewEvent = () => {
    const { img, ...content } = NEW_EVENT_DATA;

    return (
        <section className='relative w-full md:h-[600px] lg:h-[700px] xl:h-[800px] bg-gray'>
            <ImageLoader className='!absolute h-full !pb-0'>
                <ImageLoader.Image src={img.src} alt={img.alt} />
            </ImageLoader>

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-violet-600 via-sky-600/80 to-teal-500/60' />

            <div className='relative flex items-end container h-full py-8 sm:py-10 lg:py-[60px] pt-56 md:pt-0'>
                <NewEventContent content={content} />
            </div>
        </section>
    );
};

export default NewEvent;
