'use client';
import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PATHS } from '@/src/variables/paths';
import { convertUrlToString } from '@/src/helpers';
import { EnumTabs } from '@/src/types/enums';
import { Text } from '../../ui';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    className?: string;
};

const Breadcrumbs: FC<Props> = ({ className = '' }) => {
    const pathname = usePathname();
    const hasMarketplace = pathname.split('/').includes(PATHS.MARKETPLACE.slice(1));

    const pathNames = pathname
        .split('/')
        .filter((path) => path)
        .map((path, index, arr) => {
            const baseHref = `/${arr.slice(0, index + 1).join('/')}`;
            const href = hasMarketplace ? `${baseHref}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}` : baseHref;

            return {
                href,
                text: convertUrlToString(path),
            };
        });

    const breadcrumbs = useMemo(() => [{ href: `${PATHS.HOME}`, text: 'Home' }, ...pathNames], [pathNames]);

    return (
        <section
            className={`sticky z-20 top-[70px] sm:top-20 lg:top-[100px] left-0 w-full py-2.5 sm:py-3 border-b border-gray bg-black ${className}`}
        >
            <div className='container'>
                <ul className='flex items-center gap-1 w-full overflow-hidden'>
                    {breadcrumbs.map(({ href, text }, index) => (
                        <li key={text}>
                            {breadcrumbs.length - 1 !== index ? (
                                <Link
                                    href={href}
                                    className='flex items-center gap-1 text-white transition-colors duration-300 hover:text-purple'
                                >
                                    <span
                                        className={cn({
                                            'truncate max-w-[70px] sm:max-w-full': breadcrumbs.length > 3,
                                        })}
                                    >
                                        {text}
                                    </span>

                                    <ChevronRight className='size-5 stroke-1 text-white' />
                                </Link>
                            ) : (
                                <Text
                                    className={cn('text-gray2', {
                                        'truncate max-w-[100px] sm:max-w-full': breadcrumbs.length > 2,
                                        'truncate max-w-[70px] sm:max-w-full': breadcrumbs.length > 3,
                                    })}
                                >
                                    {text}
                                </Text>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Breadcrumbs;
