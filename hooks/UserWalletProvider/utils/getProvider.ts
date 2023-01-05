import { ethers } from "ethers";

export const getProvider = (instance: any) => {
  const provider = new ethers.providers.Web3Provider(instance);
  return provider;
};
