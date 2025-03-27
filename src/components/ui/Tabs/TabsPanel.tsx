'use client';
import { FC, forwardRef, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const TabsPanel: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
        exit: { y: -10, opacity: 0 },
    };

    return (
        <motion.div ref={ref} {...props} {...animation} className={cn(`relative w-full text-base ${className}`)}>
            {props.children}
        </motion.div>
    );
});

TabsPanel.displayName = 'TabsPanel';
export default TabsPanel;
