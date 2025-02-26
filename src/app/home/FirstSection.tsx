import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import DotBg from '@/components/DotBg';
import { Button } from "@/components/ui/button";
import { DateCountDown } from '@/components/DateCountDown';
import { Tooltip } from '@/components/tooltip';

function BoostCard({ className }: { className?: string }) {
  return (
    <div className={clsx('relative bg-white rounded-3xl max-md:rounded-[12px] shadow-[3px_4px_8px_rgba(19,22,29,0.04)] max-md:shadow-[2px_2px_8px_2px_#13161D0A]', className)}>
      <video muted autoPlay loop src="/boost.mp4" className='w-[150px] h-[140px] absolute top-[12px] left-[12px] max-md:w-[60px] max-md:h-[56px] max-md:top-[8px] max-md:left-[8px]' width={150} height={140} />
      <Image src="/line.svg" alt="line" className='w-[320px] h-[16px] absolute top-[35px] left-[170px] max-md:w-[240px] max-md:h-[12px] max-md:top-[14px] max-md:left-[71px]' width={320} height={16} />
      <div className='absolute top-[14px] left-[246px] flex items-center text-[12px] text-[#141414]/40 max-md:top-[5px] max-md:left-[127px] max-md:text-[10px]'>
        <div className='mr-[58px] max-md:mr-[42px]'>TBA</div>
        <div className='mr-[75px] max-md:mr-[55px]'>TBA</div>
        <div>TBA</div>
      </div>
      <div className='absolute top-[59px] left-[170px] text-[12px] max-md:top-[30px] max-md:left-[71px] max-md:text-[10px]'>
        <div>Coming Soon</div>
        <div className='flex items-center gap-[4px] max-md:gap-[4px]'>
          <div className='linear-text'>Get the OG Point Boost Pass</div>
          <div style={{ background: 'linear-gradient(212.52deg, rgba(152, 132, 255, 0.1) 6.66%, rgba(102, 205, 255, 0.1) 58.54%, rgba(5, 211, 148, 0.1) 97.1%)' }} className='px-[8px] py-[2px] rounded-full flex items-center justify-center text-white font-bold max-md:px-[6px] max-md:py-[1px] max-md:rounded-[8px]'>
            <Image src="/points.svg" alt="point-boost-icon" className='w-[18px] h-[18px] max-md:w-[12px] max-md:h-[12px]' width={18} height={18} />
            <span className='ml-[4px] max-md:ml-[2px] linear-text'>Point+10%</span>
          </div>
        </div>
      </div>
      <div className='absolute top-[109px] left-[170px] flex items-center max-md:top-[67px] max-md:left-[71px]'>
        <Button
          variant="default"
          className="h-8 w-[121px] max-md:h-[28px] max-md:w-[110px] rounded-full bg-[#141414] px-4 max-md:px-[10px] py-0 text-xs max-md:text-[12px] font-semibold text-white hover:bg-[#141414]/90"
        >
          Free Mint
        </Button>
        {/* <div className='flex items-center gap-[4px] ml-[12px] max-md:ml-[6px]'>
          <DateCountDown targetDate={null} />
        </div> */}
        <span className='italic font-bold ml-[8px] max-md:ml-[6px] text-[#05D394] text-[12px] max-md:text-[10px]'>🔥 Limited Time !</span>
      </div>
    </div>
  )
}

export const FirstSection: React.FC = () => {
  return (
    <div className="!w-full mt-[34px] pb-[80px] max-md:pb-[20px] relative">
      <DotBg className='absolute top-[-167px] right-0 w-[256px] h-[340px] max-md:w-[256px] max-md:h-[144px] max-md:top-[-20px]' />
      <DotBg className='max-md:hidden absolute bottom-[45px] left-[-54px] w-[256px] h-[340px] max-md:w-[256px] max-md:h-[144px] max-md:bottom-[0px]' />
      <div className='mx-auto w-[1280px] max-md:w-[311px] h-[584px] max-md:h-auto relative overflow-hidden rounded-[24px]'>
        <Image src="/section-1-bg.svg" alt="section-1-bg" className='max-md:hidden absolute top-0 left-0 w-[1280px] h-[584px]' width={1280} height={584} />
        <Image src="/section-1-bg-mobile.svg" alt="section-1-bg" className='hidden max-md:block relative top-0 left-0 max-md:w-[311px] max-md:h-auto' width={311} height={407} />
        <video autoPlay loop muted src="/video.mp4" className='aspect-auto absolute z-11 bottom-[0px] right-[0px] w-auto h-[280px] max-md:w-full max-md:h-auto max-md:rounded-[24px]' />
        <div className='relative z-10 w-full h-full max-md:absolute max-md:top-0 max-md:left-0'>
          <div className='pt-[48px] pl-[48px] max-md:pt-[48px] max-md:px-[16px]'>
            <div className='w-[500px] max-md:w-auto'>
              <div className='text-[#AAB8C1] text-[20px] font-medium mb-[24px] max-md:text-[14px] max-md:mb-[8px]'>Try Earning in an Easy Way</div>
              <div className='text-[#141414] text-[40px] font-medium leading-[1.2] max-md:text-[24px] max-md:leading-[1.2]'>One-click implementation of professional strategies to maximize returns.</div>
            </div>
            <div className='text-[20px] mt-[24px] max-md:text-[14px] max-md:mt-[8px]'>
              <div className='flex items-center gap-[6px] max-md:flex-wrap'>
                <div className='w-[220px] text-[#AAB8C1] max-md:w-auto'>Maximize staking yield</div>
                <div className='flex items-center gap-[6px] max-md:gap-[4px]'>
                  <div className='w-auto font-medium max-md:w-auto'>WBTC/BTC/ETH</div>
                  <div className='text-[#05d394] font-bold max-md:w-auto w-[250px]'>APR: 11~25%↑</div>
                </div>
              </div>
              <div className='flex items-center gap-[6px] max-md:mt-[8px] max-md:flex-wrap'>
                <div className='w-[220px] text-[#AAB8C1] max-md:w-auto'>Leverage with hedging</div>
                <div className='flex items-center gap-[6px] max-md:gap-[4px]'>
                  <div className='w-auto font-medium max-md:w-auto'>USDC/USDT</div>
                  <div className='text-[#765bff] font-bold max-md:w-auto w-[250px]'>APR: 30~50%↑</div>
                </div>
              </div>
            </div>
            <BoostCard className='max-md:hidden mt-[40px] w-[482px] h-[164px]' />
          </div>
          {/* links */}
          <div className='max-md:hidden absolute top-[164px] right-[32px] flex items-center justify-center gap-[24px]'>
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

      <BoostCard className='hidden max-md:block max-md:w-[311px] max-md:h-[105px] max-md:mx-auto max-md:mt-[12px]' />
    </div>
  );
};