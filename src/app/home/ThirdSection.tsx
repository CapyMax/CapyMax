import React from "react";
import Image from "next/image";
import { ArrowUp, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { G2Chart } from "./G2";
import Star from "@/components/icons/Star";
import FadeIn from "@/components/FadeIn";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { TextTruncate } from "@/components/TextTruncate";
import { Section3BackgroundContainer1, Section3BackgroundContainer2 } from "@/components/BackgroundContainer";


const strategies = [
  {
    icon: <Image src="/strategy-1.svg" alt="strategy-1" className="w-[32px] h-[32px] max-md:w-[28px] max-md:h-[28px]" width={32} height={32} />,
    title: "Leverage Returns",
    description:
      "Use native assets to obtain 0 to 0.7x leverage through lending protocols, holding native assets while earning additional returns, thus improving capital efficiency."
  },
  {
    icon: <Image src="/strategy-2.svg" alt="strategy-2" className="w-[32px] h-[32px] max-md:w-[28px] max-md:h-[28px]" width={32} height={32} />,
    title: "Dynamic Risk Control",
    description:
      "This risk control strategy monitors the market in real-time, dynamically adjusts leverage, and reserves a capital buffer to help users redeem assets and returns early during extreme volatility, preventing liquidation.",
  },
  {
    icon: <Image src="/strategy-3.svg" alt="strategy-3" className="w-[32px] h-[32px] max-md:w-[28px] max-md:h-[28px]" width={32} height={32} />,
    title: "Major Assets' Real Yields",
    description:
      "The strategy ensures users earn real USDC returns and Capy Points, providing early investors with dual benefits. Minting and burning are conducted on a 1:1 basis with real assets to ensure exchange rate stability.",
  },
];

const strategies2 = [
  {
    icon: <Image src="/strategy-4.svg" alt="strategy-1" className="w-[32px] h-[32px] max-md:w-[28px] max-md:h-[28px]" width={32} height={32} />,
    title: "Active risk control",
    description:
      "This strategy uses 0 to 1x leverage and strictly controls single-trade losses, significantly reducing liquidation risk. The active risk control system will halt trading during periods of low market volatility and resume trading once volatility picks up.",
  },
  {
    icon: <Image src="/strategy-5.svg" alt="strategy-2" className="w-[32px] h-[32px] max-md:w-[28px] max-md:h-[28px]" width={32} height={32} />,
    title: "Volatility Capture Algorithm",
    description:
      "The algorithm leverages the price fluctuation data from the previous day to calculate today's daily volatility, excess volatility, and extreme volatility, capturing the price spread between excess and extreme volatility.",
  },
  {
    icon: <Image src="/strategy-6.svg" alt="strategy-3" className="w-[32px] h-[32px] max-md:w-[28px] max-md:h-[28px]" width={32} height={32} />,
    title: "Antifragile",
    description:
      "This strategy exhibits lasting effectiveness and broad adaptability. As a result, it can adjust to most market conditions and has the potential to evolve into various investment portfolios and hedging strategies, offering more stable excess returns.",
  },
];

function RightOfBlock1() {
  return (
    <div className="absolute z-10 top-[48px] right-[48px] w-[624px] space-y-9 max-md:space-y-[16px] max-md:mt-[32px] max-md:relative max-md:top-[0px] max-md:right-[0px] max-md:w-[279px] max-md:mx-auto max-md:h-auto">
      <div className="space-y-6 max-md:space-y-[16px]">
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[24px]">
          <div className="flex items-center">
            <h2 className="text-2xl max-md:text-[16px] max-md:leading-[22.4px] font-semibold text-[#141414]">
              Performance
            </h2>
          </div>

          <div className="flex items-center gap-[13px] max-md:self-end max-md:gap-[8px]">
            <div className="flex items-center gap-2 max-md:gap-[4px]">
              <div className="w-6 h-5 max-md:w-[18px] max-md:h-[16px] border-t-2 max-md:border-t-[1px] border-[#765bff] bg-gradient-to-b from-[#765bff]/40 to-transparent" />
              <span className="text-sm max-md:text-[10px] max-md:leading-[1.5] font-semibold text-[#141414]/80">
                USDC Accumulated Yield
              </span>
            </div>
            <div className="flex items-center gap-2 max-md:gap-[4px]">
              <Image src="/other.svg" alt="other" className="w-[24px] h-[20px] max-md:w-[18px] max-md:h-[16px]" width={24} height={20} />
              <span className="text-sm max-md:text-[10px] max-md:leading-[1.5] font-semibold text-[#141414]/80">
                Expected Point Yield
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[228px] max-md:h-[225px]">
          <G2Chart className="w-full h-full" color="#765bff" fromColor="#765bff" toColor="#F3F5F8" />
          <div className="text-right text-sm max-md:text-[10px] max-md:leading-[1.5] my-2 max-md:my-[4px] text-[#AAB8C1]">*Performance Of Deposit Income Per 10000 USDC</div>
        </div>
      </div>

      <div className="space-y-6 max-md:!mt-[36px] max-md:mb-[16px]">
        <h3 className="text-base max-md:text-[14px] max-md:leading-[1.5] font-semibold text-[#141414]">
          Strategy Overview
        </h3>

        <div className="grid grid-cols-3 gap-4 max-md:flex max-md:flex-col max-md:gap-[16px]">
          {strategies.map((strategy, index) => (
            <div key={index} className="border-none shadow-none">
              <CardContent className="space-y-2 p-0 max-md:space-y-[8px]">
                {strategy.icon}
                <div className="space-y-3 max-md:space-y-[4px]">
                  <h4 className="text-sm max-md:text-[10px] max-md:leading-[1.5] font-semibold text-[#141414]">
                    {strategy.title}
                  </h4>
                  <p className="text-xs max-md:text-[10px] max-md:leading-[1.5] text-[#141414]/40 leading-[18px]">
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
    <div className="absolute z-10 top-[48px] left-[48px] w-[624px] space-y-9 max-md:space-y-[16px] max-md:mt-[32px] max-md:relative max-md:top-[0px] max-md:left-[0px] max-md:w-[279px] max-md:mx-auto max-md:h-auto">
      <div>
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[24px]">
          <div className="flex items-center">
            <h2 className="text-2xl max-md:text-[16px] max-md:leading-[22.4px] font-semibold text-[#141414]">
              Performance
            </h2>
          </div>

          <div className="flex items-center gap-[13px] max-md:self-end max-md:gap-[8px]">
            <div className="flex items-center gap-2 max-md:gap-[4px]">
              <div className="w-6 h-5 max-md:w-[18px] max-md:h-[16px] border-t-2 max-md:border-t-[1px] border-[#05D394] bg-gradient-to-b from-[#05D394]/40 to-transparent" />
              <span className="text-sm max-md:text-[10px] max-md:leading-[1.5] font-semibold text-[#141414]/80">
                USDC Yield
              </span>
            </div>
            <div className="flex items-center gap-2 max-md:gap-[4px]">
              <div className="w-6 h-5 max-md:w-[18px] max-md:h-[16px] border-t-2 max-md:border-t-[1px] border-dashed border-[#aab8c1] bg-gradient-to-b from-[#1e1e1e]/20 to-transparent" />
              <span className="text-sm max-md:text-[10px] max-md:leading-[1.5] font-semibold text-[#141414]/80">
                Expected Point Yield
              </span>
            </div>
          </div>
        </div>

        <div className="relative max-md:mt-[24px]">
          <Image src="/coming-soon.svg" alt="other" className="mx-auto w-[363px] h-[228px] max-md:w-[282px] max-md:h-[185px]" width={363} height={228} />
        </div>
      </div>

      <div>
        <h3 className="text-base max-md:text-[14px] max-md:leading-[1.5] font-semibold text-[#141414] my-[16px] max-md:my-[16px]">
          Strategy Overview
        </h3>

        <div className="grid grid-cols-3 gap-4 max-md:flex max-md:flex-col max-md:gap-[16px]">
          {strategies2.map((strategy, index) => (
            <div key={index} className="border-none shadow-none">
              <CardContent className="space-y-2 p-0 max-md:space-y-[8px]">
                {strategy.icon}
                <div className="space-y-3 max-md:space-y-[4px]">
                  <h4 className="text-sm max-md:text-[10px] max-md:leading-[1.5] font-semibold text-[#141414]">
                    {strategy.title}
                  </h4>
                  <p className="text-xs max-md:text-[10px] max-md:leading-[1.5] text-[#141414]/40 leading-[18px]">
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
  <div className="inline-flex gap-[4px] items-center max-md:gap-[2px]" key="0">
    <Star className="block w-[14px] h-[px] max-md:w-[12px] max-md:h-[12px]" />Dynamic Leverage
  </div>,
  <>Maximize Returns</>,
  <>Low-Risk and Stable</>,
  <>Native Asset Appreciation</>,
];

const features2 = [
  <div className="inline-flex gap-[4px] items-center max-md:gap-[2px]" key="0">
    <Star className="block w-[14px] h-[px] max-md:w-[12px] max-md:h-[12px]" />Volatility Capture Algorithm
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
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="w-4 h-4 max-md:w-[14px] max-md:h-[14px] text-[#765bff]" />
        </TooltipTrigger>
        <TooltipContent className="w-[400px] bg-black text-white text-xs">
          <div>This yield represents the USDC deposit rate, which is influenced by various factors, and fluctuations are normal. We will continue to update the data regularly. *If the lending rate exceeds the deposit rate, a loss may occur, and the product will be automatically redeemed.</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return (
    <div className="!w-full h-[1792px] px-[80px] pt-[80px] max-md:px-[32px] max-md:py-[32px] max-md:h-auto">
      <header className="flex flex-col w-full max-w-[1280px] gap-2.5 mb-[86px] max-md:overflow-hidden">
        <FadeIn className="flex items-baseline font-medium text-foreground w-[680px] max-md:w-full max-md:mb-[4px] overflow-hidden">
          <span className="text-[44px] leading-[52.8px] max-md:text-[24px] max-md:leading-[33.6px]">Strategy Library</span>
          <span className="ml-2 text-2xl leading-[28.8px] max-md:text-[16px] max-md:leading-[22.4px]">(V1.0)</span>
        </FadeIn>

        <p className="text-sm text-foreground/40 tracking-[0.14px] leading-[22.4px] max-md:text-[12px] max-md:leading-[19.2px]">
          Use the lead trading strategy, combined with Easy Defi, to achieve
          excess annualized returns.
        </p>
      </header>

      <Section3BackgroundContainer1 className="relative z-10 w-[1280px] h-[672px] max-md:w-full max-md:h-auto">
        <div className="absolute z-11 left-[56px] top-[32px] max-md:left-[24px] max-md:top-[-8px] flex items-end">
          <Image src="/tree.svg" alt="tree" className="w-[88px] h-[92px] max-md:w-[39px] max-md:h-[41px]" width={88} height={92} />
          <Image src="/fence.svg" alt="fence" className="w-[107px] h-[46px] ml-[16px] max-md:w-[53px] max-md:h-[23px] max-md:ml-[6px]" width={107} height={46} />
          <Image src="/grass.svg" alt="grass" className="w-[26px] h-[24px] ml-[30px] max-md:w-[13px] max-md:h-[12px] max-md:ml-[8px]" width={26} height={24} />
        </div>
        <Image src="/section-3-bg-1.svg" alt="frame" className="absolute z-2 top-0 left-0 w-[1280px] h-[672px] max-md:hidden" width={1280} height={672} />
        <Card className="max-md:rounded-[16px] max-md:mt-[32px] max-md:p-[16px] max-md:border-none max-md:shadow-none absolute z-10 top-[172px] left-[48px] w-[512px] p-8 border-none max-md:relative max-md:top-[0px] max-md:left-[0px] max-md:w-[279px] max-md:mx-auto max-md:h-auto">
          <CardContent className="flex flex-col gap-4 p-0 max-md:flex-none">
            <div className="flex flex-col">
              <div className="flex items-start justify-between max-md:flex-col-reverse">
                <div className="flex items-center gap-4 max-md:gap-[8px]">
                  <div className="flex h-9 w-9 max-md:h-[28px] max-md:w-[28px] items-center justify-center bg-[#141414] rounded-lg max-md:rounded-[8px]">
                    <span className="font-semibold text-white text-xl max-md:text-[14px]">01</span>
                  </div>
                  <h2 className="font-semibold text-[#141414] text-[22px] leading-8 max-md:text-[16px] max-md:leading-[22.4px]">
                    Conservative Strategy
                  </h2>
                </div>
                <span className="max-md:self-end flex-nowrap text-nowrap text-xs max-md:text-[10px] max-md:leading-[1.5] font-medium bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </div>

              <div className="my-[12px] max-md:my-[12px] font-semibold text-[#765BFF] text-[12px] max-md:text-[12px]">Retain Native Asset Gains + Additional Capital Efficiency</div>

              <div className="flex flex-col gap-3">
                <TextTruncate
                  className="text-[#141414] text-xs tracking-[0.12px] leading-[19.2px] max-md:text-[12px] max-md:leading-[19.2px]"
                  text={
                    <>
                      This strategy offers an efficient way to generate stable, high
                      returns from mainstream native tokens. Using a unique risk control
                      system, it dynamically adjusts leverage and provides liquidity to {tooltipView}, earning fees from user transactions. Enjoy
                      stable, sustained high returns and maximize capital efficiency
                      with 24/7 risk control system monitoring, without the need for
                      complex cross-platform operations.
                    </>
                  }
                  maxLines={3}
                  expandText="More"
                  collapseText="Less"
                />

                <div className="flex flex-wrap gap-2 max-md:gap-[6px]">
                  {features1.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#765bff1a] text-[#765bff] h-7 px-2 max-md:text-[10px] max-md:h-[28px] max-md:px-[4px] !rounded-[4px] max-md:!rounded-[4px] font-normal"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-md:gap-[16px] max-md:mt-[32px]">
              <div className="flex flex-col gap-2 max-md:gap-[8px]">
                <div className="relative flex items-baseline gap-[6px] max-md:gap-[4px]">
                  <span className="text-[#765bff] text-4xl font-bold max-md:text-[28px] max-md:leading-[1]">18.27%</span>
                  <div className="inline-flex items-center gap-1 max-md:gap-[4px]">
                    <span className="text-[#765bff] text-lg max-md:text-[14px] font-bold">APR</span>
                    {infoIconView}
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap">
                  <div className="text-sm max-md:text-[12px] inline-flex items-center gap-1 px-3 py-2 max-md:px-[8px] max-md:py-[6px] rounded-full bg-gradient-to-b from-[rgba(152,132,255,0.1)] via-[rgba(101,204,255,0.1)] to-[rgba(5,211,148,0.1)]">
                    <Image src="/usdt.svg" alt="usdc" className="w-[18px] h-[18px] max-md:w-[16px] max-md:h-[16px]" width={18} height={18} />
                    <span className="font-semibold">USDC+</span>
                    <div className="flex items-center gap-0.5">
                      <Image src="/points.svg" alt="Easy" className="w-[18px] h-[18px] max-md:w-[16px] max-md:h-[16px]" width={18} height={18} />
                      <span className="max-md:leading-[16.8px] font-semibold bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                        Capy Point
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 max-md:gap-[4px] max-md:mt-[8px]">
                    <span className="text-sm max-md:text-[12px] opacity-60">Support:</span>
                    <div className="flex items-center gap-0.5 max-md:gap-[2px]">
                      <Image src="/btc.svg" alt="btc" className="w-5 h-5 max-md:w-[20px] max-md:h-[20px]" width={20} height={20} />
                      <Image src="/eth.svg" alt="eth" className="w-5 h-5 max-md:w-[20px] max-md:h-[20px]" width={20} height={20} />
                      <Image src="/usdt.svg" alt="usdt" className="w-[18px] h-[18px] max-md:w-[18px] max-md:h-[18px]" width={18} height={18} />
                      <Image src="/bnb.svg" alt="bnb" className="w-5 h-5 max-md:w-[20px] max-md:h-[20px]" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between flex-wrap max-md:leading-[1.5]">
                <span className="text-xs max-md:text-[10px] opacity-60 max-md:leading-[1.5]">
                  e.g. 1 BTC per month earned
                </span>
                <div className="flex items-center gap-0.5 max-md:gap-[2px max-md:mt-[4px]">
                  <span className="font-semibold text-sm max-md:text-[12px] max-md:leading-[1.5]">
                    Asset Price Increase + Point
                  </span>
                  <div className="flex items-center max-md:gap-[2px]">
                    <span className="font-semibold text-sm max-md:leading-[1.5] max-md:text-[12px] text-[#765bff]">
                      +$630
                    </span>
                    <ArrowUp className="w-5 h-5 max-md:w-[14px] max-md:h-[14px] text-[#765bff]" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <RightOfBlock1 />
      </Section3BackgroundContainer1>

      <Section3BackgroundContainer2 className="relative w-[1280px] h-[672px] mt-[56px] max-md:mt-[24px] max-md:w-full max-md:h-auto">
        {/* <div className="max-md:block hidden h-[1px] w-full"></div> */}
        <div className="absolute z-11 right-[32px] top-[32px] max-md:right-[24px] max-md:top-[-8px] flex items-end">
          <Image src="/pet.svg" alt="pet" className="w-[65px] h-[65px] mr-[24px] max-md:w-[29px] max-md:h-[29px]" width={65} height={65} />
          <Image src="/tree.svg" alt="tree" className="w-[88px] h-[92px] max-md:w-[39px] max-md:h-[41px]" width={88} height={92} />
        </div>
        <Image src="/section-3-bg-2.svg" alt="frame" className="max-md:hidden absolute z-2 top-0 left-0 w-[1280px] h-[672px]" width={1280} height={672} />
        <Card className="max-md:rounded-[16px] max-md:mt-[32px] max-md:p-[16px] max-md:border-none max-md:shadow-none absolute z-10 top-[172px] right-[48px] w-[512px] p-8 border-none max-md:relative max-md:top-[0px] max-md:left-[0px] max-md:w-[279px] max-md:mx-auto max-md:h-auto">
          <CardContent className="flex flex-col gap-4 p-0">
            <div className="flex flex-col">
              <div className="flex items-start justify-between max-md:flex-col-reverse">
                <div className="flex items-center gap-4 max-md:gap-[8px]">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#141414] rounded-lg max-md:rounded-[8px] max-md:h-[28px] max-md:w-[28px]">
                    <span className="font-semibold text-white text-xl max-md:text-[14px]">02</span>
                  </div>
                  <h2 className="font-semibold text-[#141414] text-[22px] leading-8 max-md:text-[16px] max-md:leading-[22.4px]">
                    Volatility Capture Strategy
                  </h2>
                </div>
              </div>

              <div className="my-[12px] max-md:my-[8px] font-semibold text-[#05D394] text-[12px] max-md:text-[12px] max-md:leading-[1.5]">Retain Native Asset Gains +Intraday Volatility Returns</div>

              <div className="flex flex-col gap-3 max-md:gap-[8px]">
                <TextTruncate
                  className="text-[#141414] text-xs tracking-[0.12px] leading-[19.2px] max-md:text-[12px] max-md:leading-[19.2px]"
                  text={'This strategy provides an effective way to achieve high returns from daily market fluctuations. Inspired by on-exchange strategies from the New York Mercantile Exchange, it uses 0 to 1x leverage and leverages advanced volatility capture algorithms to monitor the market in real-time, waiting for optimal trading opportunities to profit. Compared to Conservative Strategy, this strategy carries higher risks and rewards, giving users the opportunity to achieve over 100% annualized returns, regardless of market conditions.'}
                  foldText={'This strategy provides an effective way to achieve high returns from daily market fluctuations. Inspired by on-exchan...'}
                  maxLines={3}
                  expandText="More"
                  collapseText="Less"
                />

                <div className="flex flex-wrap gap-2 max-md:gap-[6px]">
                  {features2.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#43d0981a] text-[#05D394] h-7 px-2 max-md:text-[10px] max-md:h-[28px] max-md:px-[8px] !rounded-[4px] max-md:!rounded-[4px] font-normal"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-md:gap-[16px] max-md:mt-[32px]">
              <div className="flex flex-col gap-2 max-md:gap-[8px]">
                <div className="relative flex items-baseline gap-[6px] max-md:gap-[4px]">
                  <span className="text-[#05D394] text-4xl font-bold max-md:text-[28px] max-md:leading-[1]">108%</span>
                  <div className="inline-flex items-center gap-1 max-md:gap-[4px]">
                    <span className="text-[#05D394] text-lg font-bold max-md:text-[14px]">APR</span>
                  </div>
                </div>

                <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[8px] ">
                  <div className="inline-flex items-center gap-1 px-3 py-2 max-md:px-[8px] max-md:py-[6px] rounded-full bg-gradient-to-b from-[rgba(152,132,255,0.1)] via-[rgba(101,204,255,0.1)] to-[rgba(5,211,148,0.1)]">
                    <Image src="/usdt.svg" alt="usdc" className="w-[18px] h-[18px] max-md:w-[16px] max-md:h-[16px]" width={18} height={18} />
                    <span className="font-semibold text-sm max-md:text-[12px] max-md:leading-[1.5]">USDC+</span>
                    <div className="flex items-center gap-0.5 max-md:gap-[2px]">
                      <Image src="/points.svg" alt="Easy" className="w-[18px] h-[18px] max-md:w-[16px] max-md:h-[16px]" width={18} height={18} />
                      <span className="font-semibold text-sm max-md:text-[12px] max-md:leading-[1.5] bg-gradient-to-b from-[#9884FF] via-[#65CCFF] to-[#05D394] bg-clip-text text-transparent">
                        Capy Point
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 max-md:gap-[4px]">
                    <span className="text-sm opacity-60 max-md:text-[10px] max-md:leading-[1.5]">Support:</span>
                    <div className="flex items-center gap-0.5 max-md:gap-[2px]">
                      <Image src="/btc.svg" alt="btc" className="w-5 h-5 max-md:w-[20px] max-md:h-[20px]" width={20} height={20} />
                      <Image src="/eth.svg" alt="eth" className="w-5 h-5 max-md:w-[20px] max-md:h-[20px]" width={20} height={20} />
                      <Image src="/usdt.svg" alt="usdt" className="w-[18px] h-[18px] max-md:w-[16px] max-md:h-[16px]" width={18} height={18} />
                      <Image src="/bnb.svg" alt="bnb" className="w-5 h-5 max-md:w-[20px] max-md:h-[20px]" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between flex-wrap max-md:leading-[1.5]">
                <span className="text-xs opacity-60 max-md:text-[10px] max-md:leading-[1.5]">
                  e.g. 1 BTC per month earned
                </span>
                <div className="flex items-center gap-0.5 max-md:gap-[2px] max-md:mt-[4px]">
                  <span className="font-semibold text-sm max-md:text-[10px] max-md:leading-[1.5]">
                    Price Increase + Point
                  </span>
                  <div className="flex items-center">
                    <span className="font-semibold text-sm text-[#05D394] max-md:text-[10px] max-md:leading-[1.5]">
                      +$9000
                    </span>
                    <ArrowUp className="w-5 h-5 text-[#05D394] max-md:w-[14px] max-md:h-[14px]" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <RightOfBlock2 />
      </Section3BackgroundContainer2>

      <div className="max-md:hidden flex items-center justify-center gap-6 w-full mt-[56px]">
        <Separator className="w-24" />
        <h2 className="text-2xl font-semibold text-[#141414] leading-7 whitespace-nowrap">
          AI strategies are in preparation
        </h2>
        <Separator className="w-24" />
      </div>
    </div>
  );
}