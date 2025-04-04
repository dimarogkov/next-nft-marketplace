import { FC } from 'react';
import Link from 'next/link';
import { PATHS, PROJECT_NAME } from '@/src/variables';
import { EnumTitle } from '@/src/types/enums';
import { Title } from '../../ui';
import { Store } from 'lucide-react';
import cn from 'classnames';

type Props = {
    disableAnimation?: boolean;
    className?: string;
};

const Logo: FC<Props> = ({ disableAnimation = false, className = '' }) => {
    return (
        <Link
            href={PATHS.HOME}
            className={cn(
                `relative group flex items-center h-full gap-3.5 transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'lg:hover:opacity-100': !disableAnimation,
                }
            )}
        >
            <div
                className={cn(
                    'flex items-center justify-center size-10 rounded-full bg-gradient-to-br from-purple to-violet-600 duration-300',
                    {
                        'lg:z-10 lg:origin-left lg:scale-[1.2] lg:will-change-transform lg:transition-transform lg:duration-300 lg:group-hover:scale-100':
                            !disableAnimation,
                    }
                )}
            >
                <Store className='size-6 text-white' />
            </div>

            <Title
                titleType={EnumTitle.h4}
                className={cn('md:!text-[22px]', {
                    'lg:opacity-0 lg:invisible lg:-translate-x-8 lg:transition-all lg:duration-300 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-x-0':
                        !disableAnimation,
                })}
            >
                {PROJECT_NAME}
            </Title>
        </Link>
    );
};

export default Logo;
