import React from 'react';
import Image from 'next/image';

import DotBg from '@/components/DotBg';
import { Button } from "@/components/ui/button";
import { DateCountDown } from '@/components/DateCountDown';
import { Tooltip } from '@/components/tooltip';

export const FirstSection: React.FC = () => {
  return (
    <div className="!w-full mt-[34px] pb-[80px] relative">
      <DotBg className='absolute top-[-167px] right-0 w-[256px] h-[340px]' />
      <DotBg className='absolute bottom-[45px] left-[-54px] w-[256px] h-[340px]' />
      <div className='mx-auto w-[1280px] h-[584px] relative overflow-hidden rounded-[24px]'>
        <Image src="/section-1-bg.svg" alt="section-1-bg" className='absolute top-0 left-0 w-[1280px] h-[584px]' width={1280} height={584} />
        <div className='relative z-10 w-full h-full'>
          <div className='pt-[48px] pl-[48px]'>
            <div className='w-[500px]'>
              <div className='text-[#AAB8C1] text-[20px] font-medium mb-[24px]'>Try Earning in an Easy Way</div>
              <div className='text-[#141414] text-[40px] font-medium leading-[1.2]'>One-click implementation of professional strategies to maximize returns.</div>
            </div>
            <div className='text-[20px] mt-[24px]'>
              <div className='flex items-center gap-[6px]'>
                <div className='w-[220px] text-[#AAB8C1]'>Maximize staking yield</div>
                <div className='w-[130px] font-medium'>BTC/ETH</div>
                <div className='text-[#05d394] font-bold'>APR: 12%↑</div>
              </div>
              <div className='flex items-center gap-[4px]'>
                <div className='w-[220px] text-[#AAB8C1]'>Leverage with hedging</div>
                <div className='w-[130px] font-medium'>USDC/USDT</div>
                <div className='text-[#765bff] font-bold'>APR: 43%↑</div>
              </div>
            </div>
            <div className='relative mt-[40px] w-[482px] h-[164px] bg-white rounded-3xl shadow-[3px_4px_8px_rgba(19,22,29,0.04)]'>
              <Image src="/boost.svg" alt="boost" className='w-[150px] h-[140px] absolute top-[12px] left-[12px]' width={150} height={140} />
              <Image src="/line.svg" alt="line" className='w-[320px] h-[16px] absolute top-[35px] left-[170px]' width={320} height={16} />
              <div className='absolute top-[14px] left-[246px] flex items-center text-[12px] text-[#141414]/40'>
                <div className='mr-[58px]'>TBA</div>
                <div className='mr-[75px]'>TBA</div>
                <div>TBA</div>
              </div>
              <div className='absolute top-[59px] left-[170px] text-[12px]'>
                <div>Coming Soon</div>
                <div className='flex items-center gap-[4px]'>
                  <div className='linear-text'>Get the OG Point Boost Pass</div>
                  <div className='linear-bg px-[8px] py-[2px] rounded-full flex items-center justify-center text-white font-bold'>
                    <Image src="/points.svg" alt="point-boost-icon" className='w-[18px] h-[18px]' width={18} height={18} />
                    <span className='ml-[4px]'>Point+20%</span>
                  </div>
                </div>
              </div>
              <div className='absolute top-[109px] left-[170px] flex items-center'>
                <Button
                  variant="default"
                  className="h-8 w-[121px] rounded-[88px] bg-[#141414] px-4 py-0 text-xs font-semibold text-white hover:bg-[#141414]/90"
                >
                  Coming Soon
                </Button>
                <div className='flex items-center gap-[4px] ml-[12px]'>
                  <DateCountDown targetDate={null} />
                </div>
              </div>
            </div>
          </div>

          <video autoPlay loop muted src="/video.mp4" className='aspect-auto absolute bottom-[0px] right-[0px] w-auto h-[280px]' />
          {/* links */}
          <div className='absolute top-[164px] right-[32px] flex items-center justify-center gap-[24px]'>
            <Tooltip placement="top" content={<div className='rounded-full bg-[#F3F5F8] px-3 py-1 text-[12px] font-semibold'>COMING SOON...</div>}>
              <div className='w-[48px] h-[48px] bg-[#141414] hover:bg-[#765BFF] rounded-[12px] flex items-center justify-center'>
                <Image src="/telegram.svg" alt="link-icon" className='w-[28px] h-[28px]' width={28} height={28} />
              </div>
            </Tooltip>

            <a href="https://x.com/Capy_Max" target="_blank" className='w-[48px] h-[48px] bg-[#141414] hover:bg-[#765BFF] rounded-[12px] flex items-center justify-center'>
              <Image src="/twitter.svg" alt="link-icon" className='w-[28px] h-[28px]' width={28} height={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};