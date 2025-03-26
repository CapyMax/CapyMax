import { Tabs } from "radix-ui";
export default function EarnMiddle() {
  return (
    <div className="px-[80px] pt-[48px] pb-[55px]">
      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger
            value="account"
            className="mr-[32px] py-[8px] px-[16px] bg-[#141414] text-[#fff] rounded-[18px] font-[500] text-[16px]"
          >
            Market-Making Hedging
          </Tabs.Trigger>
          <Tabs.Trigger
            value="documents"
            className="mr-[32px] text-[16px] font-[400] text-[#9A9B9D]"
          >
            Long-Short Hedging
          </Tabs.Trigger>
          <Tabs.Trigger
            value="settings"
            className="mr-[32px] text-[16px] font-[400] text-[#9A9B9D]"
          >
            Arbitrage Strategies
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">1</Tabs.Content>
        <Tabs.Content value="documents">3</Tabs.Content>
        <Tabs.Content value="settings">4</Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
