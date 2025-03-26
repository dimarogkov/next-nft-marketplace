'use client';
import { FC, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

type Props = {
    children?: ReactNode;
};

const LenisScroll: FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    return (
        <ReactLenis options={{ duration: 1.3 }} root>
            {children}
        </ReactLenis>
    );
};

export default LenisScroll;
