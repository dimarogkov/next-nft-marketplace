'use client';
import { useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

const useDisableScroll = (isScrollDisabled: boolean) => {
    const lenis = useLenis();

    useEffect(() => {
        isScrollDisabled ? lenis?.stop() : lenis?.start();

        return () => lenis?.start();
    }, [isScrollDisabled, lenis]);
};

export default useDisableScroll;
