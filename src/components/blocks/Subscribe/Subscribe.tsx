import { SubscribeContent } from '../../elements';
import { ImageLoader } from '../../ui';

const Subscribe = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='flex flex-wrap md:flex-nowrap items-center w-full rounded-lg bg-gray'>
                    <ImageLoader className='md:w-[48%] pb-[55%] sm:pb-[42%] md:pb-[31%] rounded-lg'>
                        <ImageLoader.Image
                            src='/subscribe_img.jpg'
                            alt='join_our_weekly_digest'
                            className='!object-top'
                        />
                    </ImageLoader>

                    <SubscribeContent />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
