import React from 'react'
import Image from 'next/image';

function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" className="flex items-center text-[16px] font-semibold text-[#AAB8C1]">
      {children}
      <Image src="/footer-nav.svg" alt="nav" className='w-[16px] h-[16px] max-md:w-[12px] max-md:h-[12px]' width={16} height={16} />
    </a>
  )
}

export default function Footer() {
  return (
    <div className='flex max-md:hidden items-center justify-between mx-[80px] pb-[25px]'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <Image src="/logo.svg" alt="logo" className='w-[32px] h-[32px] max-md:w-[32px] max-md:h-[32px]' width={32} height={32} />
          <div className='text-[22px] font-semibold ml-[8px]'>CapyMax</div>
        </div>

        <div className='flex items-center gap-[24px] ml-[20px] italic'>
          <NavLink href="https://capymax.finance/terms">Terms</NavLink>
          <NavLink href="https://capymax.finance/privacy">Privacy</NavLink>
        </div>
      </div>
      <div className='italic text-[14px] text-[#AAB8C1]'>©2025 CapyMax Finance All Rights Reserved.</div>
    </div>
  )
}
