'use client';
import { signOut } from 'next-auth/react';
import { PATHS } from '@/src/variables';
import { EnumDropdownAlign } from '@/src/types/enums';
import { Btn, Dropdown, Text } from '../../ui';
import { Ellipsis, LogOut } from 'lucide-react';

const ProfileDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <Btn icon={Ellipsis} />
            </Dropdown.Trigger>

            <Dropdown.Content align={EnumDropdownAlign.end} className='!p-0'>
                <ul className='w-60'>
                    {/* {HEADER_USER_LINKS_DATA.map(({ href, text, icon: Icon }) => (
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
                    ))} */}

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
            </Dropdown.Content>
        </Dropdown>
    );
};

export default ProfileDropdown;
