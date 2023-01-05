import { BigNumber, ethers } from "ethers";

export interface IUserWalletBase {
  balance: string;
  wallet: string;
  network: NetworkT;
}

export interface IUserWallet extends IUserWalletBase {
  authorized: boolean;
  authorizing: boolean;
}
export type NetworkT = "mainnet" | "testnet" | "polygon";
