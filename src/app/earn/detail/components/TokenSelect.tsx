import { useState } from "react";
import Image from "next/image";
import { getContractAddress } from "../utils/page";
import { SelectTokenInfo } from "../utils/types";
const TOKEN_OPTIONS = [
  {
    src: "/earn-detail-token1.svg",
    label: "WBTC",
    value: "wbtc",
    address: getContractAddress("WBTC_MAIN_ADDR"),
  },
  {
    src: "/earn-detail-token2.svg",
    label: "USDC",
    value: "usdc",
    address: getContractAddress("USDC_TEST_ADDR"),
  },
];
type FetchBalanceFunction = (info: SelectTokenInfo) => void;
export default function TokenSelect({
  fetchBalance,
}: {
  fetchBalance: FetchBalanceFunction;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectTokenInfo>(TOKEN_OPTIONS[1]);
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
