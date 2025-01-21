import React from "react";
import Image from "next/image";

import RoundedButton from "@/components/RoundedButton";
import FadeIn from "@/components/FadeIn";

const oneData = {
  title: 'Automatic compounding',
  description: <span>Income comes from traders&apos; profits and losses, as well as transaction fees, loan fees, etc. Ensure long-term sustainable compound interest.</span>,
}

const twoData = {
  title: 'Neutral strategy',
  description: <span>Use AI to accurately hedge all risk exposures of underlying assets, and stable returns can be obtained regardless of market bulls and bears.</span>,
}

const threeData = {
  title: 'Leverage income',
  description: <span>Maintain the original token returns while significantly increasing profits with extremely low liquidation risk.</span>,
}

const fourData = {
  title: 'Institutional risk control',
  description: <span>This risk control strategy monitors the market in real-time, adjusts leverage dynamically, and reserves a capital buffer to help users redeem assets and returns early during extreme volatility, preventing liquidation.</span>,
}

function One(): JSX.Element {
  return (
    <div className="flex-[0_0_auto] relative">
      <Image src="/section-2-bg-1.svg" className="max-md:w-[192px] max-md:h-[305px]" alt="image-1" width={192} height={305} />
      <div className="absolute max-md:left-[24px] max-md:top-[88px] max-md:w-[144px]">
        <div className="max-md:text-[16px] max-md:leading-[1.4] max-md:mb-[8px]">{oneData.title.toUpperCase()}</div>
        <div className="max-md:text-[12px] max-md:leading-[1.6] max-md:opacity-40">{oneData.description}</div>
      </div>
    </div>
  );
}

function Two(): JSX.Element {
  return (
    <div className="flex-[0_0_auto] relative">
      <Image src="/section-2-bg-2.svg" className="max-md:w-[192px] max-md:h-[305px]" alt="image-1" width={192} height={305} />
      <div className="absolute max-md:left-[24px] max-md:top-[88px] max-md:w-[140px]">
        <div className="max-md:text-[16px] max-md:leading-[1.4] max-md:mb-[8px]">{twoData.title.toUpperCase()}</div>
        <div className="max-md:text-[12px] max-md:leading-[1.6] max-md:opacity-40">{twoData.description}</div>
      </div>
    </div>
  );
}

function Three(): JSX.Element {
  return (
    <div className="flex-[0_0_auto] relative">
      <Image src="/section-2-bg-3.svg" className="max-md:w-[192px] max-md:h-[267px]" alt="image-1" width={192} height={267} />
      <div className="absolute max-md:left-[24px] max-md:top-[96px] max-md:w-[144px]">
        <div className="max-md:text-[16px] max-md:leading-[1.4] max-md:mb-[8px]">{threeData.title.toUpperCase()}</div>
        <div className="max-md:text-[12px] max-md:leading-[1.6] max-md:opacity-40">{threeData.description}</div>
      </div>
    </div>
  );
}

function Four(): JSX.Element {
  return (
    <div className="flex-[0_0_auto] relative">
      <Image src="/section-2-bg-4.svg" className="max-md:w-[224px] max-md:h-[324px]" alt="image-1" width={224} height={324} />
      <div className="absolute max-md:left-[24px] max-md:top-[88px] max-md:w-[176px]">
        <div className="max-md:text-[16px] max-md:leading-[1.4] max-md:mb-[8px]">{fourData.title.toUpperCase()}</div>
        <div className="max-md:text-[12px] max-md:leading-[1.6] max-md:opacity-40">{fourData.description}</div>
      </div>
    </div>
  );
}

function Badge(): JSX.Element {
  return <RoundedButton className="absolute top-[48px] left-[80px] max-md:static">OUR VISION</RoundedButton>
}

function Title(): JSX.Element {
  return (
    <FadeIn className="absolute left-[80px] top-[104px] leading-[1.4] text-[32px] w-[320px] max-md:static max-md:text-[20px] max-md:leading-[1.4] max-md:w-[311px] max-md:top-[80px] max-md:left-[28px] max-md:mt-[12px] max-md:mb-[22px] overflow-hidden">
      <div>Bringing complex financial strategies within your reach</div>
    </FadeIn>
  )
}

export function SecondSection() {
  return (
    <>
      <div className="block max-md:hidden relative bg-black !w-full h-[360px] text-white overflow-hidden">
        <Badge />
        <Title />

        <>
          <Image src="/bg-1.svg" className="absolute top-[-128px] left-[520px] !w-[192px] !h-[610px]" alt="image-1" width={192} height={610} />
          <div className="absolute left-[544px] top-[152px] w-[140px]">
            <div className="text-[16px] mb-[8px]">{oneData.title.toUpperCase()}</div>
            <div className="text-[12px] opacity-40">{oneData.description}</div>
          </div>
        </>

        <>
          <Image src="/bg-2.svg" className="absolute top-[-135px] left-[736px] !w-[192px] !h-[610px]" alt="image-2" width={192} height={610} />
          <div className="absolute left-[760px] top-[132px] w-[140px]">
            <div className="text-[16px] mb-[8px]">{twoData.title.toUpperCase()}</div>
            <div className="text-[12px] opacity-40">{twoData.description}</div>
          </div>
        </>

        <>
          <Image src="/bg-3.svg" className="absolute top-[-124px] left-[952px] !w-[192px] !h-[610px]" alt="image-3" width={192} height={610} />
          <div className="absolute left-[976px] top-[154px] w-[140px]">
            <div className="text-[16px] mb-[8px]">{threeData.title.toUpperCase()}</div>
            <div className="text-[12px] opacity-40">{threeData.description}</div>
          </div>
        </>

        <>
          <Image src="/bg-4.svg" className="absolute bottom-[18px] left-[1168px] !w-[224px] !h-[324px]" alt="image-4" width={224} height={324} />
          <div className="absolute left-[1192px] top-[114px] w-[158px]">
            <div className="text-[16px] mb-[8px]">{fourData.title.toUpperCase()}</div>
            <div className="text-[12px] opacity-40">{fourData.description}</div>
          </div>
        </>
      </div>
      <div className="hidden max-md:block relative bg-black !w-full max-md:pl-[32px] max-md:py-[24px] text-white overflow-hidden">
        <Badge />
        <Title />
        <div className="flex items-end max-md:gap-[24px] overflow-y-auto">
          <One />
          <Two />
          <Three />
          <Four />
          <div className="w-[24px] h-[1px]"></div>
        </div>
      </div>
    </>
  )
}
