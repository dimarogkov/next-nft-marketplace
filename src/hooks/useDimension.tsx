'use client';
import { useEffect, useState } from 'react';

const useDimension = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', resize);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return { ...dimension };
};

export default useDimension;
