import { useEffect, useRef, useCallback } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { getChainInfo } from "../utils/page";
import { ERC20_ABI, TOKEN_MESSENGER_ABI } from "../utils/abi";
import { CHAIN_IDS } from "../utils/data";
export default function useCrossChainButton() {
  const { chainId = 0 } = useAccount();
  const { writeContract: writeApprove, data: approveHash } = useWriteContract();
  const { writeContract: writeBurn } = useWriteContract();
  const { isLoading: isConfirmingApprove } = useWaitForTransactionReceipt({
    hash: approveHash,
  });
  const parsedAmountRef = useRef(BigInt(0));
  useEffect(() => {
    if (approveHash && !isConfirmingApprove) {
      handleBurn(parsedAmountRef.current);
    }
  }, [approveHash, isConfirmingApprove]);

  const setCrossChain = async (amount: bigint) => {
    try {
      if (!CHAIN_IDS.includes(chainId)) {
        throw new Error("Please connect to Arbitrum network");
      }
      const config = getChainInfo(chainId);
      parsedAmountRef.current = amount;
      await writeApprove({
        address: config.usdc as `0x${string}`,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [config.tokenMessenger as `0x${string}`, amount],
      });
      console.log("writeApprove end");
    } catch (error) {
      console.error("writeApprove failed:", error);
      alert(error instanceof Error ? error.message : "Unknown error");
    }
  };

  const handleBurn = useCallback(
    async (parsedAmount: bigint) => {
      try {
        const config = getChainInfo(chainId);
        const formattedAddress = encodeSolanaAddress();
        await writeBurn({
          address: config.tokenMessenger as `0x${string}`,
          abi: TOKEN_MESSENGER_ABI,
          functionName: "depositForBurn",
          args: [
            parsedAmount,
            5,
            formattedAddress,
            config.usdc as `0x${string}`,
          ],
        });
        console.log("writeBurn end");
      } catch (error) {
        console.error("writeBurn failed:", error);
      }
    },
    [chainId, writeBurn]
  );

  // Solana地址转换函数
  const encodeSolanaAddress = () => {
    const address = "3tL3r9wihxMSun282vf8ufb2Sz1ApWni5coN88QJJKBQ";
    const hex = address.startsWith("0x")
      ? address.slice(2)
      : Buffer.from(address).toString("hex");
    return `0x${hex.padEnd(64, "0")}` as `0x${string}`;
  };
  return {
    setCrossChain,
  };
}
