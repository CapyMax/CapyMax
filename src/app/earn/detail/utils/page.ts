import { padHex, toHex } from "viem";
import bs58 from "bs58";
import { toEventSelector, decodeAbiParameters, keccak256 } from "viem";
import type { Log, Hex } from "viem";

import {
  CONTRACT_CONFIG,
  CONTRACT_ADDRESS,
  TOKEN_INFO,
  CONFIG_NUMBER,
  ValidTokenType,
  SOLANA_ADDRESS,
} from "./data";

export const parseUSDCAmount = (amount: string): bigint => {
  const [integer, decimal = ""] = amount.split(".");
  const trimmedDecimal = decimal.slice(0, 6); // 保留最多6位小数
  const paddedDecimal = trimmedDecimal.padEnd(6, "0"); // 补足6位小数
  return BigInt(integer + paddedDecimal); // 合并后转为BigInt
};

export const getChainInfo = (name: keyof typeof CONTRACT_CONFIG) => {
  const config = CONTRACT_CONFIG[name];
  if (!config) {
    return CONTRACT_CONFIG[CONFIG_NUMBER["arbitrumOne"]];
  }
  return config;
};
export const getTokenInfo = (tokenType: ValidTokenType) => {
  return TOKEN_INFO[tokenType];
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

export const getClientDeadline = () => {
  if (typeof window === "undefined") {
    return BigInt(0);
  }
  return BigInt(Math.floor(Date.now() / 1000) + 3600);
};
export const encodeSolanaAddress = (): `0x${string}` => {
  const mintRecipient = padHex(toHex(bs58.decode(SOLANA_ADDRESS)), {
    size: 32,
  });
  return mintRecipient;
};
/**
 * 从事件日志中解码消息字节
 * @param logs 交易的事件日志数组
 * @param topic 要过滤的事件主题（完整的事件签名，如 "MessageSent(bytes)"）
 * @returns 解码后的消息字节（Hex 格式）
 */
export function getMessageBytesFromEventLogs(logs: Log[], topic: string): Hex {
  // 生成事件主题哈希
  const eventTopic = toEventSelector(topic);

  // 查找匹配的日志条目
  const log = logs.find((l) => l.topics[0] === eventTopic);
  if (!log) {
    throw new Error("No matching log found for the given topic");
  }

  // 解码日志数据中的 bytes 类型
  const decoded = decodeAbiParameters(
    [{ type: "bytes" }], // ABI 参数描述
    log.data // 日志中的原始数据
  );

  return decoded[0]; // 返回解码后的 bytes 数据
}

/**
 * 计算消息字节的 Keccak256 哈希
 * @param message Hex 格式的消息字节
 * @returns 消息的哈希值（Hex 格式）
 */
export function getMessageHashFromBytes(message: Hex): Hex {
  return keccak256(message);
}
