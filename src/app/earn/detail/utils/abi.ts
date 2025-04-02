import { parseAbi } from "viem";
export const ERC20_ABI = [
    {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
    },
];

export const TOKEN_MESSENGER_ABI = [
    {
        type: "function",
        name: "depositForBurn",
        inputs: [
            { name: "amount", type: "uint256", internalType: "uint256" },
            { name: "destinationDomain", type: "uint32", internalType: "uint32" },
            { name: "mintRecipient", type: "bytes32", internalType: "bytes32" },
            { name: "burnToken", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "_nonce", type: "uint64", internalType: "uint64" }],
        stateMutability: "nonpayable",
    },
];
export const WBTC_ABI = parseAbi([
    "function nonces(address owner) external view returns (uint256)",
    "function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external",
    // 其他函数...
]);