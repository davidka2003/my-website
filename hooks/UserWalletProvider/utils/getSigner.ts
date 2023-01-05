import { ethers } from "ethers";

export const getSigner = (provider: ethers.providers.Web3Provider) =>
  provider.getSigner();
