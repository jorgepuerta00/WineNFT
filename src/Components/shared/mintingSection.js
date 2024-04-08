import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import CarSetImage from "../../Media/nft_kartenset.png";
import {
  AvatarMarketplaceAbi,
  AvatarMarketplaceAddress,
} from "../../Utils/AvatarMarketplace";
import { useWalletConnection } from "../../hooks/useWalletConnection";

export const MintingSection = () => {
  const { isConnected, acc } = useWalletConnection();

  const integrateContract = () => {
    const web3 = window.web3;
    const contract = new web3.eth.Contract(
      AvatarMarketplaceAbi,
      AvatarMarketplaceAddress
    );
    return contract;
  };

  const mintNFT = async () => {
    try {
      if (!isConnected) {
        toast.error("Please connect wallet first");
        return;
      }

      let contract = integrateContract();

      const web3 = window.web3;
      const price = await contract.methods.mintPrice().call();
      const pricewei = web3.utils.fromWei(price, "ether");
      const balanceWei = await web3.eth.getBalance(acc);
      const balanceEth = web3.utils.fromWei(balanceWei, "ether");

      console.log(balanceEth, "balanceEth");

      if (balanceEth >= pricewei * 5) {
        const NFTResponce = await contract.methods
          .purchaseNFTsPackage("5")
          .send({
            from: acc,
            value: price * 5,
          });
        console.log(NFTResponce, "NFTResponce");
        toast.success("Successfully minted");
      } else {
        console.log("Insufficient ETH balance");
        toast.error("Insufficient ETH balance");
      }
    } catch (error) {
      console.error("Error in mintNFT:", error);
    }
  };

  return (
    <div className="minting-section">
      <div id="nft-list" className="garage-card-container mt-5">
        <div className="text-center pt-5">
          <h1>DON'T HAVE ledgerlegends.racing YET?</h1>
          <p>Then get our 5 UNIQUE NFT Starter Pack for only 2.5 ETH</p>
          <p>
            or get your dream cars from our Silver Collection directly into your
            garage!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 px-5 py-3">
            <div>
              <img className="img-fluid" src={CarSetImage} alt="a" />
              <div className="d-flex justify-content-center ">
                <div className="uniq-nft text-center ">
                  <h3>
                    Get your 5 UNIQUE NFT Starter Pack <span>NOW!</span>
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-1 ">
                <div className="header-button-div  mt-2 py-2 position-relative ">
                  <div className="blue-g-bg-div"></div>
                  <div className="pink-g-bg-div"></div>
                  <div className="black-g-bg-div">
                    <NavLink
                      className="nav-link d-flex justify-content-center mt-2"
                      onClick={mintNFT}
                    >
                      MINT NOW
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
