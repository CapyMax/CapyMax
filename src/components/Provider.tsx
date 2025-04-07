"use client";

import React from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import {
  arbitrum,
  arbitrumSepolia,
  avalanche,
  base,
  blast,
  bsc,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from "viem/chains";

import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

const config = createConfig({
  ssr: true,
  chains: [
    mainnet,
    sepolia,
    polygon,
    optimism,
    arbitrum,
    arbitrumSepolia,
    base,
    bsc,
    avalanche,
    zora,
    blast,
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
    [avalanche.id]: http(),
    [zora.id]: http(),
    [blast.id]: http(),
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode>
          <>{children}</>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
