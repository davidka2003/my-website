import { BigNumber, ethers } from "ethers";
import { IUserWallet, NetworkT } from "types/wallet";

export const getUserWallet = async (
  signer: ethers.Signer
): Promise<IUserWallet | undefined> => {
  try {
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    const network = await signer.getChainId();
    const networkType: NetworkT =
      network == 1 ? "mainnet" : network == 2 ? "polygon" : "testnet";
    return {
      authorized: false,
      balance: balance.toString(),
      authorizing: false,
      network: networkType,
      wallet: address,
    };
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
