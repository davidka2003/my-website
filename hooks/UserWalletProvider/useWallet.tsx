"use client";
import { useContext, useState } from "react";
import { IUserWallet } from "types/wallet";
import { WalletContext } from ".";
import { getProvider } from "./utils/getProvider";
import { getSigner } from "./utils/getSigner";
import { getUserWallet } from "./utils/getWalletData";

type TOnConnectSuccess = (userWallet: IUserWallet) => void;
type TOnConnectInit = () => void;
type TOnConnectError = (reason: string) => void;
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (
    !(
      context.useInstanceState &&
      context.useProviderState &&
      context.useSignerState &&
      context.useUserWalletState
    )
  ) {
    throw "Hook useWallet can be used only within WalletProvider context";
  }
  const [instance, setInstance] = context.useInstanceState;
  const [provider, setProvider] = context.useProviderState;
  const [signer, setSigner] = context.useSignerState;
  const [userWallet, setUserWallet] = context.useUserWalletState;
  const web3Modal = context.web3Modal;
  //callbacks
  const [onConnected, setOnConnected] = useState<
    TOnConnectSuccess | undefined
  >();
  const [onConnectError, setOnConnectError] = useState<
    TOnConnectError | undefined
  >();
  const [onConnectInit, setOnConnectInit] = useState<
    TOnConnectInit | undefined
  >();
  const onConnectWallet = (callback: TOnConnectSuccess) => {
    setOnConnected(() => callback);
  };
  const onConnectWalletError = (callback: TOnConnectError) => {
    setOnConnectError(() => callback);
  };
  const onConnectWalletInit = (callback: TOnConnectInit) => {
    setOnConnectInit(() => callback);
  };
  const connectWallet = async () => {
    try {
      onConnectInit?.();
      if (!web3Modal) {
        throw "Not initialized";
      }
      const instance = await web3Modal.connect();
      const provider = getProvider(instance);
      const signer = getSigner(provider);
      const userWallet = await getUserWallet(signer);
      setSigner(signer);
      setProvider(provider);
      setInstance(instance);
      setUserWallet(userWallet);
      if (userWallet) {
        onConnected?.(userWallet);
      }
    } catch (error) {
      console.error(error);
      onConnectError?.("Something went wrong");
    }
  };
  const disconnectWallet = async () => {
    setUserWallet(undefined);
    debugger;
    await instance.clearCachedProvider?.();
  };
  return {
    connectWallet,
    onConnectWallet,
    onConnectWalletError,
    onConnectWalletInit,
    userWallet,
    disconnectWallet,
    signer,
    isConnected: !!userWallet,
  };
};
