import Image from "next/image";
import { Popover } from "radix-ui";
import Button from "@/components/Button";
import "./style.css";
function Tags({ feature }: { feature: string[] }) {
  return (
    <div className="text-[#765BFF]">
      <div className="flex items-center gap-1 justify-center  flex-wrap">
        {feature.map((item, index) => {
          if (index === 0) {
            return (
              <div
                className="bg-[#F1EFFF] px-[8px] rounded-[4px] py-[6px] flex gap-1 mb-[8px]"
                key={index}
              >
                <Image
                  src="/earn-market-star.svg"
                  alt="star"
                  width={14}
                  height={14}
                ></Image>
                <span>{item} </span>
              </div>
            );
          } else {
            return (
              <p
                className="bg-[#F1EFFF] px-[8px] rounded-[4px] py-[6px] mb-[8px]"
                key={index}
              >
                {item}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}
function Risk({
  RiskBackgroundImage,
}: {
  RiskBackgroundImage: { src: string; alt: string };
}) {
  return (
    <div className="flex items-center gap-2 justify-between bg-white rounded-[12px] absolute top-[16px] right-[14px] px-[8px]">
      <span className="text-[#798186] font-[400] text-[12px]">Risk</span>
      <Image
        src={RiskBackgroundImage.src}
        alt={RiskBackgroundImage.alt}
        width={22}
        height={22}
      ></Image>
    </div>
  );
}
function Strategy({ StrategyText }: { StrategyText: string }) {
  return (
    <div className="bg-black text-white rounded-[20px] absolute top-[120px] right-[50%] translate-x-[50%] px-[16px] py-[4px]">
      <span className="font-[700] text-[14px]">{StrategyText}</span>
    </div>
  );
}
interface MarketStrategyCardProps {
  type: "hedge" | "volatility";
  StrategyText: string;
  RiskBackgroundImage: {
    src: string;
    alt: string;
  };
  // 图片相关
  backgroundImage: {
    src: string;
    alt: string;
  };
  // 头部文字
  title: string;
  subtitle: string;
  // APR 相关
  apr: string;
  tooltipContent: string;
  // 代币标识
  tokenBadge: {
    src: string;
    label: string;
  }[];
  // 标签组（3行）
  feature: string[];
  // 支持信息
  support: {
    icons: string[];
    network: string;
  };
  // 按钮
  buttonText: string;
  // 示例信息
  example: {
    text: string;
    assetIncrease: string;
  };
}

export default function MarketMakingCommon({
  type,
  StrategyText,
  RiskBackgroundImage,
  backgroundImage,
  title,
  subtitle,
  apr,
  tooltipContent,
  tokenBadge,
  feature,
  support,
  buttonText,
  example,
}: MarketStrategyCardProps) {
  return (
    <div className="relative flex-1">
      <Risk RiskBackgroundImage={RiskBackgroundImage}></Risk>
      <Strategy StrategyText={StrategyText}></Strategy>
      {/* 背景图片 */}
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        width={410}
        height={142}
        style={{ width: "100%", height: "auto" }}
      />

      {/* 内容容器 */}
      <div className="bg-white rounded-bl-[24px] rounded-br-[24px] px-[8px] pt-[32px] pb-[44px]">
        {/* 标题区 */}
        <div className="text-[#141414] font-[600] text-[24px] mb-[8px] flex justify-center">
          {title}
        </div>
        <p className="text-center text-[#798186] text-[12px] font-[700]">
          {subtitle}
        </p>

        {/* APR 显示区 */}
        <div className="flex gap-1 text-[#765BFF] font-[700] items-baseline justify-center">
          <span className="text-[36px]">~{apr}%</span>
          <span className="text-[18px]">APR</span>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Image
                src="/earn-detail-sur-icon.svg"
                alt="info"
                width={16}
                height={16}
              />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="bg-white w-[250px] p-[10px] text-[#727272] font-[400] text-[14px] rounded-[10px] shadow-[0px_4px_16px_rgba(0,0,0,0.1)] PopoverContent">
                {tooltipContent}
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        {/* 代币标识 */}
        <div className="flex justify-center mb-[24px]">
          <div className="flex justify-center h-[32px] w-fit items-center gap-1 px-[12px] rounded-[56px] bg-gradient-to-br from-[rgba(152,132,255,0.1)] via-[rgba(102,205,255,0.1)] to-[rgba(5,211,148,0.1)]">
            {tokenBadge.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <Image
                  key={index}
                  src={item.src}
                  alt="token"
                  width={14}
                  height={14}
                />
                <span
                  key={index}
                  className="text-[14px] font-[600]"
                  style={
                    index === 1
                      ? {
                          background:
                            "linear-gradient(213deg, #9884FF 6.66%, #66CDFF 58.54%, #05D394 97.1%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : { color: "#141414" }
                  }
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 动态标签组 */}
        <Tags feature={feature}></Tags>

        {/* 支持信息 */}
        <div className="flex items-center justify-between text-[#727272] font-[400] text-[12px] mb-[24px]">
          <div className="flex items-center gap-1">
            <span>Support:</span>
            {support.icons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="token"
                width={14}
                height={14}
              />
            ))}
          </div>
          <p>Network: {support.network}</p>
        </div>

        {/* 操作按钮 */}
        <Button
          className={`w-[100%] mb-[16px] ${
            type == "hedge" ? "" : "bg-[#AAB8C1]"
          }`}
          disabled={type == "volatility"}
        >
          {buttonText}
        </Button>

        {/* 分隔线 */}
        <div className="bg-[#ECECEC] h-[1px] w-[100%] mb-[16px]" />

        {/* 示例信息 */}
        <div className="flex justify-center">
          <p className="text-[#727272] font-[400] text-[12px]">
            {example.text}
          </p>
        </div>
        <div className="flex items-center gap-1 mb-[8px] text-[#141414] text-[14px] font-[600] justify-center">
          <span>Asset Price Increase + Point</span>
          <span className="text-[#765BFF]">+{example.assetIncrease}</span>
          <Image
            src="/earn-strategy-arrow.svg"
            alt="arrow"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}
