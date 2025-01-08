'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from '@/components/ui/tooltip';
import { useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Button } from './ui/button';

function middleEllipsis(address: string) {
  return address.slice(0, 4) + '...' + address.slice(-4);
}

function Nav({ children, href }: { children: React.ReactNode; href: string }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <a
      href={href}
      className="text-black px-3 py-2 text-[15px] flex items-center gap-1 font-semibold hover:text-[#765BFF]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      <Image
        src="/nav.svg"
        alt="nav"
        className='w-[16px] h-[16px]'
        style={{ filter: isHover ? 'brightness(0) saturate(100%) invert(50%) sepia(57%) saturate(6742%) hue-rotate(234deg) brightness(100%) contrast(102%)' : 'none' }} width={16} height={16} />
    </a>
  )
}

export const Navbar: React.FC = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount()
  const { openChainModal } = useChainModal();
  const { openAccountModal } = useAccountModal();

  return (
    <nav className="fixed top-0 left-0 w-full h-[72px] flex justify-between items-center px-20 z-30 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" className='w-[32px] h-[32px]' width={32} height={32} />
        <span className="text-black text-xl font-semibold">CapyMax</span>
      </div>

      {/* 导航链接 */}
      <div className="flex items-center gap-4">
        <Tooltip content={<div className='rounded-full bg-[#F3F5F8] px-3 py-1 text-[12px] font-semibold'>COMING SOON...</div>}>
          <a href="#" className="text-black px-3 py-2 text-[15px] flex items-center gap-1 font-semibold opacity-20">
            EARN
          </a>
        </Tooltip>
        <Nav href="https://x.com/Capy_Max">TWITTER</Nav>
        {/* <Nav href="/">DOC</Nav> */}

        {/* 积分显示 */}
        {isConnected && address && (
          <div
            className="flex items-center gap-[2px] bg-[#14141405] border border-[#1414140A] pl-3 rounded-[40px] text-[15px] text-black"
          >
            <div className='flex items-center gap-2 font-semibold ml-1 mr-2' onClick={() => openChainModal?.()}>
              <Image src="/points.svg" className='w-[20px] h-[20px]' alt="points" width={20} height={20} />
              <span>Points: -</span>
            </div>
            <button
              className="bg-[#EEF1F3] border border-[#AAB8C1] rounded-[88px] px-4 py-2 flex items-center gap-1 text-[#798186] text-[15px]"
              onClick={() => openAccountModal?.()}
            >
              {middleEllipsis(address)}
            </button>
          </div>
        )}

        {/* 钱包按钮 */}
        {!isConnected && (
          <Button
            variant="default"
            className="bg-[#141414] hover:bg-[#765BFF] rounded-[88px] gap-1 h-10 px-4"
            onClick={() => openConnectModal?.()}
          >
            <Image src="/wallet.svg" alt="wallet" className="w-6 h-6" width={24} height={24} />
            <span className="font-semibold text-xs">CONNECT WALLET</span>
          </Button>
        )}
      </div>
    </nav>
  );
};