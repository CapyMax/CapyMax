import React, { useState } from "react";
import { arbitrumSepolia } from "viem/chains";
import { useBalance } from "wagmi";
import Row from "./Row";
import useSignature from "../hooks/useSignature";
import { useWallet } from "../hooks/useWallet";
import useCrossChainButton from "../hooks/useCrossChain";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useDeposit } from "../hooks/useDeposit";
import { getContractAddress, getClientDeadline } from "../utils/page";
import { RsvInfo } from "../utils/types";
import { SelectTokenInfo } from "../utils/types";
import TokenSelect from "./TokenSelect";
import Table from "../components/Table";
import Button from "@/components/Button";

export default function OperationsDeposit() {
  const { setCrossChain } = useCrossChainButton();
  const { setSignature } = useSignature();
  const { setDeposit, depositId, amount } = useDeposit();
  const { isConnected, address } = useWallet();
  const [depositValue, setDepositValue] = useState("");
  const [selectedToken, setSelectedToken] = useState<SelectTokenInfo>({
    src: "/earn-detail-token2.svg",
    label: "USDC",
    value: 1,
    decimal: 6,
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

  const buttonClassName = isMounted
    ? isConnected
      ? disDeposit
        ? "bg-[#FF8064]"
        : "bg-[#141414]"
      : "bg-[#AAB8C1]"
    : "bg-[#AAB8C1]";

  const buttonText = isMounted
    ? isConnected
      ? isInputValid
        ? hasSufficientBalance
          ? "Deposit"
          : "Insufficient balance"
        : "Minimum deposit: 100U"
      : "Deposit"
    : "Deposit";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setDepositValue(value);
  };

  const handleSignature = async () => {
    try {
      const rsvInfo = await setSignature(
        getContractAddress(
          selectedToken.value ? "USDC_TEST_ADDR" : "WBTC_MAIN_ADDR"
        ),
        getContractAddress("MAIN_ADDR"),
        depositValue,
        selectedToken.decimal,
        arbitrumSepolia.id
      );
      return rsvInfo;
    } catch (error) {
      console.log("error in setSignature:", error);
    }
  };

  const deadline = getClientDeadline();

  const handleDeposit = async () => {
    try {
      if (!isConnected) {
        throw new Error("请连接钱包后操作");
      }
      const latestRsv = await handleSignature();
      if (!latestRsv) return;
      await setDeposit({
        tokenType: selectedToken.value,
        amount: BigInt(depositValue) * BigInt(10 ** selectedToken.decimal),
        referralCode: 0,
        deadline: deadline,
        ...(latestRsv as RsvInfo),
      });
      await setCrossChain(amount);
    } catch (error) {
      console.error(
        "操作失败:",
        error instanceof Error ? error.message : error
      );
    }
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
