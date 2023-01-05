// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3Modal, { ICoreOptions } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import abi from "../constants/abi.json";
export const CONTRACT_ADDRESS = "0xf3f5D9CAece604Ca608234Ad6c0084d16310124D";
export const zeroProvider = new ethers.providers.AlchemyProvider(
  /* "goerli" || */ "mainnet",
  "lAUVi6q985u9TWjWjNzOrXYuaBu1Fp4u"
);
export const getContract = (
  provider: ethers.providers.Provider | ethers.Signer
) => {
  return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
};

const providerOptions = {
  /* See Provider Options Section */
  // coinbasewallet: {
  //   package: CoinbaseWalletSDK, // Required
  //   options: {
  //     infuraId: "4c0e23f7472b44e584ed2f82215fb895",
  //   },
  // },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "4c0e23f7472b44e584ed2f82215fb895",
    },
  },
};

export const WEB3_MODAL_OPTIONS: Partial<ICoreOptions> = {
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
  // theme: "dark",
  // disableInjectedProvider: true,
};
