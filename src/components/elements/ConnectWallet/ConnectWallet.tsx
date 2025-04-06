import { WALLET_OPTIONS_DATA } from '@/src/variables/data/walletOptions';
import { EnumText, EnumTitle } from '@/src/types/enums';
import ConnectWalletOption from './ConnectWalletOption';
import { Text, Title } from '../../ui';

const ConnectWallet = () => {
    return (
        <div className='relative w-full'>
            <div className='w-full mb-5 sm:mb-10 last:mb-0'>
                <Title titleType={EnumTitle.h2} className='mb-2 last:mb-0'>
                    Connect wallet
                </Title>

                <Text textType={EnumText.large}>
                    Choose a wallet you want to connect. There are several wallet providers.
                </Text>
            </div>

            <div className='flex flex-col gap-4 sm:gap-5 w-full lg:w-[75%]'>
                {WALLET_OPTIONS_DATA.map((option) => (
                    <ConnectWalletOption key={option.name} option={option} />
                ))}
            </div>
        </div>
    );
};

export default ConnectWallet;
