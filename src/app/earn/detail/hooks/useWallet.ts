// hooks/useWallet.ts
import { useAccount } from 'wagmi'

export function useWallet() {
    const {
        isConnected,
        chainId,
        address
    } = useAccount()

    return {
        isConnected,
        chainId,
        address,
    }
}