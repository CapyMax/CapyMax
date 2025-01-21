'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useMobile } from '@/hooks/misc';

export interface TextTruncateProps {
  /** 要显示的文本内容 */
  text: React.ReactNode;
  foldText?: React.ReactNode;
  /** 最大显示行数 */
  maxLines?: number;
  /** 容器类名 */
  className?: string;
  /** 展开按钮文本 */
  expandText?: React.ReactNode;
  /** 收起按钮文本 */
  collapseText?: React.ReactNode;
  /** 行高 */
  lineHeight?: number;
  /** 展开/收起回调 */
  onExpand?: (expanded: boolean) => void;
}

export const TextTruncateMobile: React.FC<TextTruncateProps> = ({
  text,
  foldText,
  maxLines = 3,
  className,
  expandText = 'More',
  collapseText = 'Less',
  onExpand,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [height, setHeight] = useState<number | undefined>();

  useLayoutEffect(() => {
    const checkTruncation = () => {
      const element = contentRef.current;
      if (!element) return;

      // 计算最大高度
      const computedStyle = getComputedStyle(element);
      const lineHeightPx = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeightPx * maxLines;
      
      // 重置高度以获取实际内容高度
      element.style.height = 'auto';
      const scrollHeight = element.scrollHeight;
      
      // 判断是否需要截断
      const shouldTruncate = scrollHeight > maxHeight;
      setIsTruncated(shouldTruncate);
      
      // 设置高度
      if (!isExpanded && shouldTruncate) {
        setHeight(maxHeight);
      } else {
        setHeight(scrollHeight);
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [maxLines, isExpanded, text]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    onExpand?.(!isExpanded);
  };

  const textView = isExpanded ? text : foldText ?? text;

  return (
    <div className={clsx('relative', className)}>
      <div
        ref={contentRef}
        className={clsx(
          !isExpanded && [
            'overflow-hidden',
            'relative'
          ]
        )}
        style={{
          height: height ? `${height}px` : 'auto',
        }}
      >
        {textView}
        {isTruncated && (
          <span 
            className={clsx(
              'inline-flex items-center',
              !isExpanded && 'absolute bottom-0 right-0 bg-white max-md:gap-[8px]'
            )}
          >
            {!isExpanded && foldText == null && <span className="text-gray-500">...</span>}
            <button
              onClick={toggleExpand}
              className="text-[#798186] ml-1 underline text-opacity-80"
            >
              {isExpanded ? collapseText : expandText}
            </button>
          </span>
        )}
      </div>
    </div>
  );
}; 

export const TextTruncate = (props: TextTruncateProps) => {
  const isMobile = useMobile();
  return isMobile ? <TextTruncateMobile {...props} /> : <div className={props.className}>{props.text}</div>
}