export interface RsvInfo {
    r: `0x${string}`;
    s: `0x${string}`;
    v: bigint;
}
export interface SelectTokenInfo {
    src: string;
    label: string;
    value: string;
    address: string;
}