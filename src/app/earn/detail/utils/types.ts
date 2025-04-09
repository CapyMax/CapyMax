export interface RsvInfo {
  r: `0x${string}`;
  s: `0x${string}`;
  v: bigint;
}
export interface SelectTokenInfo {
  src: string;
  label: string;
  value: number;
  address: string;
  decimal: number;
}
/**
 * . `tokenType`: 代币类型（0: WBTC, 1: USDC）
 */
export enum TokenType {
  TYPE_0 = 0,
  TYPE_1 = 1,
}
export type ContractConfig = {
  main: `0x${string}`;
  usdc: `0x${string}`;
  wbtc: `0x${string}`;
  chainId: 421614 | 42161;
};
export interface DepositInfo {
  tokenType: TokenType;
  amount: bigint;
  referralCode: number;
  deadline: bigint;
  v: bigint;
  r: string;
  s: string;
}
export interface Decoded {
  eventName: string;
  args:
    | {
        depositId: `0x${string}`;
        user: `0x${string}`;
        tokenType: number;
        amount: bigint;
        borrowAmount: bigint;
        timestamp: bigint;
      }
    | undefined;
}
export type PermitSignature = {
  v: bigint;
  r: `0x${string}`;
  s: `0x${string}`;
};
