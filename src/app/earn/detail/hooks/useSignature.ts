import { parseSignature, recoverTypedDataAddress } from "viem";
import { USDC_ABI } from "../utils/abi";
import { getClientDeadline } from "../utils/page";
import { useClient } from "../hooks/useClient";
import { useWallet } from "../hooks/useWallet";
type PermitSignature = {
  v: bigint;
  r: `0x${string}`;
  s: `0x${string}`;
};

export default function useSignature() {
  const deadline = getClientDeadline();
  const { getWalletClient, getPublicClient } = useClient();
  const { address } = useWallet();

  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };
  const setSignature = async (
    tokenAddress: `0x${string}`,
    spender: `0x${string}`,
    value: string,
    decimals: number,
    chainId: number
  ): Promise<PermitSignature | null> => {
    try {
      const walletClient = getWalletClient();
      const publicClient = getPublicClient();
      if (!walletClient || !address) {
        throw new Error("请先连接钱包");
      }
      const tokenName = (await publicClient.readContract({
        address: tokenAddress,
        abi: [
          {
            name: "name",
            type: "function",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
        ],
        functionName: "name",
      })) as string;

      const nonce = (await publicClient.readContract({
        address: tokenAddress,
        abi: USDC_ABI,
        functionName: "nonces",
        args: [address],
      })) as bigint;

      const domain = {
        name: tokenName,
        version: "2",
        chainId,
        verifyingContract: tokenAddress,
      };
      const message = {
        owner: address,
        spender,
        value: BigInt(value) * BigInt(10 ** decimals),
        nonce,
        deadline,
      };

      const signature = await walletClient.signTypedData({
        account: address,
        domain,
        types,
        primaryType: "Permit",
        message,
      });

      const recoveredAddress = await recoverTypedDataAddress({
        domain,
        types,
        primaryType: "Permit",
        message,
        signature,
      });
      if (recoveredAddress === address) {
        const rsvInfo = parseSignature(signature) as PermitSignature;
        return rsvInfo;
      }
      console.log("recoveredAddress:", recoveredAddress);

      return null;
    } catch (error) {
      console.error("Error in setSignature:", error);
      throw error;
    }
  };

  return { setSignature };
}
