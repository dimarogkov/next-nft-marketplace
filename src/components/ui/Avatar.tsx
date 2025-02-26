import { AnchorHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from './Text';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    src: string;
    username?: string;
    className?: string;
}

const Avatar: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, src, username, className = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                className={`relative group flex items-center gap-2.5 w-fit ${className}`}
            >
                <div className='relative size-6 rounded-full overflow-hidden bg-gray transition-all duration-300 outline outline-2 outline-transparent group-hover:outline-purple'>
                    <Image
                        src={src}
                        blurDataURL={src}
                        alt={username || ''}
                        placeholder='blur'
                        className='img'
                        sizes='100%'
                        fill
                    />
                </div>

                {username && (
                    <Text className='!w-auto text-white transition-colors duration-300 group-hover:text-white/70'>
                        {username}
                    </Text>
                )}
            </Link>
        );
    }
);

Avatar.displayName = 'Avatar';
export default Avatar;
