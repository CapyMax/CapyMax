'use client'

import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

// 渲染条形图
function renderChart(container: HTMLDivElement, color: string, fromColor: string, toColor: string) {
  const chart = new Chart({
    container,
    autoFit: true
  });

  // 准备数据
  const data = [
    { price: 1001, date: '2024-01-01' },
    { price: 2020, date: '2024-01-02' },
    { price: 3030, date: '2024-01-03' },
    { price: 2200, date: '2024-01-04' },
    { price: 1922, date: '2024-01-05' },
    { price: 6060, date: '2024-01-06' },
    { price: 3023, date: '2024-01-07' },
    { price: 5440, date: '2024-01-08' },
    { price: 6660, date: '2024-01-09' },
    { price: 3900, date: '2024-01-10' },
  ];

  // 声明可视化
  chart
    .data(data) // 绑定数据
    .area()
    .encode('x', 'date')
    .encode('y', 'price')
    .encode('key', 'x')
    .encode('shape', 'smooth') // 指定形状
    .style('fill', `linear-gradient(-90deg, ${toColor} 0%, ${fromColor} 100%)`)
    .style('stroke', color)
    .axis('x', false)
    .animate('enter', {  type: 'pathIn', duration: 1000 }); // 指定更新动画的时间

  chart.render();

  return chart;
}


interface Props {
  className?: string
  color: string
  fromColor: string
  toColor: string
}

export function G2Chart({ className, color, fromColor: formColor, toColor }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const chart = useRef<Chart>(null);

  useEffect(() => {
    if (!chart.current && container.current) {
      console.log('renderChart', color, formColor, toColor)
      chart.current = renderChart(container.current, color, formColor, toColor);
    }
  }, [color, formColor, toColor])

  return (
    <div ref={container} className={className}></div>
  );
}