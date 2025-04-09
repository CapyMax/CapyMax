import { useEffect, useState } from "react";
import { CONTRACT_CONFIG, CONFIG_NUMBER, CHAIN_IDS } from "../utils/data";
import { useWallet } from "./useWallet";
import { ContractConfig } from "../utils/types";
export const useSwitchChain = () => {
  const { chainId, isConnected } = useWallet();
  const [addressInfo, setAddressInfo] = useState<ContractConfig>(
    CONTRACT_CONFIG[CONFIG_NUMBER["arbitrumOne"]]
  );
  useEffect(() => {
    if (isConnected) {
      if (!CHAIN_IDS.includes(chainId as number)) return;
      setAddressInfo(CONTRACT_CONFIG[chainId as number]);
    }
  }, [chainId, isConnected]);
  return {
    addressInfo,
    setAddressInfo,
  };
};
