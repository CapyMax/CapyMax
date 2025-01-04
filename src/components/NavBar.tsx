import React from 'react';
import Image from 'next/image';
import { Tooltip } from './Tooltip';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[96px] bg-white flex justify-between items-center px-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full" />
        <span className="text-black text-xl font-semibold">CapyMax</span>
      </div>

      {/* 导航链接 */}
      <div className="flex items-center gap-4">
        <Tooltip content={<div className='rounded-full bg-[#1414140a] px-3 py-1 text-[12px] font-semibold'>COMING SOON...</div>}>
          <a href="#" className="text-black px-3 py-2 text-[15px] flex items-center gap-1 font-semibold opacity-20">
            EARN
          </a>
        </Tooltip>
        <a href="#" className="text-black px-3 py-2 text-[15px] flex items-center gap-1 font-semibold">
          TWITTER
          <Image src="/nav.svg" alt="nav" className='w-[16px] h-[16px]' width={16} height={16} />
        </a>
        <a href="#" className="text-black px-3 py-2 text-[15px] flex items-center gap-1 font-semibold">
          DOC
          <Image src="/nav.svg" alt="nav" className='w-[16px] h-[16px]' width={16} height={16} />
        </a>

        {/* 积分显示 */}
        <div className="flex items-center gap-[2px] bg-[#14141405] border border-[#1414140a] pl-3 rounded-[40px] text-[15px] text-black">
          <div className='flex items-center gap-2 font-semibold ml-1 mr-2'>
            <Image src="/points.svg" className='w-[20px] h-[20px]' alt="points" width={20} height={20} />
            <span>Points: 19.98</span>
          </div>
          <button className="bg-[#EEF1F3] border border-[#AABBCC] rounded-[88px] px-4 py-2 flex items-center gap-1 text-[#7A838A] text-[15px]">
            0x727a...9236
          </button>
        </div>

        {/* 钱包按钮 */}
      </div>
    </nav>
  );
};