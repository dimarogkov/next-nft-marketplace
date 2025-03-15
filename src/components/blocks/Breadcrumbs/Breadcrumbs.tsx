'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables/paths';
import { capitalizeFirstLetter, convertUrlToString } from '@/src/helpers';

import { Text } from '../../ui';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
    const paths = usePathname();

    const pathNames = paths
        .split('/')
        .filter((path) => path)
        .map((path, index, arr) => ({
            href: `/${arr.slice(0, index + 1).join('/')}`,
            text: capitalizeFirstLetter(convertUrlToString(path)),
        }));

    const breadcrumbs = useMemo(() => [{ href: `${PATHS.HOME}`, text: 'Home' }, ...pathNames], [pathNames]);

    return (
        <section className='relative w-full py-2.5 sm:py-3 border-b border-gray'>
            <div className='container'>
                <ul className='flex items-center gap-1 w-full'>
                    {breadcrumbs.map(({ href, text }, index) => (
                        <li key={text}>
                            {breadcrumbs.length - 1 !== index ? (
                                <Link
                                    href={href}
                                    className='flex items-center gap-1 line-clamp-1 text-white transition-colors duration-300 hover:text-purple'
                                >
                                    <span>{text}</span>
                                    <ChevronRight className='size-5 stroke-1 text-white' />
                                </Link>
                            ) : (
                                <Text className='line-clamp-1 text-gray2'>{text}</Text>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Breadcrumbs;
