import { readContract } from "@wagmi/core";
import { USDC_ABI, WBTC_ABI } from "../utils/abi";
import { getChainInfo } from "../utils/page";
import { config } from "@/components/Provider";
export function useDomainSeparator() {
  const setDomainSeparator = async (tokenType: number) => {
    const info = getChainInfo(42161);
    const address = tokenType ? info.usdc : info.wbtc;
    const abi = tokenType ? USDC_ABI : WBTC_ABI;
    try {
      const domainSeparator = await readContract(config, {
        address,
        abi,
        functionName: "DOMAIN_SEPARATOR",
        chainId: info.chainId,
      });
      return domainSeparator;
    } catch (error) {
      console.error("Wagmi调用失败:", error);
      throw error;
    }
  };
  return {
    setDomainSeparator,
  };
}
