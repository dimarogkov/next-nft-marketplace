'use client';
import { FC } from 'react';
import { Session } from 'next-auth';
import { HEADER_LINKS_DATA, PATHS } from '@/src/variables';
import HeaderLink from './HeaderLink';
import { EnumBtn } from '@/src/types/enums';
import { BtnLink } from '../../ui';
import { CircleUser, Wallet } from 'lucide-react';
import cn from 'classnames';

type Props = {
    isOpen: boolean;
    session: Session | null;
};

const HeaderLinks: FC<Props> = ({ isOpen, session }) => {
    return (
        <div
            className={cn(
                'z-20 fixed bottom-0 lg:bottom-auto right-0 lg:right-auto lg:relative w-full sm:w-[450px] lg:w-auto height-full lg:h-full text-center sm:text-left p-4 sm:p-6 lg:p-0 bg-black transition-all duration-300',
                {
                    'opacity-0 lg:opacity-100 invisible lg:visible translate-x-full sm:translate-x-[450px] lg:translate-x-0':
                        !isOpen,
                    'opacity-100 visible translate-x-0': isOpen,
                }
            )}
        >
            <div
                className={cn(
                    'relative flex flex-col lg:flex-row lg:items-center justify-center sm:justify-normal gap-8 sm:gap-6 lg:gap-10 w-full h-full pb-32 md:pb-16 lg:pb-0'
                )}
            >
                {HEADER_LINKS_DATA.map((link) => (
                    <HeaderLink key={link.href} link={link} />
                ))}

                {session ? (
                    <BtnLink
                        href={PATHS.CONNECT_WALLET}
                        icon={Wallet}
                        btnType={EnumBtn.outline}
                        className='!absolute lg:!relative bottom-0 lg:bottom-auto !w-full lg:!w-fit'
                    >
                        Connect Wallet
                    </BtnLink>
                ) : (
                    <BtnLink
                        href={PATHS.SIGN_IN}
                        icon={CircleUser}
                        btnType={EnumBtn.outline}
                        className='!absolute lg:!relative bottom-0 lg:bottom-auto !w-full lg:!w-fit'
                    >
                        Sign In
                    </BtnLink>
                )}
            </div>
        </div>
    );
};

export default HeaderLinks;
