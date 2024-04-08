import { ActionTypes } from "../types";
import { loadWeb3 } from "../../api";
import { disconnectWallet } from "../../api";
export const connectionAction = () => {
  return async (dispatch) => {
    let acc = await loadWeb3();
    let myAcc;
    if (acc === "No Wallet") {
      myAcc = "No Wallet";
    } else if (acc === "Wrong Network") {
      myAcc = "Wrong Network";
    } else {
      myAcc = acc;
    }
    await dispatch({ type: ActionTypes.CONNECT, payload: myAcc });
  };
};

export const disconnectAction = () => {
  return async (dispatch) => {
    try {
      await disconnectWallet();

      if (window.ethereum) {
        dispatch({ type: ActionTypes.DISCONNECT, payload: "Connect Wallet" });
      } else {
        console.log("No Ethereum provider found, cannot dispatch disconnect action");
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };
};
