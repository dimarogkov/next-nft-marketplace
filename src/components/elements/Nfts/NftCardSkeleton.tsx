import { FC } from 'react';
import { Skeleton } from '../../ui';

type Props = {
    className?: string;
};

const NftCardSkeleton: FC<Props> = ({ className = '' }) => {
    return (
        <div className={`relative w-full rounded-lg overflow-hidden bg-gray ${className}`}>
            <div className='relative w-full h-0 pb-[100%]'>
                <Skeleton />
            </div>

            <div className='relative flex flex-col justify-between w-full p-4 sm:p-5'>
                <div className='flex flex-col gap-3 w-full mb-6 dm:mb-[30px] last:mb-0'>
                    <div className='relative w-4/5 h-[26px] rounded-lg overflow-hidden'>
                        <Skeleton />
                    </div>

                    <div className='relative w-2/4 h-6 rounded-lg overflow-hidden'>
                        <Skeleton />
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='relative w-2/4 h-5 rounded-lg overflow-hidden'>
                                <Skeleton />
                            </div>

                            <div className='relative w-3/4 h-6 rounded-lg overflow-hidden'>
                                <Skeleton />
                            </div>
                        </div>

                        <div className='flex flex-col items-end gap-1 w-full'>
                            <div className='relative w-2/4 h-5 rounded-lg overflow-hidden'>
                                <Skeleton />
                            </div>

                            <div className='relative w-3/4 h-6 rounded-lg overflow-hidden'>
                                <Skeleton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftCardSkeleton;
