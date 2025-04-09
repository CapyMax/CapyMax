import { useState } from "react";
import Image from "next/image";
import { getTokenInfo } from "../utils/page";
import { SelectTokenInfo, TokenType } from "../utils/types";
import { CONFIG_NUMBER } from "../utils/data";
import { useSwitchChain } from "../hooks/useSwitchChain";

type FetchBalanceFunction = (info: SelectTokenInfo) => void;
export default function TokenSelect({
  fetchBalance,
}: {
  fetchBalance: FetchBalanceFunction;
}) {
  const { addressInfo } = useSwitchChain();
  const usdc_info = getTokenInfo(CONFIG_NUMBER["usdc"]);
  const wbtc_info = getTokenInfo(CONFIG_NUMBER["wbtc"]);
  const TOKEN_OPTIONS = [
    {
      src: "/earn-detail-token2.svg",
      label: "USDC",
      address: addressInfo.usdc,
      value: TokenType.TYPE_1,
      decimal: usdc_info.decimal,
    },
    {
      src: "/earn-detail-token1.svg",
      label: "WBTC",
      address: addressInfo.wbtc,
      value: TokenType.TYPE_0,
      decimal: wbtc_info.decimal,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectTokenInfo>(TOKEN_OPTIONS[0]);
  const handleClick = (option: SelectTokenInfo) => {
    setSelected(option);
    setIsOpen(false);
    fetchBalance(option);
  };

  return (
    <div className="relative">
      <div className="flex items-center ">
        <Image
          src={selected.src}
          alt="token"
          width={20}
          height={20}
          className="mr-[2px]"
          style={{ width: "20px", height: "20px" }}
        />
        <span className="text-[#141414] font-[700] text-[20px]">
          {selected.label}
        </span>
        <Image
          src={`${
            !isOpen ? "/earn-deposit-select.svg" : "/earn-deposit-selected.svg"
          }`}
          alt="dropdown"
          width={18}
          height={18}
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="absolute py-[12px] px-[8px] left-[-38px] mt-[3px] bg-white rounded-lg shadow-md border border-gray-200">
          {TOKEN_OPTIONS.map((token) => (
            <div
              key={token.value}
              className="flex items-center gap-1 hover:bg-[#F3F5F8] cursor-pointer py-[8px] px-[20px] box-border rounded-[8px]"
              onClick={() => handleClick(token)}
            >
              <Image
                src={token.src}
                alt={token.label}
                width={20}
                height={20}
                style={{ width: "20px", height: "20px" }}
              />
              <span className="text-[#141414] font-[400] text-[16px]">
                {token.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
