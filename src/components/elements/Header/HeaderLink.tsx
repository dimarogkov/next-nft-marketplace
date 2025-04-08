'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ILink } from '@/src/types/interfaces/Link';
import cn from 'classnames';

type Props = {
    link: ILink;
};

const HeaderLink: FC<Props> = ({ link }) => {
    const pathname = usePathname();
    const { href, text } = link;

    return (
        <Link
            key={text}
            href={href}
            className={cn(
                'font-semibold lg:font-medium text-3xl sm:text-2xl lg:text-base sm:uppercase lg:capitalize transition-colors duration-300 hover:text-purple',
                {
                    'text-purple': pathname.startsWith(href.split('?')[0]),
                }
            )}
        >
            {text}
        </Link>
    );
};

export default HeaderLink;
