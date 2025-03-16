'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
};

const Template: FC<Props> = ({ children }) => {
    const anim = (variants: any, custom?: number) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            custom,
            variants,
        };
    };

    const expand = {
        initial: {
            top: 0,
        },
        enter: (i: number) => ({
            top: '100%',
            transition: {
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.215, 0.61, 0.355, 1],
            },
            transitionEnd: { top: '0', height: '0' },
        }),
        exit: (i: number) => ({
            height: '100%',
            transition: {
                duration: 0.6,
                delay: 0.1 * (i + 1),
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
    };

    const opacity = {
        initial: {
            opacity: 0.7,
        },
        enter: {
            opacity: 0,
        },
        exit: {
            opacity: 0.7,
        },
    };

    return (
        <>
            <motion.div
                {...anim(opacity)}
                className='fixed z-30 top-0 left-0 w-full h-full pointer-events-none bg-black'
            />

            <div className='fixed z-40 top-0 left-0 flex w-full h-full pointer-events-none'>
                {[...Array(5)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            {...anim(expand, 5 - index)}
                            className={cn('relative w-full h-full bg-gray', {
                                'hidden md:block': index === 0,
                                'hidden sm:block': index === 1,
                            })}
                        />
                    );
                })}
            </div>

            {children}
        </>
    );
};

export default Template;
