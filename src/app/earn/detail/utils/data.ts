export const enum CHAIN_ID {
    'arbitrumSepolia' = 421614,
    'arbitrumOne' = 42161
}
export const CHAIN_IDS = [
    CHAIN_ID['arbitrumSepolia'], CHAIN_ID['arbitrumOne']
]
export const CONTRACT_ADDRESS = {
    WBTC_MAIN_ADDR: "0x806D0637Fbbfb4EB9efD5119B0895A5C7Cbc66e7",
    USDC_TEST_ADDR: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
    MAIN_ADDR: "0xcc175f87bafb29e1d927528b6f93b0432af0e15a",
} as const;


type ContractConfig = {
    tokenMessenger: `0x${string}`;
    usdc: `0x${string}`;
    chainId: number;
};
export const CONTRACT_CONFIG: Record<number, ContractConfig> = {
    [CHAIN_ID['arbitrumSepolia']]: {
        tokenMessenger: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
        usdc: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
        chainId: CHAIN_ID['arbitrumSepolia'],
    },
    [CHAIN_ID['arbitrumOne']]: {
        tokenMessenger: "0x19330d10D9Cc8751218eaf51E8885d058642E08a",
        usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        chainId: CHAIN_ID['arbitrumOne'],
    },
};
