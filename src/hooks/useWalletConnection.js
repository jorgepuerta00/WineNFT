import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectionAction,
  disconnectAction,
} from "../Redux/connection/actions";

export const useWalletConnection = () => {
  const acc = useSelector((state) => state.connect?.connection);
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(
      acc !== "No Wallet" && acc !== "Connect Wallet" && acc !== "Wrong Network"
    );
  }, [acc]);

  const connectWallet = () => {
    dispatch(connectionAction());
  };

  const disconnectWallet = () => {
    dispatch(disconnectAction());
  };

  return { isConnected, connectWallet, disconnectWallet, acc };
};
