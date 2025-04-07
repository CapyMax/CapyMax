
import { getContract } from 'viem'
import { WBTC_ABI } from "../utils/abi"
import { getContractAddress, getClientDeadline } from '../utils/page'
import { useClient } from '../hooks/useClient'
import { useWallet } from '../hooks/useWallet'

interface Info {
    r: `0x${string}`,
    s: `0x${string}`,
    v: bigint,
    value: bigint,
}
export default function usePermit() {
    const deadline = getClientDeadline();
    const { getWalletClient, getPublicClient } = useClient()
    const { address } = useWallet()
    const setPermit = async (info: Info) => {
        const walletClient = getWalletClient()
        const publicClient = getPublicClient()
        if (!walletClient || !address) {
            throw new Error('请先连接钱包')
        }
        const contract = getContract({
            address: getContractAddress('USDC_TEST_ADDR'),
            abi: WBTC_ABI,
            client: { public: publicClient, wallet: walletClient }
        });
        const spender = getContractAddress('MAIN_ADDR')
        const [owner] = await walletClient.getAddresses()
        if (!owner) throw new Error('未连接钱包')
        const {
            value,
            v,
            r,
            s,
        } = info;
        return contract.write.permit(
            [
                owner,
                spender,
                value,
                deadline,
                Number(v),
                r,
                s,
            ], {
            account: owner,
        }
        )
    }
    return {
        setPermit
    }

}