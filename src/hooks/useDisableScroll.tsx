'use client';
import { useEffect } from 'react';

const useDisableScroll = (isScrollDisabled: boolean) => {
    useEffect(() => {
        isScrollDisabled ? document.body.classList.add('lock') : document.body.classList.remove('lock');

        return () => document.body.classList.remove('lock');
    }, [isScrollDisabled]);
};

export default useDisableScroll;
