'use client';
import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables';
import { convertToSnakeCase } from '@/src/helpers';
import { EnumText } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { FollowCircleBtn, ImageLoader, Text } from '../../ui';
import { useFollow } from '@/src/hooks';
import cn from 'classnames';

type Props = {
    artist: IArtist;
};

const FollowingArtistCard: FC<Props> = ({ artist }) => {
    const { isFollow, isLoading, isFollowBtnExist, toggleFollow } = useFollow(artist);
    const { name, bio, avatar } = artist;

    return (
        <div
            className={cn(
                'relative flex items-center justify-between w-full py-3.5 md:py-4 border-b border-gray transition-opacity duration-300',
                { 'opacity-50 pointer-events-none': isLoading }
            )}
        >
            <div className='flex items-center gap-3 sm:gap-4 lg:gap-5 w-full max-w-[calc(100%-56px)]'>
                <ImageLoader className='!size-[52px] min-w-[52px] sm:!size-14 sm:min-w-14 lg:!size-16 lg:min-w-16 !pb-0 rounded-full'>
                    <ImageLoader.Link href={`/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}>
                        <ImageLoader.Image
                            src={avatar}
                            alt={name}
                            className='will-change-transform transition-all duration-500 hover:scale-110 hover:brightness-75'
                        />
                    </ImageLoader.Link>
                </ImageLoader>

                <div className='w-auto'>
                    <Text textType={EnumText.large} className='!text-lg text-white mb-0.5 last:mb-0'>
                        <Link
                            href={`/${convertToSnakeCase(name)}?${PATHS.PARAMS.PAGE}`}
                            className='transition-colors duration-300 hover:text-purple'
                        >
                            {name}
                        </Link>
                    </Text>

                    <Text className='line-clamp-1'>{bio}</Text>
                </div>
            </div>

            {isFollowBtnExist && <FollowCircleBtn isActive={isFollow} onClick={toggleFollow} />}
        </div>
    );
};

export default FollowingArtistCard;
