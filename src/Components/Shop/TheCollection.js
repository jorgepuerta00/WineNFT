import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import a from "../../Media/the-collection.png";
import { connectionAction } from "../../Redux/connection/actions";
import {
  AvatarMarketplaceAbi,
  AvatarMarketplaceAddress,
} from "../../Utils/AvatarMarketplace";
import Header from "../shared/header";

const TheCollection = () => {
  const acc = useSelector((state) => state.connect?.connection);
  const dispatch = useDispatch();
  const onConnectAccount = () => {
    console.log("connect wallet");
    dispatch(connectionAction());
  };
  const integrateContract = () => {
    const web3 = window.web3;
    const abcd = new web3.eth.Contract(
      AvatarMarketplaceAbi,
      AvatarMarketplaceAddress
    );
    return abcd;
  };

  const mintNFT = async () => {
    try {
      const web3 = window.web3;

      if (
        acc === "No Wallet" ||
        acc === "Wrong Network" ||
        acc === "Connect Wallet"
      ) {
        onConnectAccount();
      }
      let contract = integrateContract();

      console.log("123");
      const price = await contract.methods.mintPrice().call();
      const pricewei = web3.utils.fromWei(price, "ether");
      // console.log("pricewei", pricewei);

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
    <div>
      <Header title="The Collections" />

      <div className="row py-4">
        <div className="col-lg-6 d-flex justify-content-center ">
          <img className="pic img-fluid" src={a} alt="a" />
        </div>
        <div className="col-lg-6 px-4 d-flex flex-column align-items-lg-end">
          <p className="garage-c-p mt-5">
            The first NFT Collectors Card Game with chrome and horsepower!
          </p>
          <p className="garage-c-p">
            Expand your ledgerlegends.racing set with more cards from our unique
            collection. Each pack contains five surprising cards with unique
            special sports cars and automotive legends of the last 100 years.
          </p>
          <p className="garage-p-p mt-1">
            Their price is only 2.5 ETH including 50 TURBO in addition to your
            NFTs!
          </p>
          <p className="garage-c-p mt-1">
            Connect your Metamask and then click the MINT button to get your
            package.
          </p>
          <p className="garage-c-p mt-1">For secondary market visit OpenSea.</p>
          <p className="garage-c-p mt-1">
            Please be aware that MetaMask has to be installed in your browser to
            mint our NFTs.
          </p>

          <div className="header-button-div   position-relative  me-5 mt-2">
            <div className="blue-m-bg-div"></div>
            <div className="pink-m-bg-div"></div>
            <div className="black-m-bg-div d-flex justify-content-center">
              <button
                className=" nav-link d-flex justify-content-center mt-2 "
                onClick={mintNFT}
                alt=""
              >
                MINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCollection;
