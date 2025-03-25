'use client';
import { FC, forwardRef, Fragment, ReactNode, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLMotionProps<'p'>, RefAttributes<HTMLParagraphElement> {
    text: string;
    children?: ReactNode;
}

const FlipText: FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ text, children, ...props }, ref) => {
    const firstLetterAnimation = (index: number): HTMLMotionProps<'span'> => ({
        variants: {
            initial: {
                y: 0,
            },
            hovered: {
                y: '-100%',
                transition: {
                    duration: 0.25,
                    delay: 0.025 * index,
                    ease: [0.215, 0.61, 0.355, 1],
                },
            },
        },
    });

    const secondLetterAnimation = (index: number): HTMLMotionProps<'span'> => ({
        variants: {
            initial: {
                y: '100%',
            },
            hovered: {
                y: 0,
                transition: {
                    duration: 0.25,
                    delay: 0.025 * index,
                    ease: [0.215, 0.61, 0.355, 1],
                },
            },
        },
    });

    return (
        <motion.p
            ref={ref}
            {...props}
            initial='initial'
            whileHover='hovered'
            className='flex items-center justify-center gap-2 w-full h-full font-medium px-4 sm:px-5 md:px-8'
        >
            {children && children}

            <span className='relative flex overflow-hidden'>
                {text.split('').map((letter, index) => (
                    <Fragment key={index}>
                        {letter !== ' ' ? (
                            <span className='relative'>
                                <motion.span {...firstLetterAnimation(index)} className='inline-block'>
                                    {letter}
                                </motion.span>

                                <motion.span {...secondLetterAnimation(index)} className='absolute left-0 inline-block'>
                                    {letter}
                                </motion.span>
                            </span>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </Fragment>
                ))}
            </span>
        </motion.p>
    );
});

FlipText.displayName = 'FlipText';
export default FlipText;
