'use client';
import { FC, useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { IHeroInfo } from '@/src/types/interfaces/HeroInfo';
import { Text, Title } from '../../ui';

type Props = {
    info: IHeroInfo;
};

const HeroInfoItem: FC<Props> = ({ info }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    const { value, text } = info;

    useEffect(() => {
        const controls = animate(count, value, { duration: 4, delay: 0.5 });

        return () => controls.stop();
    }, [count, value]);

    return (
        <div className='w-auto'>
            <Title titleType={EnumTitle.h4}>
                <motion.span>{rounded}</motion.span>k+
            </Title>

            <Text textType={EnumText.large}>{text}</Text>
        </div>
    );
};

export default HeroInfoItem;
