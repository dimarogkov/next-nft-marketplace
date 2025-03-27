'use client';
import { Dispatch, FC, forwardRef, LiHTMLAttributes, RefAttributes, SetStateAction, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnumText } from '@/src/types/enums';
import Text from '../Text';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
    tabIndex?: number;
    activeIndex?: number;
    isActive?: boolean;
    classNameText?: string;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsTab: FC<Props> = forwardRef<HTMLLIElement, Props>(
    (
        {
            tabIndex = 0,
            activeIndex,
            isActive = false,
            className = '',
            classNameText = '',
            setActiveIndex = () => {},
            ...props
        },
        ref
    ) => {
        useEffect(() => {
            isActive && setActiveIndex(tabIndex);
        }, [isActive, setActiveIndex, tabIndex]);

        return (
            <li
                ref={ref}
                {...props}
                onClick={() => setActiveIndex(tabIndex)}
                className={`relative w-full text-center px-2 py-3.5 md:py-5 cursor-pointer ${className}`}
            >
                <Text
                    textType={EnumText.large}
                    className={cn(classNameText, 'transition-colors duration-300', {
                        'text-white': tabIndex === activeIndex,
                        'text-gray2': tabIndex !== activeIndex,
                    })}
                >
                    {props.children}
                </Text>

                {tabIndex === activeIndex && (
                    <motion.div
                        id='underline'
                        layoutId='underline'
                        className='absolute left-0 bottom-[1px] w-full h-0.5 bg-gray2'
                    />
                )}
            </li>
        );
    }
);

TabsTab.displayName = 'TabsTab';
export default TabsTab;
