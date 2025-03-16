'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import FrozenRoute from './FrozenRoute';

type Props = {
    children?: ReactNode;
};

const Presence: FC<Props> = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={pathname}>
                <FrozenRoute>{children}</FrozenRoute>
            </motion.div>
        </AnimatePresence>
    );
};

export default Presence;
