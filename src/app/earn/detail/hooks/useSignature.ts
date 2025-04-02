import { parseSignature } from 'viem'
import { WBTC_ABI } from "../utils/abi"
import { deadline } from "../utils/data"
import { useClient } from '../hooks/useClient'
import { useWallet } from '../hooks/useWallet'
type PermitSignature = {
    v: bigint
    r: `0x${string}`
    s: `0x${string}`
}

export default function useSignature() {
    const { getWalletClient, getPublicClient } = useClient()
    const { address } = useWallet()

    const types = {
        Permit: [
            { name: 'owner', type: 'address' },
            { name: 'spender', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' }
        ]
    }
    const setSignature = async (
        tokenAddress: `0x${string}`,
        spender: `0x${string}`,
        value: string,
        decimals: number,
        chainId: number
    ): Promise<PermitSignature> => {
        const walletClient = getWalletClient()
        const publicClient = getPublicClient()
        if (!walletClient || !address) {
            throw new Error('请先连接钱包')
        }
        const [owner] = await walletClient.getAddresses()
        const tokenName = await publicClient.readContract({
            address: tokenAddress,
            abi: [{
                name: 'name',
                type: 'function',
                stateMutability: 'view',
                inputs: [],
                outputs: [{ type: 'string' }]
            }],
            functionName: 'name'
        }) as string
        const nonce = await publicClient.readContract({
            address: tokenAddress,
            abi: WBTC_ABI,
            functionName: 'nonces',
            args: [owner]
        }) as bigint

        const domain = {
            name: tokenName,
            version: '1',
            chainId,
            verifyingContract: tokenAddress
        }

        const message = {
            owner,
            spender,
            value,
            nonce,
            deadline
        }
        const signature = await walletClient.signTypedData({
            account: owner,
            domain,
            types,
            primaryType: 'Permit',
            message
        })
        const { v, r, s } = parseSignature(signature) as PermitSignature
        return { v, r, s }
    }

    return { setSignature }
}
