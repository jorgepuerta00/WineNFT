import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  AvatarMarketplaceAbi,
  AvatarMarketplaceAddress,
} from "../../Utils/AvatarMarketplace";
import PropTypes from "prop-types";

const NFTCard = ({ nft, showMintOption, isConnected, acc }) => {
  const [price, setPrice] = useState("0.5");

  const integrateContract = () => {
    try {
      const web3 = window.web3;
      const contract = new web3.eth.Contract(
        AvatarMarketplaceAbi,
        AvatarMarketplaceAddress
      );
      return contract;
    } catch (error) {
      console.error("Error integrating contract:", error);
    }
  };

  const mintNFT = async () => {
    try {
      const web3 = window.web3;

      if (!isConnected) {
        toast.info("Please log in to your wallet to mint NFTs");
        return;
      }
      let contract = integrateContract();

      // Fetch mint price in Wei as a string
      const mintPriceWei = await contract.methods.mintPrice().call();
      // Convert mint price to Ether for display
      const mintPriceEther = web3.utils.fromWei(mintPriceWei, "ether");
      setPrice(mintPriceEther);
      console.log("mintPriceEther", mintPriceEther);

      // Estimate gas for the purchaseNFTsPackage function
      const estimatedGas = await contract.methods
        .purchaseNFTsPackage("1")
        .estimateGas({ from: acc, value: mintPriceWei });
      console.log("estimatedGas", estimatedGas);

      // Get current gas price from the network, also as a string
      const gasPrice = await web3.eth.getGasPrice();
      console.log("gasPrice", gasPrice);

      // Calculate total gas cost in Wei as a string
      // Use web3.utils.toBN for safe multiplication of large numbers
      const totalGasCostWei = web3.utils
        .toBN(estimatedGas)
        .mul(web3.utils.toBN(gasPrice));
      console.log("totalGasCostWei", totalGasCostWei.toString());

      // Calculate total transaction cost in Wei (still working with BN objects here)
      const totalTransactionCostWei = web3.utils
        .toBN(mintPriceWei)
        .add(totalGasCostWei);
      console.log(
        "totalTransactionCostWei",
        totalTransactionCostWei.toString()
      );

      // Fetch user's balance in Wei as a string
      const balanceWei = await web3.eth.getBalance(acc);
      console.log("balanceWei", balanceWei);

      // Compare using BN comparison methods
      if (web3.utils.toBN(balanceWei).gte(totalTransactionCostWei)) {
        const NFTResponce = await contract.methods
          .purchaseNFTsPackage("1")
          .send({
            from: acc,
            value: mintPriceWei,
            gas: estimatedGas,
            gasPrice: gasPrice,
          });
        console.log(NFTResponce, "NFTResponce");
        toast.success("Successfully minted");
      } else {
        console.log("Insufficient funds balance");
        toast.error("Insufficient funds balance");
      }
    } catch (error) {
      console.error("Error in mintNFT:", error);
      if (error?.message?.includes("insufficient funds")) {
        toast.error("Insufficient funds balance");
        return;
      }
      toast.warn("Purchase was cancelled");
    }
  };

  return (
    <div className="col-lg-4 px-lg-0 px-3 d-flex justify-content-center">
      <div className="data-card my-3 card-inner ">
        <img className="img-fluid" src={nft.image} alt={nft.name} />
        {showMintOption && (
          <>
            <div className="d-flex justify-content-center mt-1">
              Mint now and get <span className="span-pink mx-1">50 Turbo</span>{" "}
              in return
            </div>
            <div className="d-flex justify-content-center">
              Price: {price} ETH
            </div>
            <div className="d-flex justify-content-center">
              <div className="header-button-div position-relative mt-2">
                <div className="blue-m-bg-div"></div>
                <div className="pink-m-bg-div"></div>
                <div className="black-m-bg-div d-flex justify-content-center">
                  <button
                    className="nav-link d-flex justify-content-center mt-2"
                    onClick={mintNFT}
                  >
                    MINT
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

NFTCard.propTypes = {
  nft: PropTypes.object.isRequired,
  showMintOption: PropTypes.bool,
  isConnected: PropTypes.bool,
  acc: PropTypes.string,
};

NFTCard.defaultProps = {
  showMintOption: false,
  isConnected: false,
  acc: "0x",
};

export default NFTCard;
