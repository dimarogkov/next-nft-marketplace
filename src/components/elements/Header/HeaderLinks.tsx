'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HEADER_LINKS, PATHS } from '@/src/variables';

import { BtnLink } from '../../ui';
import { User } from 'lucide-react';
import cn from 'classnames';

type Props = {
    isOpen: boolean;
};

const HeaderLinks: FC<Props> = ({ isOpen }) => {
    const pathname = usePathname();

    return (
        <div
            className={cn(
                'z-10 fixed bottom-0 lg:bottom-auto right-0 lg:right-auto lg:relative w-full sm:w-[450px] lg:w-auto height-full lg:h-full text-center sm:text-left p-4 sm:p-6 lg:p-0 bg-black transition-all duration-300',
                {
                    'opacity-0 lg:opacity-100 invisible lg:visible translate-x-full sm:translate-x-[450px] lg:translate-x-0':
                        !isOpen,
                    'opacity-100 visible translate-x-0': isOpen,
                }
            )}
        >
            <div
                className={cn(
                    'relative flex flex-col lg:flex-row lg:items-center justify-center sm:justify-normal gap-8 sm:gap-6 lg:gap-10 w-full h-full pb-24 sm:pb-0'
                )}
            >
                {HEADER_LINKS.map(({ href, text }) => (
                    <Link
                        key={text}
                        href={href}
                        className={cn(
                            'font-semibold sm:font-medium text-3xl sm:text-base sm:uppercase lg:capitalize transition-colors duration-300 hover:text-purple',
                            {
                                'text-purple': pathname.startsWith(href),
                            }
                        )}
                    >
                        {text}
                    </Link>
                ))}

                <BtnLink href={PATHS.SIGN_UP} icon={User} className='absolute sm:relative bottom-0 sm:bottom-auto'>
                    Sign Up
                </BtnLink>
            </div>
        </div>
    );
};

export default HeaderLinks;
