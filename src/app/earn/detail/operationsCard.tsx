import { useState } from "react";
import { Tabs } from "radix-ui";
import OperationsDeposit from "./operationsCardDeposit";
import OperationsWithdraw from "./operationsCardWithdraw";
export default function OperationsFn() {
  const [selectedValue, setSelectedValue] = useState("withdraw");
  return (
    <div className="absolute right-[80px] top-[52px] p-[24px] bg-[#fff] rounded-[24px]">
      <Tabs.Root defaultValue="withdraw" onValueChange={setSelectedValue}>
        <Tabs.List className="flex justify-evenly align-middle mb-[16px]">
          <Tabs.Trigger
            value="deposit"
            className={`
                ${
                  selectedValue === "deposit"
                    ? "text-[#141414] border-b-[4px] border-[#765BFF]"
                    : "text-[#AAB8C1]"
                }
                font-[700] text-[20px] mr-[88px]
              `}
          >
            Deposit
          </Tabs.Trigger>
          <Tabs.Trigger
            value="withdraw"
            className={`
                ${
                  selectedValue === "withdraw"
                    ? "text-[#141414] border-b-[4px] border-[#765BFF]"
                    : "text-[#AAB8C1]"
                }
                font-[700] text-[20px]
              `}
          >
            Withdraw
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="deposit">
          <OperationsDeposit></OperationsDeposit>
        </Tabs.Content>
        <Tabs.Content value="withdraw">
          <OperationsWithdraw></OperationsWithdraw>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
