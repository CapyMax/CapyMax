import { useState } from "react";
import Image from "next/image";

const TOKEN_OPTIONS = [
  { icon: "/earn-detail-token1.svg", label: "WBTC", value: "wbtc" },
  { icon: "/earn-detail-token2.svg", label: "USDC", value: "usdc" },
];

export default function TokenSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(TOKEN_OPTIONS[0]);

  return (
    <div className="relative">
      <div className="flex items-center ">
        <Image
          src={selected.icon}
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
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="absolute py-[12px] px-[8px] left-[-38px] mt-[3px] bg-white rounded-lg shadow-md border border-gray-200">
          {TOKEN_OPTIONS.map((token) => (
            <div
              key={token.value}
              className="flex items-center gap-1 hover:bg-[#F3F5F8] cursor-pointer py-[8px] px-[20px] box-border rounded-[8px]"
              onClick={() => {
                setSelected(token);
                setIsOpen(false);
              }}
            >
              <Image
                src={token.icon}
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
