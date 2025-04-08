'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    activeIndex?: number;
    className?: string;
    classNameList?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsList: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ activeIndex, className = '', classNameList = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={`relative border-t border-gray ${className}`}>
                <ul className={`flex container !px-0 ${classNameList}`}>
                    {Children.map(props.children, (child, index) => {
                        if (isValidElement(child)) {
                            return cloneElement(child as ReactElement, {
                                tabIndex: index,
                                activeIndex,
                                setActiveIndex,
                            });
                        }

                        return child;
                    })}
                </ul>
            </div>
        );
    }
);

TabsList.displayName = 'TabsList';
export default TabsList;
