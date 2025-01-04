import React from "react";
import Image from "next/image";
import RoundedButton from "@/components/RoundedButton";

export function SecondSection() {
  return (
    <div className="relative bg-black !w-full h-[360px] text-white">
      <RoundedButton className="absolute top-[48px] left-[80px]">OUR VISION</RoundedButton>
      <div className="absolute left-[80px] top-[104px] leading-[1.4] text-[32px] w-[320px]">Bringing complex financial strategies within your reach</div>
      <>
        <Image src="/bg-1.svg" className="absolute top-[-128px] left-[520px] !w-[192px] !h-[610px]" alt="image-1" width={192} height={610} />
        <div className="absolute left-[544px] top-[152px] w-[140px]">
          <div className="text-[16px] mb-[8px]">{'Automatic compounding'.toUpperCase()}</div>
          <div className="text-[12px] opacity-40">Income comes from traders&apos; profits and losses, as well as transaction fees, loan fees, etc. Ensure long-term sustainable compound interest.</div>
        </div>
      </>

      <>
        <Image src="/bg-2.svg" className="absolute top-[-135px] left-[736px] !w-[192px] !h-[610px]" alt="image-2" width={192} height={610} />
        <div className="absolute left-[760px] top-[132px] w-[140px]">
          <div className="text-[16px] mb-[8px]">{'Neutral strategy'.toUpperCase()}</div>
          <div className="text-[12px] opacity-40">Use AI to accurately hedge all risk exposures of underlying assets, and stable returns can be obtained regardless of market bulls and bears.</div>
        </div>
      </>

      <>
        <Image src="/bg-3.svg" className="absolute top-[-124px] left-[952px] !w-[192px] !h-[610px]" alt="image-3" width={192} height={610} />
        <div className="absolute left-[976px] top-[154px] w-[140px]">
          <div className="text-[16px] mb-[8px]">{'Leverage income'.toUpperCase()}</div>
          <div className="text-[12px] opacity-40">Maintain the original token returns while significantly increasing profits with extremely low liquidation risk.</div>
        </div>
      </>

      <>
        <Image src="/bg-4.svg" className="absolute bottom-[18px] left-[1168px] !w-[224px] !h-[324px]" alt="image-4" width={224} height={324} />
        <div className="absolute left-[1192px] top-[114px] w-[158px]">
          <div className="text-[16px] mb-[8px]">{'Institutional risk control'.toUpperCase()}</div>
          <div className="text-[12px] opacity-40">This risk control strategy monitors the market in real-time, adjusts leverage dynamically, and reserves a capital buffer to help users redeem assets and returns early during extreme volatility, preventing liquidation.</div>
        </div>
      </>
    </div>
  )
}
