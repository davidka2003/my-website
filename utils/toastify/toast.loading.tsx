import { ReactNode } from "react";
import { toast, TypeOptions } from "react-toastify";

export const loadingToast = (message: ReactNode) => {
  const toastId = toast.loading(message);
  return (updatedMessage: ReactNode, type: TypeOptions = "success") => {
    toast.update(toastId, {
      type,
      pauseOnHover: false,
      isLoading: false,
      autoClose: 3000,
      render: updatedMessage,
    });
  };
};
