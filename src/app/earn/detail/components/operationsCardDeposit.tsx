import React, { useEffect, useState } from "react";
import { useBalance } from "wagmi";
import { Toast } from "radix-ui";
import { useSignature } from "../hooks/useSignature";
import { useWallet } from "../hooks/useWallet";
import { useApproveForBurn } from "../hooks/useApproveForBurn";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useDeposit } from "../hooks/useDeposit";
import { useSwitchChain } from "../hooks/useSwitchChain";
import { getClientDeadline } from "../utils/page";
import { RsvInfo, SelectTokenInfo } from "../utils/types";
import { CHAIN_IDS } from "../utils/data";
import TokenSelect from "./TokenSelect";
import Table from "../components/Table";
import Button from "@/components/Button";
import Row from "./Row";
import "./toast.css";
export default function OperationsDeposit() {
  const { setApproveForBurn } = useApproveForBurn();
  const { setSignature } = useSignature();
  const { setDeposit, amount } = useDeposit();
  const { isConnected, address, chainId } = useWallet();
  const [depositValue, setDepositValue] = useState("");
  const { addressInfo } = useSwitchChain();
  const [selectedToken, setSelectedToken] = useState<SelectTokenInfo>({
    src: "/earn-detail-token2.svg",
    label: "USDC",
    address: addressInfo.usdc || "",
    value: 1,
    decimal: 6,
  });
  const [chainErrorShown, setChainErrorShown] = useState(false);

  useEffect(() => {
    const isValidChain = CHAIN_IDS.includes(chainId || 42161);
    if (!isValidChain) {
      if (!chainErrorShown) setChainErrorShown(true);
      return;
    }
    setSelectedToken((pre) => ({
      ...pre,
      address: pre.value ? addressInfo.usdc : addressInfo.wbtc,
    }));
  }, [addressInfo, chainId]);

  const isMounted = useIsMounted();
  const { data: balanceData } = useBalance({
    address,
    chainId,
    token: selectedToken.address as `0x${string}`,
    query: {
      enabled: !!address && !!chainId && !!selectedToken.address,
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
      const rsvInfo = await setSignature(depositValue, selectedToken.value);
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
      const depositAndCrossAmount =
        BigInt(depositValue) * BigInt(10 ** selectedToken.decimal);
      const latestRsv = await handleSignature();
      if (!latestRsv) return;
      await setDeposit({
        tokenType: selectedToken.value,
        amount: depositAndCrossAmount,
        referralCode: 0,
        deadline: deadline,
        ...(latestRsv as RsvInfo),
      });
      fetchBalance(selectedToken);
    } catch (error) {
      console.error(
        "操作失败:",
        error instanceof Error ? error.message : error
      );
    }
  };
  useEffect(() => {
    if (amount) {
      console.log("amount to setApproveForBurn", amount);
      setApproveForBurn(amount as bigint);
    }
  }, [amount]);
  return (
    <div>
      <Toast.Provider swipeDirection="up">
        <Toast.Root
          className="ToastRoot"
          open={chainErrorShown}
          duration={3000}
          onOpenChange={(open) => setChainErrorShown(open)}
        >
          <Toast.Description asChild onClick={() => setChainErrorShown(false)}>
            <time className="ToastDescription">please switch to Arbitrum</time>
          </Toast.Description>
          <Toast.Action
            asChild
            altText="Goto schedule to undo"
            onClick={() => setChainErrorShown(false)}
          ></Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed top-20 right-0" />
      </Toast.Provider>
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
