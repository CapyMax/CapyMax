import Image from "next/image";

export default function StrategyCard() {
  return (
    <>
      <Image
        src={"/earn-header-capy.svg"}
        alt="capy"
        className="absolute right-[368px] bottom-[1px] z-10"
        width={90}
        height={90}
      ></Image>
      <Image
        src={"/earn-header-star.svg"}
        className="absolute right-[450px] bottom-[70px] z-10"
        alt="big star"
        width={16}
        height={16}
      ></Image>
      <Image
        src={"/earn-header-star.svg"}
        className="absolute right-[470px] bottom-[60px] z-10"
        alt="smaller star"
        width={8}
        height={8}
      ></Image>
      <div className="w-[235.72px] p-[12.8px] rounded-[12.8px] bg-white absolute right-[164px] bottom-[35.4px]">
        <div className="flex justify-between align-middle">
          <div className="text-[#765BFF] text-[11.2px] leading-6 font-[700]">
            Market-making strategies.
          </div>
          <div>
            <span>🔥</span>
            <span
              className="text-[12px] font-[500]"
              style={{
                background:
                  "linear-gradient(213deg, #9884FF 6.66%, #66CDFF 58.54%, #05D394 97.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NEW
            </span>
          </div>
        </div>
        <div className="text-[#280D5F] text-[14px] mt-[6.4px] font-[700]">
          Up to 28% APR
        </div>
        <div className="h-[1px] w-[100%] bg-[#E7E3EB] mt-[9.6px] mb-[9.6px]"></div>
        <div className="text-[#280D5F] text-[9.6px] font-[400]">
          Deposit USDC to earn up to 28% APR through market-making hedge
          strategies.
        </div>
        <div>
          <button className="font-[700] mt-[12.8px] w-[100%] rounded-[12.8px] bg-[#765BFF] py-[12.8px] px-[19.2px] cursor-pointer hover:bg-[#765bff] hover:shadow-none  text-[#fff] text-[12.8px]">
            Earn Now
          </button>
        </div>
      </div>
    </>
  );
}
