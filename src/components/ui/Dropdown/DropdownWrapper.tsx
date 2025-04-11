'use client';
import {
    Children,
    cloneElement,
    HTMLAttributes,
    FC,
    forwardRef,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { usePathname } from 'next/navigation';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

const DropdownWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen = false, className = '', ...props }, ref) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);
        const pathname = usePathname();

        useEffect(() => {
            setIsDropdownOpen(false);
        }, [pathname]);

        useEffect(() => {
            setIsDropdownOpen(isOpen);
        }, [isOpen]);

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);

            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, []);

        return (
            <div ref={ref || dropdownRef} {...props} className={`relative z-20 ${className}`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen: isDropdownOpen,
                            setIsOpen: setIsDropdownOpen,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

DropdownWrapper.displayName = 'DropdownWrapper';
export default DropdownWrapper;
