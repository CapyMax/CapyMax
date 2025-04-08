import { verifyMessage, hexToBytes } from "viem";

// 签名信息
const r = "0xde7bd90c9f2140a66f586cf5bd9d81ea9a5adb9103888f1254eec59fdcf9882f";
const s = "0x3e9a13f86411307553502f7f832f6bbeb3fc125c17b49217b81f0afbc9b6f642";
const v = 27;

// 假设的原始消息（需要根据实际情况替换）
const message = "Hello, World!";

// 拼接签名
const signature = `0x${r.slice(2)}${s.slice(2)}${v
  .toString(16)
  .padStart(2, "0")}`;

// 验证签名
const recoveredAddress =await verifyMessage({
  message,
  signature: hexToBytes(signature),
});

// 这里需要你提供预期的签名者地址，然后进行对比
const expectedAddress = "0x..."; // 替换为实际的预期地址
if (recoveredAddress === expectedAddress) {
  console.log("签名验证通过！");
} else {
  console.log("签名验证失败！");
}
