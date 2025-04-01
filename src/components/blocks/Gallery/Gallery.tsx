'use client';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useDimension } from '@/src/hooks';
import { GALLERY_IMGS_DATA } from '@/src/variables';
import { GalleryColumn } from '../../elements';

const Gallery = () => {
    const gallery = useRef(null);
    const { height } = useDimension();

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, height * -0.65]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.25]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -0.3]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

    return (
        <section className='relative hidden md:block w-full section-padding'>
            <div ref={gallery} className='relative container h-[100vh] !p-0 rounded-lg overflow-hidden bg-gray'>
                <div className='grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full'>
                    <GalleryColumn images={GALLERY_IMGS_DATA.slice(0, 4)} y={y} />
                    <GalleryColumn images={GALLERY_IMGS_DATA.slice(4, 8)} y={y2} className='relative -top-[100%]' />
                    <GalleryColumn images={GALLERY_IMGS_DATA.slice(8, 12)} y={y3} className='relative -top-[15%]' />
                    <GalleryColumn
                        images={GALLERY_IMGS_DATA.slice(12)}
                        y={y4}
                        className='relative -top-[60%] hidden lg:flex'
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
