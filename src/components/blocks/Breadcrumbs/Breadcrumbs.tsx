'use client';
import { FC, useMemo } from 'react';
import Link from 'next/link';
import { HTMLMotionProps, motion } from 'framer-motion';
import { PATHS } from '@/src/variables/paths';
import { convertUrlToString } from '@/src/helpers';
import { Text } from '../../ui';
import { ChevronRight } from 'lucide-react';

type Props = {
    pathname: string;
};

const Breadcrumbs: FC<Props> = ({ pathname }) => {
    const pathNames = pathname
        .split('/')
        .filter((path) => path)
        .map((path, index, arr) => ({
            href: `/${arr.slice(0, index + 1).join('/')}`,
            text: convertUrlToString(path),
        }));

    const breadcrumbs = useMemo(() => [{ href: `${PATHS.HOME}`, text: 'Home' }, ...pathNames], [pathNames]);

    const animation: HTMLMotionProps<'section'> = {
        initial: {
            opacity: 0,
            y: -15,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.1,
                ease: [0.215, 0.61, 0.355, 1],
            },
        },
    };

    return (
        <motion.section
            {...animation}
            className='fixed z-20 top-[70px] sm:top-20 lg:top-[100px] left-0 w-full py-2.5 sm:py-3 border-b border-gray bg-black'
        >
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
        </motion.section>
    );
};

export default Breadcrumbs;
