import { FC } from 'react';
import cn from 'classnames';

type Props = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const HeaderBurger: FC<Props> = ({ isOpen, toggleMenu = () => {} }) => {
    return (
        <button
            type='button'
            onClick={toggleMenu}
            className={cn('burger-btn relative flex lg:hidden items-center w-7 sm:w-8 h-[18px] sm:h-5', {
                active: isOpen,
            })}
        >
            <span
                className={cn('w-full h-0.5 bg-white transition-all duration-300', {
                    'opacity-0 invisible translate-x-1': isOpen,
                })}
            />
        </button>
    );
};

export default HeaderBurger;
