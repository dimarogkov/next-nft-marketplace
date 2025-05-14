'use client';
import { FC } from 'react';
import { PATHS } from '@/src/variables';
import { useSession } from 'next-auth/react';
import { useFollow } from '@/src/hooks';
import { EnumBtn } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { BtnLink, FollowBtn } from '../../ui';
import { UserPlus } from 'lucide-react';
import cn from 'classnames';

type Props = {
    artist: IArtist;
};

const Follow: FC<Props> = ({ artist }) => {
    const { data: session } = useSession();
    const { isFollow, isLoading, isFollowBtnExist, toggleFollow } = useFollow(artist);

    return (
        <>
            {!session ? (
                <BtnLink href={PATHS.SIGN_IN} icon={UserPlus} btnType={EnumBtn.outline}>
                    Follow
                </BtnLink>
            ) : (
                <>
                    {isFollowBtnExist && (
                        <FollowBtn
                            isActive={isFollow}
                            onClick={toggleFollow}
                            className={cn('transition-opacity duration-300', {
                                'opacity-50 pointer-events-none': isLoading,
                            })}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default Follow;
