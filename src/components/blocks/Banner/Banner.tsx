import Image from 'next/image';
import { BANNER_DATA } from '@/src/variables';
import { BannerContent } from '../../elements';

const Banner = () => {
    const { img } = BANNER_DATA;

    return (
        <section className='relative w-full section-padding'>
            <div className='grid sm:grid-cols-2 items-center gap-6 sm:gap-3 md:gap-[30px] w-full'>
                <BannerContent />

                <div className='relative w-[92%] sm:w-full h-0 pb-[92%] sm:pb-[100%] m-auto'>
                    <Image
                        src={img.src}
                        blurDataURL={img.src}
                        alt={img.alt}
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
