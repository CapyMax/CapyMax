import React from 'react';
import Image from 'next/image';

import DotBg from '@/components/DotBg';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-9 h-8 bg-[#eef1f3] border-[#eef1f3] p-0">
      <CardContent className="flex items-center justify-center p-0 h-full">
        <span className="font-medium italic text-xs text-[#141414]">{children}</span>
      </CardContent>
    </Card>
  )
}

export const FirstSection: React.FC = () => {
  return (
    <div className="!w-full h-[800px] relative">
      <DotBg className='absolute top-[-167px] right-0 w-[256px] h-[340px]' />
      <DotBg className='absolute bottom-[45px] left-[-54px] w-[256px] h-[340px]' />
      <div className='mx-auto mt-[40px] w-[1280px] h-[584px] relative'>
        <Image src="/section-1-bg.svg" alt="section-1-bg" className='absolute top-0 left-0 w-[1280px] h-[584px]' width={1280} height={584} />
        <div className='relative z-10'>
          <div className='pt-[48px] pl-[48px]'>
            <div className='w-[450px]'>
              <div className='text-[#AAB8C1] text-[20px] font-medium mb-[24px]'>Try Earning the Easy Way</div>
              <div className='text-[#141414] text-[40px] font-medium leading-[1.2]'>Maximize Your Returns with Expert Strategies, Simplified for You</div>
            </div>
            <div className='text-[20px] mt-[24px]'>
              <div className='flex items-center gap-[6px]'>
                <div className='w-[210px] text-[#AAB8C1]'>Maximize pledge yield</div>
                <div className='w-[130px] font-medium'>BTC/ETH</div>
                <div className='text-[#05d394] font-bold'>56%↑</div>
              </div>
              <div className='flex items-center gap-[4px]'>
                <div className='w-[210px] text-[#AAB8C1]'>Leverage + hedging</div>
                <div className='w-[130px] font-medium'>USDC/USDT</div>
                <div className='text-[#765bff] font-bold'>100%↑</div>
              </div>
            </div>
            <div className='relative mt-[40px] w-[482px] h-[164px]'>
              <Image src="/cut-down-bg.png" alt="1" className='w-[482px] h-[164px]' width={482} height={164} />
              <div className='absolute top-[14px] left-[216px] flex items-center font-[12px] text-black'>
                <div className='mr-[14px]'>15th Jan</div>
                <div className='mr-[28px]'>15th Jan</div>
                <div>15th Jan</div>
              </div>
              <div className='absolute top-[59px] left-[170px] text-[12px]'>
                <div>15th Jan</div>
                <div className='flex items-center gap-[4px]'>
                  <div className='linear-text'>Get Free Point Boost Pass</div>
                  <div className='linear-bg px-[8px] py-[2px] rounded-full flex items-center justify-center text-white font-bold'>
                    <Image src="/points-white.svg" alt="point-boost-icon" className='w-[14px] h-[14px]' width={14} height={14} />
                    <span className='ml-[4px]'>1.2x point</span>
                  </div>
                </div>
              </div>
              <div className='absolute top-[109px] left-[170px] flex items-center'>
                <Button
                  variant="default"
                  className="h-8 w-[121px] rounded-[88px] bg-[#141414] px-4 py-0 text-xs font-semibold text-white hover:bg-[#141414]/90"
                >
                  Get Free Pass
                </Button>
                <div className='flex items-center gap-[4px] ml-[12px]'>
                  <Item>4D</Item>
                  <div className='text-[#AAB8C1]'>:</div>
                  <Item>6H</Item>
                  <div className='text-[#AAB8C1]'>:</div>
                  <Item>34M</Item>
                </div>
              </div>
            </div>
          </div>

          {/* links */}
          <div className='absolute top-[164px] right-[32px] flex items-center justify-center gap-[24px]'>
            <div className='w-[48px] h-[48px] bg-[#141414] rounded-[12px] flex items-center justify-center'>
              <Image src="/telegram.svg" alt="link-icon" className='w-[28px] h-[28px]' width={28} height={28} />
            </div>
            <div className='w-[48px] h-[48px] bg-[#141414] rounded-[12px] flex items-center justify-center'>
              <Image src="/twitter.svg" alt="link-icon" className='w-[28px] h-[28px]' width={28} height={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};