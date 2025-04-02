import { useState } from "react";
import Image from "next/image";
import { Tabs } from "radix-ui";
import OperationsDeposit from "./operationsCardDeposit";
import OperationsWithdraw from "./operationsCardWithdraw";
export default function OperationsFn() {
  const [selectedValue, setSelectedValue] = useState("deposit");
  return (
    <div>
      <div className="p-[24px] bg-[#fff] rounded-[24px]">
        <Tabs.Root defaultValue="deposit" onValueChange={setSelectedValue}>
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
          <Tabs.Content value="deposit" className="w-[340px]">
            <OperationsDeposit></OperationsDeposit>
          </Tabs.Content>
          <Tabs.Content value="withdraw" className="w-[340px]">
            <OperationsWithdraw></OperationsWithdraw>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <div className="font-[400] text-[#141414] p-[0px] mt-[40px]">
        <div className="text-[14px] mb-[16px]  w-[388px]">
          CapyMax 为 VIP(投资金额超过
          10万美元)和项目团队提供个性化保险库，并提供特殊条款和优惠费用。
        </div>
        <div className="mb-[16px]">
          <button className="border  border-solid border-[#AAB8C1] text-[16px] h-[40px] w-[100%] rounded-[20px] flex items-center justify-center">
            <span>Join the VIP Club</span>
            <Image
              src="/earn-detail-club.svg"
              alt="token"
              width={18}
              height={18}
              style={{ width: "18px", height: "18px" }}
            />
          </button>
        </div>
        <div>
          <button className="border  border-solid border-[#AAB8C1] text-[16px] h-[40px] w-[100%] rounded-[20px] flex items-center justify-center">
            <span>Customer service</span>
            <Image
              src="/earn-detail-service.svg"
              alt="token"
              width={18}
              height={18}
              style={{ width: "18px", height: "18px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
