import Image from 'next/image';
import { BannerContent } from '../../elements';

const Banner = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='grid sm:grid-cols-2 items-center gap-6 sm:gap-3 md:gap-[30px] container'>
                <BannerContent />

                <div className='relative w-[92%] sm:w-full h-0 pb-[92%] sm:pb-[100%] m-auto'>
                    <Image
                        src='/banner_img.gif'
                        blurDataURL='/banner_img.gif'
                        alt='banner_img'
                        placeholder='blur'
                        className='img'
                        sizes='100%'
                        fill
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
