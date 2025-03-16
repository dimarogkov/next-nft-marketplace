'use client';
import { FC, ReactNode, Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

type Props = {
    children?: ReactNode;
};

const Lenis: FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, searchParams, lenis]);

    return (
        <Suspense fallback={null}>
            <ReactLenis options={{ duration: 1.5 }} autoRaf root>
                {children}
            </ReactLenis>
        </Suspense>
    );
};

export default Lenis;
