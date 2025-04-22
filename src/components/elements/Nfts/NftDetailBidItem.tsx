import { FC } from 'react';
import { convertToSnakeCase } from '@/src/helpers';
import { IArtist } from '@/src/types/interfaces/Artist';
import { ImageLoader, SimpleLink, Text } from '../../ui';

type Props = {
    artist: IArtist;
    className?: string;
};

const NftDetailBidItem: FC<Props> = ({ artist, className = '' }) => {
    const { name, avatar } = artist;

    return (
        <div
            className={`flex items-center gap-2.5 px-4 md:px-5 py-4 border-b border-black last:border-none ${className}`}
        >
            <ImageLoader className='!size-12 min-w-12 !pb-0 rounded-full'>
                <ImageLoader.Link href={`/${convertToSnakeCase(name)}`}>
                    <ImageLoader.Image
                        src={avatar}
                        alt={name}
                        className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                    />
                </ImageLoader.Link>
            </ImageLoader>

            <div className='w-full'>
                <Text className='truncate text-white'>
                    1.35 wETH by <SimpleLink href={`/${convertToSnakeCase(name)}`}>{name}</SimpleLink>
                </Text>

                <Text>1 hours ago</Text>
            </div>
        </div>
    );
};

export default NftDetailBidItem;
