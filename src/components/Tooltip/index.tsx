'use client'

import React, { useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  visible?: boolean;
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ top: string, left: string }>()

  useLayoutEffect(() => {

    const updatePosition = () => {
      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();
        const tooltipRoot = document.getElementById('tooltip-root');
        if (tooltipRoot) {
          const position = {
            top: `${contentRect.top + window.scrollY}px`,
            left: `${contentRect.left + window.scrollX}px`,
          }
          setPosition(position)
        }
      }
    }

    updatePosition()
  }, [])

  const contentView = (
    <div className={className}>
      <div>{content}</div>
    </div>
  )

  console.log(position)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {(
        <div ref={contentRef} className={clsx(
          'absolute z-50',
          'whitespace-nowrap',
          // 箭头和定位
          {
            'bottom-full left-1/2 -translate-x-1/2': placement === 'top',
            'top-full left-1/2 -translate-x-1/2': placement === 'bottom',
            'right-full top-1/2 -translate-y-1/2': placement === 'left',
            'left-full top-1/2 -translate-y-1/2': placement === 'right',
          },
        )}>
          {!position && <div className='invisible'>{contentView}</div>}
          {isVisible && createPortal(
            <div style={{ position: 'absolute', top: position?.top, left: position?.left }}>{contentView}</div>,
            document.getElementById('tooltip-root') as HTMLElement
          )}
        </div>
      )}
    </div>
  );
}; 