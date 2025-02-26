'use client'

import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

import { data } from '@/constants/profit';

// 渲染条形图
function renderChart(container: HTMLDivElement, color: string, fromColor: string, toColor: string) {
  const chart = new Chart({
    container,
    autoFit: true,
  });

  const enterAnimate = { type: 'growInX', duration: 1250, delay: 100 } as const

  chart
    .data(data)
    .encode('x', 'date')
    .encode('y', 'price')
    .encode('color', 'type')
    .scale('color', {
      domain: ['Point', 'USDC'],
      range: ['linear-gradient(212.52deg, #9884FF 6.66%, #66CDFF 58.54%, #05D394 97.1%)', color]
    })
    .axis('x', false)
    .axis('y', { title: false })


  chart
    .area()
    // .axis('x', false)
    .axis('y', { title: false })
    .encode('shape', 'smooth') // 指定形状
    .style('fill', (a: Array<{ type: string }>) => {
      return a[0].type === 'Point' ? `transparent` : `linear-gradient(-90deg, ${toColor} 0%, ${fromColor} 100%)`
    })
    .animate('enter', enterAnimate)
    .legend(false)
    .axis('y', { labelFormatter: (d: number) => `$${d}`, title: false });

  chart
    .line()
    .style('lineWidth', 3)
    .encode('shape', 'smooth') // 指定形状
    .animate('enter', enterAnimate)
    .style('lineDash', (a: Array<{ type: string }>) => {
      return a[0].type === 'Point' ? [2, 5] : [0, 0]
    })
    .tooltip(false);

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