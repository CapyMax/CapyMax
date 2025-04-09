// hooks/useClient.ts
import { createWalletClient, createPublicClient, http, custom } from "viem";
import { arbitrum, arbitrumSepolia } from "viem/chains";
import { useWallet } from "./useWallet";
import { CONFIG_NUMBER } from "../utils/data";
export function useClient() {
  const { isConnected, chainId } = useWallet();
  const getChain = () => {
    if (!isConnected || !chainId) return null;
    return chainId === CONFIG_NUMBER.arbitrumOne ? arbitrum : arbitrumSepolia;
  };

  const getWalletClient = () => {
    const chain = getChain();
    return chain
      ? createWalletClient({
          chain,
          transport: custom(window.ethereum!),
        })
      : null;
  };

  const getPublicClient = () => {
    const chain = getChain();
    return chain
      ? createPublicClient({ chain, transport: http() })
      : createPublicClient({
          chain: arbitrum,
          transport: http(),
        });
  };

  return {
    getWalletClient,
    getPublicClient,
    isConnected,
  };
}
