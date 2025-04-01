import { HeroContent } from '../../elements';
import { ImageLoader } from '../../ui';

const Hero = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='grid sm:grid-cols-2 items-center gap-6 sm:gap-3 md:gap-7 container'>
                <HeroContent />

                <div className='relative w-[92%] sm:w-full h-0 pb-[92%] sm:pb-[100%] m-auto'>
                    <ImageLoader.Image src='/hero_img.gif' alt='banner_img' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
