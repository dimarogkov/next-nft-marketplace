'use client';
import { useEffect, useMemo, useState } from 'react';
import { ITimer } from '../types/interfaces/Timer';

const useTimer = (hours: number, minutes: number, seconds: number) => {
    const [timer, setTimer] = useState<ITimer>({ hours: 0, minutes: 0, seconds: 0 });
    const [isTimerEnd, setIsTimerEnd] = useState(false);

    const date = useMemo(() => {
        return new Date(Date.now() + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000);
    }, [hours, minutes, seconds]);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const difference = date.getTime() - now.getTime();

            if (difference > 0) {
                setTimer({
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
                setIsTimerEnd(false);
            } else {
                setTimer({ hours: 0, minutes: 0, seconds: 0 });
                setIsTimerEnd(true);
            }
        };

        const interval = setInterval(updateTimer, 1000);
        updateTimer();

        return () => clearInterval(interval);
    }, [date]);

    return { timer, isTimerEnd };
};

export default useTimer;
