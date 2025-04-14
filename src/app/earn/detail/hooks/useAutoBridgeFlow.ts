// useAutoBridgeFlow.ts
import { useCallback } from "react";
// import { useSolanaAutoBridge } from "./useSolanaAutoBridge";
import {
  getMessageBytesFromEventLogs,
  getMessageHashFromBytes,
} from "../utils/page";
import { getAttestation } from "@/services/attestationService";
import { useClient } from "./useClient";
import { useWallet } from "./useWallet";
import { TOKEN_MESSENGER_ABI } from "../utils/abi";
import { getChainInfo, encodeSolanaAddress } from "../utils/page";

export function useAutoBridgeFlow() {
  // const { autoReceiveMessage } = useSolanaAutoBridge();
  const { getWalletClient, getPublicClient } = useClient();
  const walletClient = getWalletClient();
  const publicClient = getPublicClient();
  const { address, chainId = 42161 } = useWallet();
  const usdc_addr = getChainInfo(chainId || 42161).usdc;
  const token_message = getChainInfo(chainId || 42161).tokenMessage;
  // 全自动执行流程
  const executeAutoBridge = useCallback(
    async (amount: bigint) => {
      try {
        // 1. 触发Arbitrum Burn
        const { txHash, messageBytes } =
          await (async function initiateArbitrumBurn(amount: bigint) {
            try {
              if (!walletClient) return { txHash: null, messageBytes: null };
              const formattedAddress = encodeSolanaAddress();
              const { request } = await publicClient.simulateContract({
                address: token_message,
                abi: TOKEN_MESSENGER_ABI,
                functionName: "depositForBurn",
                args: [amount, 5, formattedAddress, usdc_addr],
                account: address,
              });
              const transactionHash = await walletClient.writeContract({
                ...request,
              });
              const receipt = await publicClient.waitForTransactionReceipt({
                hash: transactionHash,
              });
              const messageBytes = getMessageBytesFromEventLogs(
                receipt.logs,
                "MessageSent(bytes)"
              );
              return { txHash: transactionHash, messageBytes };
            } catch (error) {
              throw new Error(`Arbitrum burn failed: ${error}`);
            }
          })(amount);

        if (txHash && messageBytes) {
          // 2. 监听事件获取messageHash
          const messageHash = await (async function watchForMessageSent(
            txHash: `0x${string}`
          ) {
            try {
              const receipt = await publicClient.waitForTransactionReceipt({
                hash: txHash,
              });
              const messageBytes = getMessageBytesFromEventLogs(
                receipt.logs,
                "MessageSent(bytes)"
              );
              const messageHash = getMessageHashFromBytes(messageBytes);
              return messageHash;
            } catch (error) {
              throw new Error(`Failed to get message hash: ${error}`);
            }
          })(txHash);

          // 3. 轮询获取Attestation签名
          const signature = await pollAttestation(messageHash);
          console.log("signature", signature);

          // 4. 自动执行Solana端Mint
          // if (signature) {
          //   const solanaTxHash = await autoReceiveMessage({
          //     messageBytes: messageBytes,
          //     signature: signature as `0x${string}`,
          //   });

          //   console.log("Cross-chain complete. Solana TX:", solanaTxHash);
          // }
        }
      } catch (error) {
        console.error("Auto-bridge failed:", error);
      }
    },
    [walletClient, publicClient, address, token_message, usdc_addr]
  );

  // 轮询获取Attestation签名
  async function pollAttestation(messageHash: string) {
    const MAX_RETRIES = 5;
    const DELAY = 5000; // 5秒
    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        const attestation = await getAttestation(messageHash);
        if (attestation && attestation.status === "complete") {
          return attestation.message;
        }
      } catch (error) {
        console.error(
          `Attestation polling attempt ${retries + 1} failed: ${error}`
        );
      }
      retries++;
      await new Promise((resolve) => setTimeout(resolve, DELAY));
    }

    throw new Error(
      "Failed to get attestation signature after multiple attempts"
    );
  }
  return { executeAutoBridge };
}
