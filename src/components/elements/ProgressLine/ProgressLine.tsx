'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressLine = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            id='scroll-indicator'
            className='fixed z-40 top-0 left-0 w-full h-1.5 bg-purple'
            style={{ scaleX, originX: 0 }}
        />
    );
};

export default ProgressLine;
