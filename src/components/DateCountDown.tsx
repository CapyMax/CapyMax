'use client'

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Card, CardContent } from './ui/card';

function TimeBox({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-9 h-8 bg-[#eef1f3] border-[#eef1f3] p-0">
      <CardContent className="flex items-center justify-center p-0 h-full">
        <span className="font-medium italic text-xs text-[#141414]">{children}</span>
      </CardContent>
    </Card>
  )
}

interface DateCountDownProps {
  targetDate: Date | string | number | null;
  className?: string;
  onEnd?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const DateCountDown: React.FC<DateCountDownProps> = ({
  targetDate,
  className,
  onEnd
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate ?? 0).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        onEnd?.();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // 初始计算
    setTimeLeft(calculateTimeLeft());

    // 每秒更新
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.values(newTimeLeft).every(v => v === 0)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onEnd]);

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <TimeBox>{targetDate ? timeLeft.days + 'D' : '-'}</TimeBox>
      <div className='text-[#AAB8C1]'>:</div>
      <TimeBox>{targetDate ? timeLeft.hours + 'H' : '-'}</TimeBox>
      <div className='text-[#AAB8C1]'>:</div>
      <TimeBox>{targetDate ? timeLeft.minutes + 'M' : '-'}</TimeBox>
    </div>
  );
};