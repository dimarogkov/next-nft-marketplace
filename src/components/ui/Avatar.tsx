import { AnchorHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Link from 'next/link';
import Text from './Text';
import ImageLoader from './ImageLoader';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    src: string;
    name?: string;
    className?: string;
    classNameImage?: string;
}

const Avatar: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, src, name, className = '', classNameImage = '', ...props }, ref) => {
        return (
            <Link
                ref={ref}
                {...props}
                href={href}
                className={`relative group flex items-center gap-2.5 w-fit ${className}`}
            >
                <ImageLoader
                    className={`rounded-full bg-gray transition-all duration-300 outline outline-2 outline-transparent group-hover:outline-purple ${classNameImage}`}
                >
                    <ImageLoader.Image src={src} alt={name || ''} />
                </ImageLoader>

                {name && (
                    <Text className='!w-auto text-white transition-colors duration-300 group-hover:text-white/70'>
                        {name}
                    </Text>
                )}
            </Link>
        );
    }
);

Avatar.displayName = 'Avatar';
export default Avatar;
