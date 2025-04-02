import Image from "next/image";

const NETWORK_TOKENS = [
  "/earn-detail-token1.svg",
  "/earn-detail-token2.svg",
  "/earn-detail-token4.svg",
];

const ALL_TOKENS = [...NETWORK_TOKENS, "/earn-detail-token3.svg"];
function TokenValue({ src, value }: { src: string; value: string }) {
  return (
    <div className="flex items-center gap-1 self-start">
      <Image
        src={src}
        alt="Token"
        width={18}
        height={18}
        style={{ width: "auto", height: "auto" }}
      />
      <span className="text-[#141414] text-base font-bold">{value}</span>
    </div>
  );
}
export default function StrategyCard() {
  return (
    <div className="bg-white p-6 mr-[16px] rounded-[24px] flex-1">
      <div className="flex justify-between mb-[20px]">
        {/* left */}
        <div className="flex flex-1 items-start gap-3.5">
          <Image
            src="/earn-detail-strategy.svg"
            alt="Strategy illustration"
            width={64}
            height={64}
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <div>
            {/*  */}
            <div className="font-[700]">
              <span className="text-[#141414] text-[24px] mr-[7px]">
                Conservative Strategy
              </span>
              <span className="text-[#765BFF] text-[12px] px-[16px] py-[4px] bg-[#F1EFFF] rounded-[16px_16px_16px_2px] leading-9">
                Strategy 1
              </span>
            </div>

            {/*  */}
            <div className="flex items-center gap-1 text-xs text-[#765BFF] mb-[16px]">
              <span>Retain Native Asset Gains</span>
              <Image
                src="/earn-detail-plus-icon.svg"
                alt="plus icon"
                width={16}
                height={16}
              />
              <span>Additional Capital Efficiency</span>
            </div>

            {/*  */}
            <div className="flex flex-wrap items-center text-xs text-[#798186]">
              <div className="flex items-center gap-1 mr-[24px]">
                <span>Network:</span>
                {NETWORK_TOKENS.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="network token"
                    width={20}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <span>Token:</span>
                {ALL_TOKENS.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="token"
                    width={20}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* right part */}
        <div>
          <div className="flex items-baseline gap-1 mb-[11px]">
            <span className="font-[700] text-[32px] text-[#765BFF]">~28%</span>
            <span className="font-[700] text-[18px] text-[#765BFF]">APR%</span>
            <span className="text-[#D0D0D0] font-[400] text-[12px] ">
              (30 Days)
            </span>
            <Image
              src="/earn-detail-sur-icon.svg"
              alt="Strategy illustration"
              width={16}
              height={16}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="w-fit ml-auto flex px-[14px] leading-[28px] gap-1 justify-end rounded-[56px] bg-[linear-gradient(213deg,rgba(152,132,255,0.1)_6.66%,rgba(102,205,255,0.1)_58.54%,rgba(5,211,148,0.1)_97.1%)]">
            <Image
              src="/earn-detail-token2.svg"
              alt="Strategy illustration"
              width={18}
              height={18}
              style={{ width: "18px", height: "18px" }}
            />
            <span className="text-[#141414] font-[600] text-[14px]">USDC+</span>
            <Image
              src="/earn-detail-orange.svg"
              alt="Strategy illustration"
              width={18}
              height={18}
              style={{ width: "18px", height: "18px" }}
            />
            <span className="font-[600] text-[14px] bg-[linear-gradient(213deg,#9884FF_6.66%,#66CDFF_58.54%,#05D394_97.1%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Capy Point
            </span>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex gap-4 justify-between">
        {/* 公共样式提取 */}
        {[
          // 第一个卡片
          {
            icon1: "/earn-detail-asst-icon.svg",
            icon2: "/earn-detail-sur-icon.svg",
            label: "Your Deposit",
            content: (
              <div className="flex gap-4">
                <TokenValue src="/earn-detail-token1.svg" value="1" />
                <TokenValue src="/earn-detail-token2.svg" value="1,000" />
              </div>
            ),
          },
          // 第二个卡片
          {
            icon1: "/earn-detail-asst-pre.svg",
            icon2: "/earn-detail-sur-icon.svg",
            label: "Est Rewards",
            badge: "T+1",
            value: "10.23 USDC",
          },
          // 第三个卡片
          {
            icon: "/earn-detail-asst-icon.svg",
            label: "Est Point",
            value: "12.276",
          },
          // 第四个卡片
          {
            icon: "/earn-detail-asst-icon.svg",
            label: "Your Point Boost NFT",
            value: "V1",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#F3F5F8] p-4 rounded-[16px] flex-1 min-w-0"
          >
            <div className="flex items-center gap-1 mb-2">
              {/* 图标部分 */}
              <Image
                src={card.icon1 || (card.icon as string)}
                alt="Asset icon"
                width={16}
                height={16}
                style={{ width: "16px", height: "16px" }}
              />
              <span className="text-[#798186] text-xs">{card.label}</span>

              {/* 可选附加元素 */}
              {card.icon2 && (
                <Image
                  src={card.icon2}
                  alt="Info icon"
                  width={16}
                  height={16}
                  style={{ width: "auto", height: "auto" }}
                />
              )}
              {card.badge && (
                <span className="text-white bg-[#765BFF] py-[2px] px-2 text-[10px] rounded-lg">
                  {card.badge}
                </span>
              )}
            </div>

            {/* 内容部分 */}
            {card.content || (
              <span className="text-[#141414] text-base font-bold">
                {card.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
