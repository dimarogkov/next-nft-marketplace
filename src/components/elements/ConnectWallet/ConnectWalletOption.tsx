import { FC } from 'react';
import { EnumText } from '@/src/types/enums';
import { IWalletOption } from '@/src/types/interfaces/WalletOption';
import { ImageLoader, Text } from '../../ui';

type Props = {
    option: IWalletOption;
};

const ConnectWalletOption: FC<Props> = ({ option }) => {
    const { name, icon } = option;

    return (
        <div className='relative flex items-center gap-4 md:gap-5 w-full rounded-lg px-5 py-2.5 cursor-pointer border border-purple bg-gray transition-all duration-300 hover:bg-purple active:scale-95'>
            <div className='relative size-8 md:size-10 min-w-8 md:min-w-10'>
                <ImageLoader.Image src={icon.src} alt={icon.alt} />
            </div>

            <Text textType={EnumText.large} className='text-white'>
                {name}
            </Text>
        </div>
    );
};

export default ConnectWalletOption;
