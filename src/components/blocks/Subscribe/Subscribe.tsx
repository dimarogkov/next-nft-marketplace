import { SUBSCRIBE_DATA } from '@/src/variables';
import { SubscribeContent } from '../../elements';
import { ImageLoader } from '../../ui';

const Subscribe = () => {
    const { title, text, img, form } = SUBSCRIBE_DATA;

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='flex flex-wrap md:flex-nowrap items-center gap-5 lg:gap-[30px] w-full rounded-md p-4 sm:p-5 lg:p-[30px] bg-gray'>
                    <ImageLoader className='md:w-[48%] sm:pb-[42%] md:pb-[31%] rounded-md'>
                        <ImageLoader.Image src={img.src} alt={img.alt} className='!object-top' />
                    </ImageLoader>

                    <SubscribeContent content={{ title, text, form }} />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
