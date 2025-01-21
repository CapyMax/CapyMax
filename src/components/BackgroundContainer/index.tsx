import React from 'react';
import clsx from 'clsx';
import DotBg from '../DotBg';

interface BackgroundContainer1Props {
  children: React.ReactNode;
  className?: string;
}

export const Section3BackgroundContainer1: React.FC<BackgroundContainer1Props> = ({
  children,
  className
}) => {
  return (
    <>
      <div className={clsx('relative w-full hidden max-md:block', className)}>
        <DotBg className="absolute max-md:top-[-12px] max-md:left-[-52px] max-md:w-[256px] max-md:h-[172px]" />

        {/* SVG 背景 */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 311 1310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M168 16C168 7.16344 175.163 0 184 0H287C300.255 0 311 10.7452 311 24V1286C311 1299.25 300.255 1310 287 1310H185H168H24C10.7452 1310 0 1299.25 0 1286V56C0 42.7452 10.7452 32 24 32H152C160.837 32 168 24.8366 168 16Z"
            fill="#F3F5F8"
          />
        </svg>

        {/* 内容容器 */}
        <div className="relative z-10 max-md:p-[16px]">
          {children}
        </div>
      </div>
      <div className={clsx('max-md:hidden', className)}>
        <DotBg className="absolute z-1 top-[-14px] left-[380px] w-[256px] h-[172px]" />
        {children}
      </div>
    </>
  );
};

interface BackgroundContainer2Props {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
}

export const Section3BackgroundContainer2: React.FC<BackgroundContainer2Props> = ({
  children,
  className,
  style
}) => {
  return (
    <>
      <div
        className={clsx('relative w-full hidden max-md:block', className)}
        style={style}
      >
        <DotBg className="absolute z-0 max-md:top-[-52px] max-md:left-[-52px] max-md:w-[256px] max-md:h-[172px]" />
        {/* SVG 背景 */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 311 1312"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143 16C143 7.16344 135.837 0 127 0H24C10.7452 0 0 10.7451 0 24V1288C0 1301.25 10.7452 1312 24 1312H126H143H287C300.255 1312 311 1301.25 311 1288V56C311 42.7452 300.255 32 287 32H159C150.163 32 143 24.8366 143 16Z"
            fill='#F3F5F8'
          />
        </svg>

        {/* 内容容器 */}
        <div className="relative z-10 max-md:p-[16px]">
          {children}
        </div>
      </div>
      <div className={clsx('max-md:hidden', className)}>
        <DotBg className="absolute z-1 top-[-14px] right-[380px] w-[256px] h-[172px]" />
        {children}
      </div>
    </>
  );
};