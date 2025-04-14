import { useState } from "react";
import { decodeEventLog } from "viem";
import { useClient } from "./useClient";
import { Strategy_Engine_ABI } from "../utils/abi";
import { useWallet } from "./useWallet";
import { getChainInfo } from "../utils/page";
import { DepositInfo, Decoded } from "../utils/types";
export function useDeposit() {
  const { getWalletClient, getPublicClient } = useClient();
  const walletClient = getWalletClient();
  const publicClient = getPublicClient();
  const { address, chainId } = useWallet();
  const [depositId, setDepositId] = useState<string | undefined>();
  const [amount, setAmount] = useState<bigint | undefined>();
  const main_addr = getChainInfo(chainId || 42161).main;
  let gas = BigInt(3000);

  const setDeposit = async (depositInfo: DepositInfo) => {
    try {
      gas = await publicClient.estimateContractGas({
        address: main_addr,
        abi: Strategy_Engine_ABI,
        functionName: "deposit",
        args: [
          depositInfo.tokenType,
          depositInfo.amount,
          depositInfo.referralCode,
          depositInfo.deadline,
          depositInfo.v,
          depositInfo.r,
          depositInfo.s,
        ],
        account: address,
      });
    } catch (error) {
      console.error("Gas 估算失败:", error);
      throw error;
    }
    try {
      if (!walletClient) return;
      const { request } = await publicClient.simulateContract({
        address: main_addr,
        abi: Strategy_Engine_ABI,
        functionName: "deposit",
        args: [
          depositInfo.tokenType,
          depositInfo.amount,
          depositInfo.referralCode,
          depositInfo.deadline,
          depositInfo.v,
          depositInfo.r,
          depositInfo.s,
        ],
        account: address as `0x${string}`,
      });
      const transactionHash = await walletClient.writeContract({
        ...request,
        gas,
      });
      console.log("transactionHash:", transactionHash);
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: transactionHash,
      });

      if (receipt.logs.length > 0) {
        for (const log of receipt.logs) {
          try {
            if (log.address.toLowerCase() !== main_addr.toLowerCase()) {
              continue;
            }
            const decoded = decodeEventLog({
              abi: Strategy_Engine_ABI,
              data: log.data,
              topics: log.topics,
              eventName: "Deposited",
            }) as Decoded;

            if (decoded && decoded.eventName === "Deposited" && decoded.args) {
              setDepositId(decoded.args.depositId);
              setAmount(decoded.args.amount);
              console.log(
                "depositId",
                decoded.args.depositId,
                "amount",
                decoded.args.amount
              );
              //0xda60a9ac094b218587126b8d490e9b6c91840708823df491db2939c23ac1bd8b
              break;
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.error("存款交易失败:", error);
      throw error;
    }
  };

  return {
    setDeposit,
    depositId,
    amount,
  };
}
