import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables/paths';
import { EnumTitle } from '@/src/types/enums';

import { Title } from '../../ui';
import { Store } from 'lucide-react';
import cn from 'classnames';

type Props = {
    disableAnimation?: boolean;
};

const Logo: FC<Props> = ({ disableAnimation = false }) => {
    const logoClasses = 'relative group flex items-center h-full gap-4';
    const iconBlockClasses = 'flex items-center justify-center size-10 rounded-full bg-purple';
    const iconClasses = 'size-6 text-black';
    const titleClasses = 'hidden sm:inline-block font-space-mono';

    return (
        <Link href={PATHS.HOME} className={logoClasses}>
            <div
                className={cn(iconBlockClasses, {
                    'lg:z-10 lg:origin-left lg:scale-[1.2] lg:will-change-transform lg:transition-transform lg:duration-300 lg:group-hover:scale-100':
                        !disableAnimation,
                })}
            >
                <Store className={iconClasses} />
            </div>

            <Title
                titleType={EnumTitle.h4}
                className={cn(titleClasses, {
                    'lg:opacity-0 lg:invisible lg:-translate-x-8 lg:transition-all lg:duration-300 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-x-0':
                        !disableAnimation,
                })}
            >
                NFT Marketplace
            </Title>
        </Link>
    );
};

export default Logo;
