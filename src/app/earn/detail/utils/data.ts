import { arbitrum, arbitrumSepolia } from "viem/chains";
import { USDC_ABI, WBTC_ABI } from "./abi";
import { ContractConfig } from "./types";
export const enum CONFIG_NUMBER {
  "arbitrumSepolia" = 421614,
  "arbitrumOne" = 42161,
  "usdc" = 1,
  "wbtc" = 0,
}

export const CHAIN_IDS = [
  CONFIG_NUMBER["arbitrumSepolia"],
  CONFIG_NUMBER["arbitrumOne"],
];

export const CONTRACT_ADDRESS = {
  WBTC_MAIN_ADDR: "0x806D0637Fbbfb4EB9efD5119B0895A5C7Cbc66e7",
  USDC_TEST_ADDR: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
  MAIN_ADDR: "0x4cdDd987EB7C2D23364c67eaF76A612E519906BC",
} as const;

export const CONTRACT_CONFIG: Record<number, ContractConfig> = {
  [CONFIG_NUMBER["arbitrumSepolia"]]: {
    tokenMessage: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
    main: "0x4cdDd987EB7C2D23364c67eaF76A612E519906BC",
    usdc: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
    wbtc: "0x3f770Ac673856F105b586bb393d122721265aD46",
    chainId: arbitrumSepolia.id,
  },
  [CONFIG_NUMBER["arbitrumOne"]]: {
    tokenMessage: "0x19330d10D9Cc8751218eaf51E8885D058642E08A",
    main: "0x5723bca610da00f548709920f1a12da26714e704",
    usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    wbtc: "0x3f770Ac673856F105b586bb393d122721265aD46",
    chainId: arbitrum.id,
  },
};
export const TOKEN_INFO = {
  [CONFIG_NUMBER["usdc"]]: {
    abi: USDC_ABI,
    decimal: 6,
    version: "2",
  },
  [CONFIG_NUMBER["wbtc"]]: {
    abi: WBTC_ABI,
    decimal: 8,
    version: "4",
  },
} as const;
export type ValidTokenType = keyof typeof TOKEN_INFO;

export const PERMIT_TYPES = {
  Permit: [
    { name: "owner", type: "address" },
    { name: "spender", type: "address" },
    { name: "value", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ],
};
export const SOLANA_ADDRESS = "3tL3r9wihxMSun282vf8ufb2Sz1ApWni5coN88QJJKBQ";
