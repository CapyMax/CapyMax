import React, { useState } from "react";
import { arbitrumSepolia } from "viem/chains";
import { useBalance } from "wagmi";
import Row from "./Row";
import useSignature from "../hooks/useSignature";
import usePermit from "../hooks/usePermit";
import { useWallet } from "../hooks/useWallet";
import useCrossChainButton from "../hooks/useCrossChain";
import { getContractAddress } from "../utils/page";
import { RsvInfo } from "../utils/types";
import { SelectTokenInfo } from "../utils/types";
import { useIsMounted } from "@/hooks/useIsMounted";
import TokenSelect from "./TokenSelect";
import Table from "../components/Table";
import Button from "@/components/Button";

export default function OperationsDeposit() {
  const { handleCrossChain } = useCrossChainButton();
  const { setSignature } = useSignature();
  const { setPermit } = usePermit();
  const { isConnected, address } = useWallet();
  const [depositValue, setDepositValue] = useState("");
  const [selectedToken, setSelectedToken] = useState<SelectTokenInfo>({
    src: "/earn-detail-token2.svg",
    label: "USDC",
    value: "usdc",
    address: getContractAddress("USDC_TEST_ADDR"),
  });
  const isMounted = useIsMounted();
  const { data: balanceData } = useBalance({
    address: address,
    chainId: arbitrumSepolia.id,
    token: selectedToken.address as `0x${string}`,
    query: {
      enabled: !!address,
    },
  });
  console.log("balanceData", balanceData);

  const fetchBalance = (info: SelectTokenInfo) => {
    setSelectedToken(info);
  };

  const isInputValid =
    depositValue !== "" &&
    !isNaN(Number(depositValue)) &&
    Number(depositValue) >= 1;

  const hasSufficientBalance =
    balanceData && Number(depositValue) <= Number(balanceData.formatted);
  const disDeposit = !isConnected || !isInputValid || !hasSufficientBalance;
  // 修改类名逻辑，服务端渲染时使用默认值
  const buttonClassName = isMounted
    ? isConnected
      ? disDeposit
        ? "bg-[#FF8064]"
        : "bg-[#141414]"
      : "bg-[#AAB8C1]"
    : "bg-[#AAB8C1]"; // 服务端始终使用未连接状态的类名

  // 修改文本逻辑，服务端渲染时使用默认值
  const buttonText = isMounted
    ? isConnected
      ? isInputValid
        ? hasSufficientBalance
          ? "Deposit"
          : "Insufficient balance"
        : "Minimum deposit: 100U"
      : "Deposit"
    : "Deposit"; // 服务端始终显示 "Deposit"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setDepositValue(value);
  };

  const handleSignature = async () => {
    try {
      console.log("start handleSignature", handleSignature);
      const rsvInfo: RsvInfo = await setSignature(
        getContractAddress("USDC_TEST_ADDR"),
        getContractAddress("MAIN_ADDR"),
        "1",
        8,
        arbitrumSepolia.id
      );
      console.log("rsvInfo", rsvInfo);
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
    console.log(" start handleDeposit", handleDeposit);

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
          <TokenSelect fetchBalance={fetchBalance}></TokenSelect>
        </div>
        <div className="w-full h-[1px]  bg-[#E0E1E3] mb-[8px] mt-[8px]"></div>
        <div className=" font-[400] text-[12px]">
          <span className="text-[#798186] mr-[8px]">
            Balance: {balanceData?.formatted}
          </span>
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

      <Button
        onClick={handleDeposit}
        disabled={disDeposit}
        className={`
          rounded-[88px] 
          w-[100%] 
          text-white 
          h-[40px] 
          font-semibold 
          text-[16px] 
          disabled:cursor-not-allowed
          mb-[16px]
          ${buttonClassName}
        `}
      >
        {buttonText}
      </Button>
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
