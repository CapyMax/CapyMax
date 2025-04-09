import { parseSignature, recoverTypedDataAddress } from "viem";
import { getClientDeadline } from "../utils/page";
import { PERMIT_TYPES, ValidTokenType } from "../utils/data";
import { PermitSignature } from "../utils/types";
import { useClient } from "../hooks/useClient";
import { useWallet } from "../hooks/useWallet";
import { getChainInfo, getTokenInfo } from "../utils/page";

export function useSignature() {
  const deadline = getClientDeadline();
  const { getWalletClient, getPublicClient } = useClient();
  const { address, chainId = 42161 } = useWallet();

  const setSignature = async (
    amount: string,
    tokenType: ValidTokenType
  ): Promise<PermitSignature | null> => {
    try {
      const info = getChainInfo(chainId);
      const spender = info.main;
      const tokenInfo = getTokenInfo(tokenType);
      const tokenAddress = tokenType ? info.usdc : info.wbtc;
      const abi = tokenInfo.abi;
      const decimal = tokenInfo.decimal;
      const version = tokenInfo.version;

      const walletClient = getWalletClient();
      const publicClient = getPublicClient();
      if (!walletClient || !address) {
        throw new Error("请先连接钱包");
      }

      const [tokenName, nonce] = await Promise.all([
        publicClient.readContract({
          address: tokenAddress,
          abi,
          functionName: "name",
        }) as Promise<string>,
        publicClient.readContract({
          address: tokenAddress,
          abi,
          functionName: "nonces",
          args: [address],
        }),
      ]);

      const DOMAIN = {
        name: tokenName,
        version,
        chainId,
        verifyingContract: tokenAddress,
      };
      const value = BigInt(amount) * BigInt(10 ** decimal);
      const message = {
        owner: address,
        spender,
        value,
        nonce,
        deadline,
      };

      const signature = await walletClient.signTypedData({
        account: address,
        domain: DOMAIN,
        types: PERMIT_TYPES,
        primaryType: "Permit",
        message,
      });

      const recoveredAddress = await recoverTypedDataAddress({
        domain: DOMAIN,
        types: PERMIT_TYPES,
        primaryType: "Permit",
        message,
        signature,
      });
      if (recoveredAddress === address) {
        const rsvInfo = parseSignature(signature) as PermitSignature;
        return rsvInfo;
      }
      return null;
    } catch (error) {
      console.error("Error in setSignature:", error);
      throw error;
    }
  };

  return { setSignature };
}
