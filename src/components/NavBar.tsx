"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage, useAccountEffect } from "wagmi";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Button } from "./ui/button";

function middleEllipsis(address: string) {
  return address.slice(0, 4) + "..." + address.slice(-4);
}

function NavLink({
  children,
  href,
  hasIcon,
}: {
  children: React.ReactNode;
  href: string;
  hasIcon: boolean;
}) {
  const isEarnBg = useSelector((state: State) => state.bgHeader);
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      {hasIcon ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isEarnBg ? "text-white" : "text-black"
          } px-3 max-md:px-[12px] py-2 max-md:py-[12px] text-[15px] max-md:text-[14px] flex items-center gap-1 max-md:gap-[4px] font-semibold hover:text-[#765BFF]`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {children}
          <Image
            src="/nav.svg"
            alt="nav"
            className="w-[16px] h-[16px] max-md:w-[12px] max-md:h-[12px]"
            style={{
              filter: isHover
                ? "brightness(0) saturate(100%) invert(50%) sepia(57%) saturate(6742%) hue-rotate(234deg) brightness(100%) contrast(102%)"
                : "none",
            }}
            width={16}
            height={16}
            aria-hidden="true"
          />
        </a>
      ) : (
        <Link
          href="/earn"
          className={`${
            isEarnBg ? "text-white" : "text-black"
          } px-3 max-md:px-[12px] py-2 max-md:py-[12px] text-[15px] max-md:text-[14px] flex items-center gap-1 max-md:gap-[4px] font-semibold hover:text-[#765BFF]`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {children}
        </Link>
      )}
    </>
  );
}

const message = "Connect by CapyMax";

function usePoints() {
  const [points, setPoints] = useState<number | null>(null);
  const { address, isConnected, connector } = useAccount();
  const { signMessage } = useSignMessage();
  const handleConnect = (options: { address: string; signature: string }) => {
    const promise = fetch(`https://capymaxpro.xyz/api/wallet/connect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...options, message }),
    });

    promise
      .then((res) => res.json())
      .then((data) => setPoints(data.user.total_points)) // { user: { total_points: number }, token: string }
      .catch(() => alert("Failed to connect points"));
  };

  useAccountEffect({
    onConnect(data) {
      signMessage(
        { message, connector },
        {
          onSuccess: (signature) =>
            handleConnect({ address: data.address, signature }),
          onError: (error) => console.log(error.message),
        }
      );
    },
    onDisconnect() {
      setPoints(null);
    },
  });

  return { points, isConnected, address };
}

function WalletButton() {
  const mounted = useIsMounted();
  const isEarnBg = useSelector((state: State) => state.bgHeader);
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { points, isConnected, address } = usePoints();

  const rightView =
    isConnected && address ? (
      <button
        className="bg-[#EEF1F3] border border-[#AAB8C1] rounded-[88px] max-md:rounded-[88px] px-4 py-2 max-md:px-[12px] max-md:py-[8px] flex items-center gap-1 text-[#798186] text-[15px] max-md:text-[14px]"
        onClick={() => openAccountModal?.()}
      >
        <span>{middleEllipsis(address)}</span>
      </button>
    ) : (
      <Button
        variant="default"
        className="bg-[#141414] hover:bg-[#765BFF] rounded-[88px] max-md:rounded-[88px] gap-1 max-md:gap-[4px] h-10 max-md:h-[40px] px-4 max-md:px-[12px]"
        onClick={() => openConnectModal?.()}
      >
        <Image
          src="/wallet.svg"
          alt="wallet"
          className="w-6 h-6 max-md:w-[24px] max-md:h-[24px]"
          width={24}
          height={24}
        />
        <span className="font-semibold text-xs max-md:text-[12px]">
          CONNECT WALLET
        </span>
      </Button>
    );

  return (
    <div className="flex items-center gap-[2px] max-md:gap-[4px] bg-[#14141405] border border-[#1414140A] pl-3 max-md:pl-[12px] rounded-[40px] max-md:rounded-[40px] text-[15px] max-md:text-[14px] text-black">
      <div className="flex items-center gap-2 font-semibold ml-1 mr-2 max-md:ml-[4px] max-md:mr-[8px]">
        <Image
          src="/points.svg"
          className={`w-[20px] h-[20px] max-md:w-[20px] max-md:h-[20px]`}
          alt="points"
          width={20}
          height={20}
        />
        <span className={`${isEarnBg ? "text-white" : "text-black"} `}>
          Points: {points ?? "-"}
        </span>
      </div>
      {/* {rightView} */}
      {mounted ? rightView : null}
    </div>
  );
}

function NavLinkItems() {
  return (
    <>
      {/* <Tooltip content={<div className='rounded-full bg-[#F3F5F8] px-3 py-1 text-[12px] font-semibold'>COMING SOON...</div>}>
        <a href="#" className="text-black px-3 max-md:px-[12px] py-2 max-md:py-[12px] text-[15px] max-md:text-[14px] flex items-center gap-1 font-semibold opacity-20">
          EARN
        </a>
      </Tooltip> */}
      <NavLink href="" hasIcon={false}>
        EARN
      </NavLink>
      <NavLink href="https://x.com/Capy_Max" hasIcon={true}>
        TWITTER
      </NavLink>
      {/* <Nav href="/">DOC</Nav> */}
    </>
  );
}
interface State {
  bgHeader: boolean;
}
export function NavBarDesktop() {
  const isEarnBg = useSelector((state: State) => state.bgHeader);
  const [isOpen, setIsOpen] = useState(false);
  const menuIcon = !isOpen ? (
    <Image
      src="/menu.svg"
      alt="menu"
      className="w-[24px] h-[24px] max-md:w-[24px] max-md:h-[24px]"
      width={24}
      height={24}
      onClick={() => setIsOpen(!isOpen)}
    />
  ) : (
    <Image
      src="/close.svg"
      alt="close"
      className="w-[24px] h-[24px] max-md:w-[24px] max-md:h-[24px]"
      width={24}
      height={24}
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  return (
    <nav
      className={`sticky top-0 z-30 w-full ${isOpen ? "max-md:h-dvh" : ""} ${
        isEarnBg ? "bg-black" : "bg-white"
      }`}
    >
      <div className="h-[72px] max-md:h-[72px] flex justify-between items-center px-20 max-md:px-[32px]">
        <div className="flex items-center gap-2 max-md:gap-[8px]">
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-[32px] h-[32px] max-md:w-[32px] max-md:h-[32px] cursor-pointer"
            width={32}
            height={32}
            onClick={() => (window.location.href = "/")}
          />
          <span
            className={`${
              isEarnBg ? "text-white" : "text-black"
            } text-black text-xl max-md:text-[22px] font-semibold`}
          >
            CapyMax
          </span>
        </div>

        <div className="max-md:block hidden">{menuIcon}</div>

        {/* 导航链接 */}
        <div className="flex items-center gap-4 max-md:hidden">
          <NavLinkItems />
          <WalletButton />
        </div>
      </div>

      {/* 移动端导航栏 */}
      {isOpen && (
        <div className="hidden max-md:flex flex-col max-md:h-[calc(100dvh-72px)]">
          <div className="grow shrink-0 max-md:px-[32px]">
            <NavLinkItems />
          </div>
          <div className="flex-0">
            <div className="max-md:mb-[32px] flex justify-center">
              <WalletButton />
            </div>
            <div className="flex justify-center items-center max-md:gap-[20px] max-md:mb-[20px]">
              <div className="max-md:w-[40px] max-md:h-[40px] bg-[#141414] max-md:rounded-[10px] flex items-center justify-center">
                <Image
                  src="/telegram.svg"
                  alt="link-icon"
                  className="max-md:w-[24px] max-md:h-[24px]"
                  width={24}
                  height={24}
                />
              </div>
              <div className="max-md:w-[40px] max-md:h-[40px] bg-[#141414] max-md:rounded-[10px] flex items-center justify-center">
                <Image
                  src="/twitter.svg"
                  alt="link-icon"
                  className="max-md:w-[24px] max-md:h-[24px]"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Navbar() {
  return <NavBarDesktop />;
}
