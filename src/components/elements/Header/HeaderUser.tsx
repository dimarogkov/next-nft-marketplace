import { FC } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { HEADER_USER_LINKS_DATA, PATHS } from '@/src/variables';
import { AdapterUser } from 'next-auth/adapters';
import { EnumDropdownAlign } from '@/src/types/enums';
import { IArtist } from '@/src/types/interfaces/Artist';
import { Dropdown, ImageLoader, Text } from '../../ui';

import { LogOut } from 'lucide-react';

type Props = {
    user: IArtist & AdapterUser;
    closeMenu: () => void;
};

const HeaderUser: FC<Props> = ({ user, closeMenu = () => {} }) => {
    const { name, email, image, avatar } = user;

    return (
        <Dropdown className='flex items-center h-full'>
            <Dropdown.Trigger onMouseDown={closeMenu}>
                <div className='relative size-11 md:size-12 rounded-full overflow-hidden bg-gray'>
                    <ImageLoader.Image src={image || avatar} alt={name} />
                </div>
            </Dropdown.Trigger>

            <Dropdown.Content align={EnumDropdownAlign.end} className='!p-0'>
                <div className='w-60'>
                    <div className='flex flex-col gap-1 p-3 border-b border-gray'>
                        <Text className='!text-[18px] text-white line-clamp-1'>{name}</Text>
                        <Text className='text-[15px] font-light line-clamp-1'>{email}</Text>
                    </div>

                    <ul className='w-full'>
                        {HEADER_USER_LINKS_DATA.map(({ href, text, icon: Icon }) => (
                            <li key={text} className='w-full border-b border-gray'>
                                <Text className='font-light text-white'>
                                    <Link
                                        href={href}
                                        className='flex items-center gap-2.5 w-full height-btn px-3 transition-opacity duration-300 hover:opacity-65'
                                    >
                                        {Icon && <Icon className='size-5' />}
                                        <span>{text}</span>
                                    </Link>
                                </Text>
                            </li>
                        ))}

                        <li className='w-full'>
                            <Text className='font-light text-white'>
                                <button
                                    type='button'
                                    onClick={() => signOut({ callbackUrl: PATHS.HOME })}
                                    className='flex items-center gap-2.5 w-full height-btn px-3 outline-none transition-opacity duration-300 hover:opacity-65'
                                >
                                    <LogOut className='size-5 text-red' />
                                    <span>Sign Out</span>
                                </button>
                            </Text>
                        </li>
                    </ul>
                </div>
            </Dropdown.Content>
        </Dropdown>
    );
};

export default HeaderUser;
