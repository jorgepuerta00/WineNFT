import Web3 from "web3";
const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia test network",
    nativeCurrency: {
      name: "Sepolia test network",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: [
      `https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    ],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  mainnet: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [
      `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    ],
    blockExplorerUrls: ["https://etherscan.io"],
  },
};

const handleNetworkSwitch = async (networkName) => {
  if (!window.ethereum) {
    throw new Error("No crypto wallet found");
  }

  try {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [networks[networkName]],
    });
  } catch (err) {
    throw new Error("Failed to switch network");
  }
};

const getAccounts = async () => {
  const web3 = window.web3;
  try {
    const accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    throw new Error("Error while fetching accounts");
  }
};

export const disconnectWallet = async () => {
  try {
    if (window.ethereum) {
      const disconnectMethod =
        window.ethereum.disconnect || window.ethereum.close;
      if (disconnectMethod) {
        await disconnectMethod();
        console.log("Wallet disconnected");
      } else {
        console.log("Disconnect method not available");
      }
    } else {
      console.log("No Ethereum provider found");
    }
  } catch (error) {
    console.error("Error disconnecting wallet:", error);
  }
};

export const loadWeb3 = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("No Wallet");
    }

    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const netId = await window.web3.eth.getChainId();

    if (netId.toString() !== "11155111") {
      await handleNetworkSwitch("Sepolia test network");
      throw new Error("Wrong Network");
    }

    const accounts = await getAccounts();
    return accounts[0];
  } catch (error) {
    console.error("Error:", error.message);
    return error.message;
  }
};
