import { usePathname } from 'next/navigation';

const useBreadcrumbsStatus = (): { isBreadcrumbsExist: boolean } => {
    const pathname = usePathname();
    const isExit = pathname !== '/';

    return { isBreadcrumbsExist: isExit };
};

export default useBreadcrumbsStatus;
