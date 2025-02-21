import { FC } from 'react';
import cn from 'classnames';

type Props = {
    isOpen: boolean;
    closeMenu: () => void;
};

const HeaderLayer: FC<Props> = ({ isOpen, closeMenu = () => {} }) => {
    const layerClasses = 'fixed lg:hidden bottom-0 left-0 w-full height-full bg-gray/90';
    const layerTransitionClasses = 'transition-all duration-300';

    return (
        <div
            onClick={closeMenu}
            className={cn(`${layerClasses} ${layerTransitionClasses}`, {
                'opacity-0 invisible': !isOpen,
                'opacity-100 visible': isOpen,
            })}
        >
            <span></span>
        </div>
    );
};

export default HeaderLayer;
