'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import { useSession } from 'next-auth/react';
import { EnumText } from '@/src/types/enums';
import { IWalletOption } from '@/src/types/interfaces/WalletOption';
import { IProfile } from '@/src/types/interfaces/Profile';
import { ImageLoader, Text } from '../../ui';
import { Check } from 'lucide-react';
import cn from 'classnames';

type Props = {
    option: IWalletOption;
    className?: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const ConnectWalletOption: FC<Props> = ({ option, className = '', setIsLoading = () => {} }) => {
    const { data: session, update } = useSession();
    const { name, icon } = option;

    const currentUser = session?.user as IProfile;
    const wallet = currentUser?.wallet;
    const isActive = name === wallet?.name;

    const toggleWallet = async () => {
        setIsLoading(true);
        await update({ ...currentUser, wallet: option });
        setIsLoading(false);
    };

    return (
        <div
            onClick={toggleWallet}
            className={cn(
                `relative flex items-center gap-4 md:gap-5 w-full rounded-lg px-5 py-2.5 cursor-pointer border transition-all duration-300 active:scale-95 ${className}`,
                {
                    'border-violet-600 bg-violet-600 pointer-events-none': isActive,
                    'border-purple bg-gray sm:hover:bg-purple': !isActive,
                }
            )}
        >
            <div className='relative size-8 md:size-10 min-w-8 md:min-w-10'>
                <ImageLoader.Image src={icon.src} alt={icon.alt} />
            </div>

            <Text textType={EnumText.large} className='text-white'>
                {name}
            </Text>

            <span
                className={cn(
                    'absolute right-3 md:-right-2.5 flex items-center justify-center size-6 sm:size-7 rounded-full md:outline md:outline-2 md:outline-violet-600 bg-black transition-all duration-300',
                    {
                        'opacity-0 invisible': !isActive,
                        'opacity-100 visible': isActive,
                    }
                )}
            >
                <Check className='size-4 sm:size-5 text-purple' />
            </span>
        </div>
    );
};

export default ConnectWalletOption;
