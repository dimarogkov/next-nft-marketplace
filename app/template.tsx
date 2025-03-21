'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

type Props = {
    children?: ReactNode;
};

const Template: FC<Props> = ({ children }) => {
    const pathname = usePathname();

    const pageAnimation: HTMLMotionProps<'div'> = {
        initial: {
            opacity: 0,
            y: 40,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.15,
                ease: [0.215, 0.61, 0.355, 1],
            },
        },
    };

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={pathname} {...pageAnimation}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Template;
