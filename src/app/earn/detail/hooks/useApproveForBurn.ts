import { useEffect, useRef } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useWallet } from "./useWallet";
import { getChainInfo } from "../utils/page";
import { ERC20_ABI } from "../utils/abi";
import { useAutoBridgeFlow } from "./useAutoBridgeFlow";
export function useApproveForBurn() {
  const { executeAutoBridge } = useAutoBridgeFlow();
  const { chainId = 42161 } = useWallet();
  const usdc_addr = getChainInfo(chainId || 42161).usdc;
  const token_message = getChainInfo(chainId || 42161).tokenMessage;
  const { writeContract: writeApprove, data: approveHash } = useWriteContract();
  const { isSuccess: isSuccessApprove } = useWaitForTransactionReceipt({
    hash: approveHash,
  });
  const parsedAmountRef = useRef(BigInt(0));
  useEffect(() => {
    if (approveHash && isSuccessApprove) {
      console.log("writeApprove end,start burn,", parsedAmountRef.current);
      executeAutoBridge(parsedAmountRef.current);
    }
  }, [approveHash, isSuccessApprove]);

  const setApproveForBurn = async (amount: bigint) => {
    try {
      parsedAmountRef.current = amount;
      await writeApprove({
        address: usdc_addr,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [token_message, amount],
      });
    } catch (error) {
      console.error("writeApprove failed:", error);
      throw new Error("writeApprove failed");
    }
  };

  return {
    setApproveForBurn,
  };
}
