import { useState } from 'react';

const useImageLoader = () => {
    const [isOptimized, setIsOptimized] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsOptimized(false);
        setHasError(true);
    };

    return {
        isOptimized,
        isLoading,
        hasError,
        handleLoad,
        handleError,
    };
};

export default useImageLoader;
