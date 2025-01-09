import React from "react";
import Image from "next/image";
import { ArrowUp, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DotBg from "@/components/DotBg";
import { G2Chart } from "./G2";
import Star from "@/components/icons/Star";
import FadeIn from "@/components/FadeIn";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';


const strategies = [
  {
    icon: <Image src="/strategy-1.svg" alt="strategy-1" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Leverage Returns",
    description:
      "Use native assets to obtain 0 to 0.7x leverage through lending protocols, holding native assets while earning additional returns, thus improving capital efficiency."
  },
  {
    icon: <Image src="/strategy-2.svg" alt="strategy-2" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Dynamic Risk Control",
    description:
      "This risk control strategy monitors the market in real-time, dynamically adjusts leverage, and reserves a capital buffer to help users redeem assets and returns early during extreme volatility, preventing liquidation.",
  },
  {
    icon: <Image src="/strategy-3.svg" alt="strategy-3" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Major Assets' Real Yields",
    description:
      "The strategy ensures users earn real USDC returns and Capy Points, providing early investors with dual benefits. Minting and burning are conducted on a 1:1 basis with real assets to ensure exchange rate stability.",
  },
];

const strategies2 = [
  {
    icon: <Image src="/strategy-4.svg" alt="strategy-1" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Active risk control",
    description:
      "This strategy uses 0 to 1x leverage and strictly controls single-trade losses, significantly reducing liquidation risk. The active risk control system will halt trading during periods of low market volatility and resume trading once volatility picks up.",
  },
  {
    icon: <Image src="/strategy-5.svg" alt="strategy-2" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Volatility Capture Algorithm",
    description:
      "The algorithm leverages the price fluctuation data from the previous day to calculate today's daily volatility, excess volatility, and extreme volatility, capturing the price spread between excess and extreme volatility.",
  },
  {
    icon: <Image src="/strategy-6.svg" alt="strategy-3" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Antifragile",
    description:
      "This strategy exhibits lasting effectiveness and broad adaptability. As a result, it can adjust to most market conditions and has the potential to evolve into various investment portfolios and hedging strategies, offering more stable excess returns.",
  },
];

function RightOfBlock1() {
  return (
    <div className="absolute z-10 top-[48px] right-[48px] w-[624px] space-y-9">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 space-y-1">
            <h2 className="text-2xl font-semibold text-[#141414]">
              Performance
            </h2>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-[#765bff] bg-gradient-to-b from-[#765bff]/40 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                USDC Accumulated Yield
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/other.svg" alt="other" className="w-[24px] h-[20px]" width={24} height={20} />
              <span className="text-sm font-semibold text-[#141414]/80">
                Point Yield
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[228px]">
          <G2Chart className="w-full h-full" color="#765bff" fromColor="#765bff" toColor="#F3F5F8" />
          <div className="text-right text-sm my-2 text-[#AAB8C1]">*Performance Of Deposit Income Per 10000 USDC</div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-base font-semibold text-[#141414]">
          Strategy Overview
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {strategies.map((strategy, index) => (
            <div key={index} className="border-none shadow-none">
              <CardContent className="space-y-2 p-0">
                {strategy.icon}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[#141414]">
                    {strategy.title}
                  </h4>
                  <p className="text-xs text-[#141414]/40 leading-[18px]">
                    {strategy.description}
                  </p>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


function RightOfBlock2() {
  return (
    <div className="absolute z-10 top-[48px] left-[48px] w-[624px]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 space-y-1">
            <h2 className="text-2xl font-semibold text-[#141414]">
              Performance
            </h2>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-[#05D394] bg-gradient-to-b from-[#05D394]/40 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                USDC Yield
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-dashed border-[#aab8c1] bg-gradient-to-b from-[#1e1e1e]/20 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                Point Yield
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[228px">
          <Image src="/coming-soon.svg" alt="other" className="mx-auto w-[359px] h-[252px]" width={359} height={252} />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#141414] mb-[16px]">
          Strategy Overview
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {strategies2.map((strategy, index) => (
            <div key={index} className="border-none shadow-none">
              <CardContent className="space-y-2 p-0">
                {strategy.icon}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[#141414]">
                    {strategy.title}
                  </h4>
                  <p className="text-xs text-[#141414]/40 leading-[18px]">
                    {strategy.description}
                  </p>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Data for feature badges
const features1 = [
  <div className="inline-flex gap-[4px] items-center" key="0">
    <Star className="block w-[14px] h-[px]" />Dynamic Leverage
  </div>,
  <>Maximize Returns</>,
  <>Low-Risk and Stable</>,
  <>Native Asset Appreciation</>,
];

const features2 = [
  <div className="inline-flex gap-[4px] items-center" key="0">
    <Star className="block w-[14px] h-[px]" />Volatility Capture Algorithm
  </div>,
  "Medium Risk",
  "Volatility Strategy",
];

export default function ThirdSection() {
  const tooltipView = (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="relative z-[1000] underline underline-offset-4 decoration-dashed font-bold">Hyperliquidity (HLP)</span>
        </TooltipTrigger>
        <TooltipContent className="w-[400px] bg-black text-white text-xs">
          <span>Hyperliquid is a decentralized exchange, with a TVL of $336,338,198 as of January 7, 2025. The HLP pool provides liquidity to Hyperliquid, earning liquidation fees, transaction fees, and more. For more information about HLP, we encourage investors to read additional materials and conduct further research.</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  const infoIconView = (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="w-4 h-4 text-[#765bff]" />
        </TooltipTrigger>
        <TooltipContent className="w-[400px] bg-black text-white text-xs">
          <div>This yield represents the USDC deposit rate, which is influenced by various factors, and fluctuations are normal. We will continue to update the data regularly. *If the lending rate exceeds the deposit rate, a loss may occur, and the product will be automatically redeemed.</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return (
    <div className="!w-full h-[1792px] px-[80px] pt-[80px]">
      <header className="flex flex-col w-full max-w-[1280px] gap-2.5 mb-[86px]">
        <FadeIn className="flex items-baseline font-medium text-foreground w-[680px]">
          <span className="text-[44px] leading-[52.8px]">Strategy Library</span>
          <span className="ml-2 text-2xl leading-[28.8px]">(V1.0)</span>
        </FadeIn>

        <p className="text-sm text-foreground/40 tracking-[0.14px] leading-[22.4px]">
          Use the lead trading strategy, combined with Easy Defi, to achieve
          excess annualized returns.
        </p>
      </header>

      <div className="relative w-[1280px] h-[672px]">
        <div className="absolute z-11 left-[56px] top-[32px] flex items-end">
          <Image src="/tree.svg" alt="tree" className="w-[88px] h-[92px]" width={88} height={92} />
          <Image src="/fence.svg" alt="fence" className="w-[107px] h-[46px] ml-[16px]" width={107} height={46} />
          <Image src="/grass.svg" alt="grass" className="w-[26px] h-[24px] ml-[30px]" width={26} height={24} />
        </div>
        <DotBg className="absolute z-1 top-[-14px] left-[380px] w-[256px] h-[172px]" />
        <Image src="/section-3-bg-1.svg" alt="frame" className="absolute z-2 top-0 left-0 w-[1280px] h-[672px]" width={1280} height={672} />
        <Card className="absolute z-10 top-[172px] left-[48px] w-[512px] p-8 border-none">
          <CardContent className="flex flex-col gap-4 p-0">
            <div className="flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#141414] rounded-lg">
                    <span className="font-semibold text-white text-xl">01</span>
                  </div>
                  <h2 className="font-semibold text-[#141414] text-[22px] leading-8">
                    Conservative Strategy
                  </h2>
                </div>
                <span className="flex-nowrap text-nowrap text-xs font-medium bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </div>

              <div className="my-[12px] font-semibold text-[#765BFF] text-[12px]">Retain Native Asset Gains + Additional Capital Efficiency</div>

              <div className="flex flex-col gap-3">
                <div className="text-[#141414] text-xs tracking-[0.12px] leading-[19.2px]">
                  This strategy offers an efficient way to generate stable, high
                  returns from mainstream native tokens. Using a unique risk control
                  system, it dynamically adjusts leverage and provides liquidity to {tooltipView}, earning fees from user transactions. Enjoy
                  stable, sustained high returns and maximize capital efficiency
                  with 24/7 risk control system monitoring, without the need for
                  complex cross-platform operations.
                </div>

                <div className="flex flex-wrap gap-2">
                  {features1.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#765bff1a] text-[#765bff] h-7 px-2 !rounded-[4px] font-normal"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="relative flex items-baseline gap-[6px]">
                  <span className="text-[#765bff] text-4xl font-bold">18.27%</span>
                  <div className="inline-flex items-center gap-1">
                    <span className="text-[#765bff] text-lg font-bold">APR</span>
                    {infoIconView}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-b from-[rgba(152,132,255,0.1)] via-[rgba(101,204,255,0.1)] to-[rgba(5,211,148,0.1)]">
                    <Image src="/usdt.svg" alt="usdc" className="w-[18px] h-[18px]" width={18} height={18} />
                    <span className="font-semibold text-sm">USDC+</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/points.svg" alt="Easy" className="w-[18px] h-[18px]" width={18} height={18} />
                      <span className="font-semibold text-sm bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                        Capy Point
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-sm opacity-60">Support:</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/btc.svg" alt="btc" className="w-5 h-5" width={20} height={20} />
                      <Image src="/eth.svg" alt="eth" className="w-5 h-5" width={20} height={20} />
                      <Image src="/usdt.svg" alt="usdt" className="w-[18px] h-[18px]" width={18} height={18} />
                      <Image src="/bnb.svg" alt="bnb" className="w-5 h-5" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-xs opacity-60">
                  e.g. 1 BTC per month earned
                </span>
                <div className="flex items-center gap-0.5">
                  <span className="font-semibold text-sm">
                    Asset Price Increase + Point
                  </span>
                  <div className="flex items-center">
                    <span className="font-semibold text-sm text-[#765bff]">
                      +$630
                    </span>
                    <ArrowUp className="w-5 h-5 text-[#765bff]" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <RightOfBlock1 />
      </div>

      <div className="relative w-[1280px] h-[672px] mt-[56px]">
        <div className="absolute z-11 right-[32px] top-[32px] flex items-end">
          <Image src="/pet.svg" alt="pet" className="w-[65px] h-[65px mr-[24px]" width={65} height={65} />
          <Image src="/tree.svg" alt="tree" className="w-[88px] h-[92px]" width={88} height={92} />
        </div>
        <DotBg className="absolute z-1 top-[-14px] right-[380px] w-[256px] h-[172px]" />
        <Image src="/section-3-bg-2.svg" alt="frame" className="absolute z-2 top-0 left-0 w-[1280px] h-[672px]" width={1280} height={672} />
        <Card className="absolute z-10 top-[172px] right-[48px] w-[512px] p-8 border-none">
          <CardContent className="flex flex-col gap-4 p-0">
            <div className="flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#141414] rounded-lg">
                    <span className="font-semibold text-white text-xl">02</span>
                  </div>
                  <h2 className="font-semibold text-[#141414] text-[22px] leading-8">
                    Volatility Capture Strategy
                  </h2>
                </div>
              </div>

              <div className="my-[12px] font-semibold text-[#05D394] text-[12px]">Retain Native Asset Gains +Intraday Volatility Returns</div>

              <div className="flex flex-col gap-3">
                <p className="text-[#141414] text-xs tracking-[0.12px] leading-[19.2px]">
                  This strategy offers an efficient method to achieve stable and high returns from mainstream native tokens. It utilizes advanced hedging strategies and dynamic low-leverage (up to 3x) to provide liquidity to DeFi and other products, earning fees from user transactions. Compared to Product 1, this strategy employs hedging and diversification to lower overall risk, giving users holding USDC the opportunity to achieve over 50% annualized returns, regardless of market conditions.
                </p>

                <div className="flex flex-wrap gap-2">
                  {features2.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#43d0981a] text-[#05D394] h-7 px-2 !rounded-[4px] font-normal"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="relative flex items-baseline gap-[6px]">
                  <span className="text-[#05D394] text-4xl font-bold">108%</span>
                  <div className="inline-flex items-center gap-1">
                    <span className="text-[#05D394] text-lg font-bold">APR</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-b from-[rgba(152,132,255,0.1)] via-[rgba(101,204,255,0.1)] to-[rgba(5,211,148,0.1)]">
                    <Image src="/usdt.svg" alt="usdc" className="w-[18px] h-[18px]" width={18} height={18} />
                    <span className="font-semibold text-sm">USDC+</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/points.svg" alt="Easy" className="w-[18px] h-[18px]" width={18} height={18} />
                      <span className="font-semibold text-sm bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                        Capy Point
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-sm opacity-60">Support:</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/btc.svg" alt="btc" className="w-5 h-5" width={20} height={20} />
                      <Image src="/eth.svg" alt="eth" className="w-5 h-5" width={20} height={20} />
                      <Image src="/usdt.svg" alt="usdt" className="w-[18px] h-[18px]" width={18} height={18} />
                      <Image src="/bnb.svg" alt="bnb" className="w-5 h-5" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-xs opacity-60">
                  e.g. 1 BTC per month earned
                </span>
                <div className="flex items-center gap-0.5">
                  <span className="font-semibold text-sm">
                    Price Increase + Point
                  </span>
                  <div className="flex items-center">
                    <span className="font-semibold text-sm text-[#05D394]">
                      +$9000
                    </span>
                    <ArrowUp className="w-5 h-5 text-[#05D394]" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <RightOfBlock2 />
      </div>

      <div className="flex items-center justify-center gap-6 w-full mt-[56px]">
        <Separator className="w-24" />
        <h2 className="text-2xl font-semibold text-[#141414] leading-7 whitespace-nowrap">
          AI strategies are in preparation
        </h2>
        <Separator className="w-24" />
      </div>
    </div>
  );
}