import Image from 'next/image';
import { HeroContent } from '../../elements';
import { getBlurDataURL } from '@/src/helpers';

const Hero = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='grid sm:grid-cols-2 items-center gap-6 sm:gap-3 md:gap-[30px] container'>
                <HeroContent />

                <div className='relative w-[92%] sm:w-full h-0 pb-[92%] sm:pb-[100%] m-auto'>
                    <Image
                        src='/hero_img.gif'
                        alt='banner_img'
                        placeholder='blur'
                        blurDataURL={getBlurDataURL()}
                        className='img'
                        sizes='100%'
                        fill
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
