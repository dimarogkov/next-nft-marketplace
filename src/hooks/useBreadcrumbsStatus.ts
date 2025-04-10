import { usePathname } from 'next/navigation';
import { PATHS } from '../variables';

const useBreadcrumbsStatus = (): { isBreadcrumbsExist: boolean } => {
    const pathname = usePathname();

    const isExit =
        pathname !== '/' &&
        Object.values(PATHS)
            .map((path) => path.split('?')[0])
            .includes(pathname);

    return { isBreadcrumbsExist: isExit };
};

export default useBreadcrumbsStatus;
