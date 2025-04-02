import React, { useEffect, useState } from "react";
import { arbitrumSepolia } from "viem/chains";
import Row from "./Row";
import useSignature from "../hooks/useSignature";
import usePermit from "../hooks/usePermit";
import { useWallet } from "../hooks/useWallet";
import useCrossChainButton from "../hooks/useCrossChain";
import { getContractAddress } from "../utils/page";
import TokenSelect from "./TokenSelect";
import Table from "../components/Table";
export default function OperationsDeposit() {
  const { handleCrossChain } = useCrossChainButton();
  const { setSignature } = useSignature();
  const { setPermit } = usePermit();
  const { isConnected } = useWallet();

  const [depositValue, setDepositValue] = useState("");
  const [disDeposit, setDisDeposit] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setDepositValue(value);
  };
  interface RsvInfo {
    r: `0x${string}`;
    s: `0x${string}`;
    v: bigint;
  }
  useEffect(() => {
    setDisDeposit(!isConnected);
  }, [isConnected]);
  const handleSignature = async () => {
    try {
      const rsvInfo: RsvInfo = await setSignature(
        getContractAddress("USDC_TEST_ADDR"),
        getContractAddress("MAIN_ADDR"),
        "1",
        8,
        arbitrumSepolia.id
      );
      return rsvInfo;
    } catch (error) {
      console.log("error in setSignature:", error);
    }
  };
  const handlePermit = async (rsv: RsvInfo) => {
    try {
      const resContract = await setPermit({
        ...rsv,
        value: BigInt(depositValue),
      });
      console.log("resContract", resContract);
    } catch (error) {
      console.log("error in setPermitFn:", error);
    }
  };
  const handleDeposit = async () => {
    if (!isConnected) {
      throw new Error("请连接钱包后操作");
    }
    const latestRsv = await handleSignature();
    await handlePermit(latestRsv as RsvInfo);
    handleCrossChain(depositValue);
  };
  return (
    <div>
      <div className="rounded-[16px] bg-[#F3F5F8] py-[16px] px-[24px] mb-[16px]">
        <div className="flex items-center">
          <input
            value={depositValue}
            onChange={handleInputChange}
            type="text"
            className="bg-[#F3F5F8] border-none outline-none focus:outline-none focus:ring-0 text-[#000] text-[28px] font-[700] w-[190px]"
          />
          <TokenSelect></TokenSelect>
        </div>
        <div className="w-full h-[1px]  bg-[#E0E1E3] mb-[8px] mt-[8px]"></div>
        <div className=" font-[400] text-[12px]">
          <span className="text-[#798186] mr-[8px]">Balance: 10,000</span>
          <span className="text-[#765BFF] px-[12px] bg-[#E5E6F9] rounded-[20px] py-[3px]">
            MAX
          </span>
        </div>
      </div>
      {[
        {
          label: "Est Rewards",
          value: "1,000 USDC+1,200Point",
          labelSuffix: "(Per Year)",
          valueColor: "#765BFF",
        },
        { label: "计息日期", value: "T+1" },
        { label: "赎回代币", value: "WBTC,USDC" },
        { label: "赎回日期", value: "7天后随时可赎" },
        { label: "Fee", value: "0.00003 wBTC" },
      ].map((item, index) => (
        <Row
          key={index}
          label={item.label}
          value={item.value}
          labelSuffix={item.labelSuffix}
          valueColor={item.valueColor}
          className="mb-4"
        />
      ))}

      <button
        onClick={handleDeposit}
        disabled={disDeposit}
        className={`
          bg-[#141414] 
          rounded-[88px] 
          w-[100%] 
          text-white 
          h-[40px] 
          font-semibold 
          text-[16px] 
          disabled:bg-[#AAB8C1]
          disabled:cursor-not-allowed
          mb-[16px]
        `}
      >
        Deposit
      </button>
      <Table
        columns={[
          {
            title: "test",
            dataIndex: "test",
          },
        ]}
        dataSource={[
          {
            test: "123",
          },
          {
            test: "123",
          },
        ]}
      ></Table>
    </div>
  );
}
