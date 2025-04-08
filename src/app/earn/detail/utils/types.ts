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
enum TokenType {
  TYPE_1 = 0,
  TYPE_2 = 1,
}
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
