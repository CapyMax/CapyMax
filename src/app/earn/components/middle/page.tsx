import { Tabs } from "radix-ui";
import MarketMakingHedge from "./MarketMakingHedge";
import MarketMakingVolatility from "./MarketMakingVolatility";
import ComingSoon from "./ComingSoon";
export default function EarnMiddle() {
  return (
    <div className="px-[80px] pt-[48px] pb-[55px] bg-[#F3F5F8]">
      <Tabs.Root defaultValue="account">
        <Tabs.List className="mb-[24px]">
          <Tabs.Trigger
            value="account"
            className="mr-[32px] py-[8px] px-[16px] bg-[#141414] text-[#fff] rounded-[18px] font-[500] text-[16px]"
          >
            Market-Making Hedging
          </Tabs.Trigger>
          <Tabs.Trigger
            value="documents"
            className="mr-[32px] text-[16px] font-[400] text-[#9A9B9D]"
            disabled
          >
            Long-Short Hedging
          </Tabs.Trigger>
          <Tabs.Trigger
            value="settings"
            className="mr-[32px] text-[16px] font-[400] text-[#9A9B9D]"
            disabled
          >
            Arbitrage Strategies
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" className="flex gap-[25px]">
          <MarketMakingHedge></MarketMakingHedge>
          <MarketMakingVolatility></MarketMakingVolatility>
          <ComingSoon></ComingSoon>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
