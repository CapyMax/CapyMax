"use client";

import React from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import { arbitrum, arbitrumSepolia } from "viem/chains";

import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export const config = createConfig({
  ssr: true,
  chains: [arbitrum, arbitrumSepolia],
  transports: {
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
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
