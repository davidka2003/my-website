// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3Modal, { ICoreOptions } from "web3modal";
import { ethers } from "ethers";
export const zeroProvider = new ethers.providers.AlchemyProvider(
  "mainnet",
  "lAUVi6q985u9TWjWjNzOrXYuaBu1Fp4u"
);
export const getContract = (
  provider: ethers.providers.Provider | ethers.Signer
) => {
  return new ethers.Contract("", [], provider);
};

const providerOptions = {};

export const WEB3_MODAL_OPTIONS: Partial<ICoreOptions> = {
  cacheProvider: true, // optional
  providerOptions, // required
};
