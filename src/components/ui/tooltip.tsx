'use client'


import React, { useState } from 'react';
import clsx from 'clsx';

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: TooltipPlacement;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'bottom',
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className={clsx(
          'absolute z-50 px-3 py-2',
          'whitespace-nowrap',
          // 箭头和定位
          {
            'bottom-full left-1/2 -translate-x-1/2': placement === 'top',
            'top-full left-1/2 -translate-x-1/2': placement === 'bottom',
            'right-full top-1/2 -translate-y-1/2': placement === 'left',
            'left-full top-1/2 -translate-y-1/2': placement === 'right',
          },
          className
        )}>
          <div className="relative z-10">
            {content}
          </div>
      </div>
      )}
    </div>
  );
}; 