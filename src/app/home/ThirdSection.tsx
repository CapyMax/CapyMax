import React from "react";
import Image from "next/image";
import { ArrowUp, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DotBg from "@/components/DotBg";
import { G2Chart } from "./G2";

// Data for strategy cards
const strategies = [
  {
    icon: <Image src="/strategy-1.svg" alt="strategy-1" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Leverage Returns",
    description:
      "Use Native Assets To Obtain 0 To 0.7x Leverage Through Lending Protocols, Holding Native Assets While Earning Additional Returns, Thus Improving Capital Efficiency.",
  },
  {
    icon: <Image src="/strategy-2.svg" alt="strategy-2" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Institutional Risk Control",
    description:
      "This Risk Control Strategy Monitors The Market In Real-time, Dynamically Adjusts Leverage, And Reserves A Capital Buffer To Help Users Redeem Assets And Returns Early During Extreme Volatility, Preventing Liquidation.",
  },
  {
    icon: <Image src="/strategy-3.svg" alt="strategy-3" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Real Returns From Major Coins",
    description:
      "The Strategy Ensures Users Earn Real Usdc Returns And Easy Pontis, Providing Early Investors With Dual Benefits. Minting And Burning Are Conducted On A 1:1 Basis With Real Assets To Ensure Exchange Rate Stability.",
  },
];

const strategies2 = [
  {
    icon: <Image src="/strategy-1.svg" alt="strategy-1" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Leverage Returns",
    description:
      "Use native assets to obtain 0 to 3x leverage through lending protocols, holding native assets while earning additional returns, thus improving capital efficiency."
  },
  {
    icon: <Image src="/strategy-2.svg" alt="strategy-2" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Institutional Risk Control",
    description:
      "This risk control strategy monitors the market in real-time, dynamically adjusts leverage, and reserves a capital buffer to help users redeem assets and returns early during extreme volatility, preventing liquidation.",
  },
  {
    icon: <Image src="/strategy-3.svg" alt="strategy-3" className="w-[32px] h-[32px]" width={32} height={32} />,
    title: "Real Returns From Major Coins",
    description:
      "Here's a refined translation:\n This product completely hedges against asset price fluctuation risks, remaining unaffected by market trends. It aims to achieve high returns consistently across bull and bear markets.",
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
            <p className="text-sm text-[#141414]/60">30 Days APR 56%</p>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-[#765bff] bg-gradient-to-b from-[#765bff]/40 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                Easy
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-dashed border-[#aab8c1] bg-gradient-to-b from-[#1e1e1e]/20 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                Other
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-dashed border-[#aab8c1] bg-gradient-to-b from-[#1e1e1e]/20 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                Other
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[228px]">
          <G2Chart className="w-full h-full" color="#765bff" fromColor="#765bff" toColor="#F3F5F8" />
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
    <div className="absolute z-10 top-[48px] left-[48px] w-[624px] space-y-9">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 space-y-1">
            <h2 className="text-2xl font-semibold text-[#141414]">
              Performance
            </h2>
            <p className="text-sm text-[#141414]/60">30 Days APR 56%</p>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-[#05D394] bg-gradient-to-b from-[#05D394]/40 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                Easy
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-5 border-t-2 border-dashed border-[#aab8c1] bg-gradient-to-b from-[#1e1e1e]/20 to-transparent" />
              <span className="text-sm font-semibold text-[#141414]/80">
                Other
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[228px]">
          <G2Chart className="w-full h-full" color="#05D394" fromColor="#05D394" toColor="#F3F5F8" />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-base font-semibold text-[#141414]">
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
  "Maximize Returns",
  "Low-risk And Stable",
  "Native Asset Appreciation",
  "Strict Risk Control",
];

const features2 = [
  "Maximize Returns",
  "Low-risk And Stable",
  "Neutral Strategy",
  "Strict Risk Control",
];

export default function ThirdSection() {
  return (
    <div className="!w-full h-[1792px] px-[80px] pt-[80px]">
      <header className="flex flex-col w-full max-w-[1280px] gap-2.5 mb-[86px]">
        <h1 className="flex items-baseline font-medium text-foreground">
          <span className="text-[44px] leading-[52.8px]">Strategy Library</span>
          <span className="ml-2 text-2xl leading-[28.8px]">(V1.0)</span>
        </h1>

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
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#141414] rounded-lg">
                    <span className="font-semibold text-white text-xl">01</span>
                  </div>
                  <h2 className="font-semibold text-[#141414] text-[32px] leading-8">
                    CONSERVATIVE STRATEGY 1
                  </h2>
                </div>
                <span className="flex-nowrap text-nowrap text-xs font-medium bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <p className="opacity-80 text-xs tracking-[0.12px] leading-[19.2px]">
                  This strategy offers an efficient way to generate stable, high
                  returns from mainstream native tokens. Using a unique risk control
                  system, it dynamically adjusts leverage and provides liquidity to
                  Hyperliquidity (HLP), earning fees from user transactions. Enjoy
                  stable, sustained high returns and maximize capital efficiency
                  with 24/7 risk control system monitoring, without the need for
                  complex cross-platform operations.
                </p>

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
                  <span className="text-[#765bff] text-4xl font-bold">21.61%</span>
                  <div className="inline-flex items-center gap-1">
                    <span className="text-[#765bff] text-lg font-bold">APR</span>
                    <Info className="w-4 h-4 text-[#765bff]" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-b from-[rgba(152,132,255,0.1)] via-[rgba(101,204,255,0.1)] to-[rgba(5,211,148,0.1)]">
                    <span className="font-semibold text-sm">Yield: USDC+</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/points.svg" alt="Easy" className="w-[16px] h-[16px]" width={16} height={16} />
                      <span className="font-semibold text-sm bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                        Easy Point
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-sm opacity-60">Support:</span>
                    <div className="flex gap-0.5">
                      <Image src="/btc.svg" alt="btc" className="w-5 h-5" width={20} height={20} />
                      <Image src="/eth.svg" alt="eth" className="w-5 h-5" width={20} height={20} />
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
                    <span className="font-semibold text-sm text-[#765bff]">
                      +$1,750
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
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#141414] rounded-lg">
                    <span className="font-semibold text-white text-xl">01</span>
                  </div>
                  <h2 className="font-semibold text-[#141414] text-[32px] leading-8">
                    NAME
                  </h2>
                </div>
                <span className="flex-nowrap text-nowrap text-xs font-medium bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <p className="opacity-80 text-xs tracking-[0.12px] leading-[19.2px]">
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
                  <span className="text-[#05D394] text-4xl font-bold">21.61%</span>
                  <div className="inline-flex items-center gap-1">
                    <span className="text-[#05D394] text-lg font-bold">APR</span>
                    <Info className="w-4 h-4 text-[#05D394]" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-b from-[rgba(152,132,255,0.1)] via-[rgba(101,204,255,0.1)] to-[rgba(5,211,148,0.1)]">
                    <span className="font-semibold text-sm">Yield: USDC+</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/points.svg" alt="Easy" className="w-[16px] h-[16px]" width={16} height={16} />
                      <span className="font-semibold text-sm bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                        Easy Point
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-sm opacity-60">Support:</span>
                    <div className="flex gap-0.5">
                      <Image src="/btc.svg" alt="btc" className="w-5 h-5" width={20} height={20} />
                      <Image src="/eth.svg" alt="eth" className="w-5 h-5" width={20} height={20} />
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
                      +$1,750
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
          Other AI strategies are in preparation
        </h2>
        <Separator className="w-24" />
      </div>
    </div>
  );
}