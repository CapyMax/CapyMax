import React from 'react';
import clsx from 'clsx';

interface FloatingImageProps {
  src: string;
  alt?: string;
  className?: string;
  duration?: number; // 动画周期，单位秒
  distance?: number; // 浮动距离，单位 px
  delay?: number; // 动画延迟，单位秒
}

export const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt = '',
  className,
  duration = 3,
  distance = 15,
  delay = 0
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        'animate-floating',
        className
      )}
      style={{
        animation: `floating ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );
}; 