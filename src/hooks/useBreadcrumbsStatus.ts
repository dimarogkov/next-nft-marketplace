import { PATHS } from '../variables';

const useBreadcrumbsStatus = (pathname: string) => {
    const isExit =
        pathname !== '/' &&
        Object.values(PATHS)
            .map((path) => path.split('?')[0])
            .includes(pathname);

    return { isBreadcrumbsExist: isExit };
};

export default useBreadcrumbsStatus;
