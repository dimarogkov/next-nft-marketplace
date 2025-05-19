'use client';
import { useState } from 'react';
import { WALLET_OPTIONS_DATA } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import ConnectWalletOption from './ConnectWalletOption';
import { Text, Title } from '../../ui';
import cn from 'classnames';

const ConnectWallet = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='relative w-full order-1 md:order-none'>
            <div className='w-full mb-5 md:mb-10 last:mb-0'>
                <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                    Connect wallet
                </Title>

                <Text textType={EnumText.large}>
                    Choose a wallet you want to connect. There are several wallet providers.
                </Text>
            </div>

            <div className='flex flex-col gap-3 md:gap-5 w-full lg:w-[75%]'>
                {WALLET_OPTIONS_DATA.map((option) => (
                    <ConnectWalletOption
                        key={option.name}
                        option={option}
                        setIsLoading={setIsLoading}
                        className={cn({ 'opacity-50 pointer-events-none': isLoading })}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConnectWallet;
