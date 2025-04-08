import { CONTRACT_CONFIG, CONTRACT_ADDRESS } from "./data";
export const parseUSDCAmount = (amount: string): bigint => {
  const [integer, decimal = ""] = amount.split(".");
  const trimmedDecimal = decimal.slice(0, 6); // 保留最多6位小数
  const paddedDecimal = trimmedDecimal.padEnd(6, "0"); // 补足6位小数
  return BigInt(integer + paddedDecimal); // 合并后转为BigInt
};

export const getChainInfo = (name: keyof typeof CONTRACT_CONFIG) => {
  const config = CONTRACT_CONFIG[name];
  if (!config) {
    return CONTRACT_CONFIG[42161];
  }
  return config;
};

export const getContractAddress = (
  name: keyof typeof CONTRACT_ADDRESS
): `0x${string}` => {
  const address = CONTRACT_ADDRESS[name];
  if (!address) {
    throw new Error(`Invalid contract name: ${name}`);
  }
  return address;
};
// utils/contract.ts
export const getClientDeadline = () => {
  // 确保只在客户端执行
  if (typeof window === "undefined") {
    return BigInt(0); // 服务端返回默认值
  }
  return BigInt(Math.floor(Date.now() / 1000) + 3600);
};
