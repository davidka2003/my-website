import { IUserWallet, NetworkT } from "types/wallet";
import { getContract, WEB3_MODAL_OPTIONS } from "@utils/configs/provider";
import { ethers } from "ethers";
import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { getUserWallet } from "./utils/getWalletData";
import Web3Modal from "web3modal";

type UseStateT<T> = [T, Dispatch<SetStateAction<T>>];
interface WalletContextI {
  useUserWalletState: UseStateT<IUserWallet | undefined> | undefined;
  useProviderState:
    | UseStateT<ethers.providers.Web3Provider | undefined>
    | undefined;
  useSignerState:
    | UseStateT<ethers.providers.JsonRpcSigner | undefined>
    | undefined;
  useInstanceState: UseStateT<any> | undefined;
  web3Modal: Web3Modal | undefined;
}
export const WalletContext = createContext<WalletContextI>({
  useProviderState: undefined,
  useSignerState: undefined,
  useInstanceState: undefined,
  useUserWalletState: undefined,
  web3Modal: undefined,
});

interface IUserWalletProviderP {
  children: React.ReactNode;
}
const UserWalletProvider = ({ children }: IUserWalletProviderP) => {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >();
  const [signer, setSigner] = useState<
    ethers.providers.JsonRpcSigner | undefined
  >();
  const [instance, setInstance] = useState<any>();
  const [userWallet, setUserWallet] = useState<IUserWallet | undefined>();
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | undefined>(undefined);
  useEffect(() => {
    const init = async () => {
      if (!(provider && signer && instance)) return;

      instance.on("accountsChanged", async () => {
        if (!signer) return;
        const userWallet = await getUserWallet(signer);
        setUserWallet(userWallet);
      });
      provider.on("network", (newNetwork, oldNetwork) => {
        oldNetwork && window.location.reload();
      });
    };
    instance && init();
  }, [!!instance, !!provider, !!signer]);
  useEffect(() => {
    const web3Modal = new Web3Modal(WEB3_MODAL_OPTIONS);
    setWeb3Modal(web3Modal);
  }, []);
  return (
    <WalletContext.Provider
      value={{
        useProviderState: [provider, setProvider],
        useSignerState: [signer, setSigner],
        useInstanceState: [instance, setInstance],
        useUserWalletState: [userWallet, setUserWallet],
        web3Modal: web3Modal,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default UserWalletProvider;

declare global {
  interface Window {
    /** @ts-expect-error */
    ethereum: {
      isMetamask: boolean;
    };
  }
}
//   "any"
