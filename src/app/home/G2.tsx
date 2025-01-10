'use client'

import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

// 渲染条形图
function renderChart(container: HTMLDivElement, color: string, fromColor: string, toColor: string) {
  const chart = new Chart({
    container,
    autoFit: true,
  });

  const data = [
    {
      "date": "2024-1-4",
      "price": 0,
      "type": "USDC"
    },
    {
      "date": "2024-1-11",
      "price": 276.5400289,
      "type": "USDC"
    },
    {
      "date": "2024-1-18",
      "price": 493.1704546,
      "type": "USDC"
    },
    {
      "date": "2024-1-25",
      "price": 609.1799709,
      "type": "USDC"
    },
    {
      "date": "2024-2-1",
      "price": 738.5167605,
      "type": "USDC"
    },
    {
      "date": "2024-2-8",
      "price": 760.0262515,
      "type": "USDC"
    },
    {
      "date": "2024-2-15",
      "price": 785.2689585,
      "type": "USDC"
    },
    {
      "date": "2024-2-22",
      "price": 935.6160923,
      "type": "USDC"
    },
    {
      "date": "2024-2-29",
      "price": 1217.006432,
      "type": "USDC"
    },
    {
      "date": "2024-3-7",
      "price": 1292.631155,
      "type": "USDC"
    },
    {
      "date": "2024-3-14",
      "price": 1517.487829,
      "type": "USDC"
    },
    {
      "date": "2024-3-21",
      "price": 1739.495716,
      "type": "USDC"
    },
    {
      "date": "2024-3-28",
      "price": 1753.927228,
      "type": "USDC"
    },
    {
      "date": "2024-4-4",
      "price": 1898.959551,
      "type": "USDC"
    },
    {
      "date": "2024-4-11",
      "price": 2019.377319,
      "type": "USDC"
    },
    {
      "date": "2024-4-18",
      "price": 1989.682282,
      "type": "USDC"
    },
    {
      "date": "2024-4-25",
      "price": 2087.972133,
      "type": "USDC"
    },
    {
      "date": "2024-5-2",
      "price": 2137.703802,
      "type": "USDC"
    },
    {
      "date": "2024-5-9",
      "price": 2178.428679,
      "type": "USDC"
    },
    {
      "date": "2024-5-16",
      "price": 2197.285262,
      "type": "USDC"
    },
    {
      "date": "2024-5-23",
      "price": 2257.513828,
      "type": "USDC"
    },
    {
      "date": "2024-5-30",
      "price": 2375.128131,
      "type": "USDC"
    },
    {
      "date": "2024-6-6",
      "price": 2453.385364,
      "type": "USDC"
    },
    {
      "date": "2024-6-13",
      "price": 2456.405235,
      "type": "USDC"
    },
    {
      "date": "2024-6-20",
      "price": 2466.232788,
      "type": "USDC"
    },
    {
      "date": "2024-6-27",
      "price": 2531.648802,
      "type": "USDC"
    },
    {
      "date": "2024-7-4",
      "price": 2601.165096,
      "type": "USDC"
    },
    {
      "date": "2024-7-11",
      "price": 2609.844654,
      "type": "USDC"
    },
    {
      "date": "2024-7-18",
      "price": 2646.90444,
      "type": "USDC"
    },
    {
      "date": "2024-7-25",
      "price": 2715.966414,
      "type": "USDC"
    },
    {
      "date": "2024-8-1",
      "price": 2768.780161,
      "type": "USDC"
    },
    {
      "date": "2024-8-8",
      "price": 2853.969331,
      "type": "USDC"
    },
    {
      "date": "2024-8-15",
      "price": 2875.880661,
      "type": "USDC"
    },
    {
      "date": "2024-8-22",
      "price": 2885.846474,
      "type": "USDC"
    },
    {
      "date": "2024-8-29",
      "price": 2908.425595,
      "type": "USDC"
    },
    {
      "date": "2024-9-5",
      "price": 2921.058844,
      "type": "USDC"
    },
    {
      "date": "2024-9-12",
      "price": 2937.706483,
      "type": "USDC"
    },
    {
      "date": "2024-9-19",
      "price": 2944.553406,
      "type": "USDC"
    },
    {
      "date": "2024-9-26",
      "price": 2946.150505,
      "type": "USDC"
    },
    {
      "date": "2024-10-3",
      "price": 3066.760922,
      "type": "USDC"
    },
    {
      "date": "2024-10-10",
      "price": 3097.999277,
      "type": "USDC"
    },
    {
      "date": "2024-10-17",
      "price": 3094.580502,
      "type": "USDC"
    },
    {
      "date": "2024-10-24",
      "price": 3105.75315,
      "type": "USDC"
    },
    {
      "date": "2024-10-31",
      "price": 3096.471188,
      "type": "USDC"
    },
    {
      "date": "2024-11-7",
      "price": 3073.925496,
      "type": "USDC"
    },
    {
      "date": "2024-11-14",
      "price": 3215.370635,
      "type": "USDC"
    },
    {
      "date": "2024-11-21",
      "price": 3262.385757,
      "type": "USDC"
    },
    {
      "date": "2024-11-28",
      "price": 3265.117301,
      "type": "USDC"
    },
    {
      "date": "2024-12-5",
      "price": 3309.599667,
      "type": "USDC"
    },
    {
      "date": "2024-12-1",
      "price": 3443.819549,
      "type": "USDC"
    },
    {
      "date": "2024-12-13",
      "price": 3443.495935,
      "type": "USDC"
    },
    {
      "date": "2024-12-18",
      "price": 3474.793775,
      "type": "USDC"
    },
    {
      "date": "2024-12-21",
      "price": 3516.286807,
      "type": "USDC"
    },
    {
      "date": "2024-12-28",
      "price": 3533.660782,
      "type": "USDC"
    },
    {
      "date": "2025-1-3",
      "price": 3532.677453,
      "type": "USDC"
    },
    {
      "date": "2025-1-6",
      "price": 3529.574566,
      "type": "USDC"
    },
    {
      "date": "2024-1-4",
      "price": 0,
      "type": "Point"
    },
    {
      "date": "2024-1-11",
      "price": 331.8480347,
      "type": "Point"
    },
    {
      "date": "2024-1-18",
      "price": 591.8045455,
      "type": "Point"
    },
    {
      "date": "2024-1-25",
      "price": 731.0159651,
      "type": "Point"
    },
    {
      "date": "2024-2-1",
      "price": 886.2201126,
      "type": "Point"
    },
    {
      "date": "2024-2-8",
      "price": 912.0315018,
      "type": "Point"
    },
    {
      "date": "2024-2-15",
      "price": 942.3227502,
      "type": "Point"
    },
    {
      "date": "2024-2-22",
      "price": 1122.739311,
      "type": "Point"
    },
    {
      "date": "2024-2-29",
      "price": 1460.407719,
      "type": "Point"
    },
    {
      "date": "2024-3-7",
      "price": 1551.157386,
      "type": "Point"
    },
    {
      "date": "2024-3-14",
      "price": 1820.985395,
      "type": "Point"
    },
    {
      "date": "2024-3-21",
      "price": 2087.394859,
      "type": "Point"
    },
    {
      "date": "2024-3-28",
      "price": 2104.712673,
      "type": "Point"
    },
    {
      "date": "2024-4-4",
      "price": 2278.751461,
      "type": "Point"
    },
    {
      "date": "2024-4-11",
      "price": 2423.252783,
      "type": "Point"
    },
    {
      "date": "2024-4-18",
      "price": 2387.618739,
      "type": "Point"
    },
    {
      "date": "2024-4-25",
      "price": 2505.566559,
      "type": "Point"
    },
    {
      "date": "2024-5-2",
      "price": 2565.244563,
      "type": "Point"
    },
    {
      "date": "2024-5-9",
      "price": 2614.114415,
      "type": "Point"
    },
    {
      "date": "2024-5-16",
      "price": 2636.742315,
      "type": "Point"
    },
    {
      "date": "2024-5-23",
      "price": 2709.016594,
      "type": "Point"
    },
    {
      "date": "2024-5-30",
      "price": 2850.153758,
      "type": "Point"
    },
    {
      "date": "2024-6-6",
      "price": 2944.062437,
      "type": "Point"
    },
    {
      "date": "2024-6-13",
      "price": 2947.686282,
      "type": "Point"
    },
    {
      "date": "2024-6-20",
      "price": 2959.479345,
      "type": "Point"
    },
    {
      "date": "2024-6-27",
      "price": 3037.978562,
      "type": "Point"
    },
    {
      "date": "2024-7-4",
      "price": 3121.398115,
      "type": "Point"
    },
    {
      "date": "2024-7-11",
      "price": 3131.813584,
      "type": "Point"
    },
    {
      "date": "2024-7-18",
      "price": 3176.285328,
      "type": "Point"
    },
    {
      "date": "2024-7-25",
      "price": 3259.159697,
      "type": "Point"
    },
    {
      "date": "2024-8-1",
      "price": 3322.536193,
      "type": "Point"
    },
    {
      "date": "2024-8-8",
      "price": 3424.763197,
      "type": "Point"
    },
    {
      "date": "2024-8-15",
      "price": 3451.056793,
      "type": "Point"
    },
    {
      "date": "2024-8-22",
      "price": 3463.015769,
      "type": "Point"
    },
    {
      "date": "2024-8-29",
      "price": 3490.110714,
      "type": "Point"
    },
    {
      "date": "2024-9-5",
      "price": 3505.270613,
      "type": "Point"
    },
    {
      "date": "2024-9-12",
      "price": 3525.247779,
      "type": "Point"
    },
    {
      "date": "2024-9-19",
      "price": 3533.464087,
      "type": "Point"
    },
    {
      "date": "2024-9-26",
      "price": 3535.380606,
      "type": "Point"
    },
    {
      "date": "2024-10-3",
      "price": 3680.113107,
      "type": "Point"
    },
    {
      "date": "2024-10-10",
      "price": 3717.599133,
      "type": "Point"
    },
    {
      "date": "2024-10-17",
      "price": 3713.496602,
      "type": "Point"
    },
    {
      "date": "2024-10-24",
      "price": 3726.903781,
      "type": "Point"
    },
    {
      "date": "2024-10-31",
      "price": 3715.765426,
      "type": "Point"
    },
    {
      "date": "2024-11-7",
      "price": 3688.710595,
      "type": "Point"
    },
    {
      "date": "2024-11-14",
      "price": 3858.444762,
      "type": "Point"
    },
    {
      "date": "2024-11-21",
      "price": 3914.862908,
      "type": "Point"
    },
    {
      "date": "2024-11-28",
      "price": 3918.140762,
      "type": "Point"
    },
    {
      "date": "2024-12-5",
      "price": 3971.5196,
      "type": "Point"
    },
    {
      "date": "2024-12-1",
      "price": 4132.583459,
      "type": "Point"
    },
    {
      "date": "2024-12-13",
      "price": 4132.195123,
      "type": "Point"
    },
    {
      "date": "2024-12-18",
      "price": 4169.75253,
      "type": "Point"
    },
    {
      "date": "2024-12-21",
      "price": 4219.544168,
      "type": "Point"
    },
    {
      "date": "2024-12-28",
      "price": 4240.392938,
      "type": "Point"
    },
    {
      "date": "2025-1-3",
      "price": 4239.212943,
      "type": "Point"
    },
    {
      "date": "2025-1-6",
      "price": 4235.48948,
      "type": "Point"
    }
  ]

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