import axios from "@utils/configs/axios";
import { ethers } from "ethers";

export const Mint = async (
  contract: ethers.Contract,
  token: string,
  nftName: string,
  tokenId: number,
  salt: string
) => {
  const tx = await contract.mint(ethers.utils.toUtf8Bytes(salt), token, tokenId, nftName);
  await tx.wait();
};
export const getSignature = async (sessionId: string, matchId: string, wallet: string) => {
  return (
    await axios.post<{
      data: { token: string; salt: string; tokenId: number; nftName: string };
    }>("/sign", {
      sessionId,
      matchId,
      wallet,
    })
  ).data.data;
};
// export const whitelistRandomMint = async (
//   contract: ethers.Contract,
//   proof: string[],
//   amount = 1
// ) => {
//   console.log(proof);
//   const tx = await contract.whitelistRandomMint(amount, proof, {
//     value: ethers.utils.parseEther("0.05").mul(amount), //.(amount),
//   });
//   await tx.wait();
// };
