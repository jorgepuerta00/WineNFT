import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import WineSetImage from "../../Media/nft_kartenset.png";
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
        toast.error("Por favor, conecta tu cartera primero.");
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
        const NFTResponse = await contract.methods
          .purchaseNFTsPackage("5")
          .send({
            from: acc,
            value: price * 5,
          });
        console.log(NFTResponse, "NFTResponse");
        toast.success("NFTs de vinos ecológicos acuñados con éxito.");
      } else {
        console.log("Saldo MATIC insuficiente");
        toast.error("Saldo MATIC insuficiente para la acuñación.");
      }
    } catch (error) {
      console.error("Error al acuñar NFTs:", error);
    }
  };

  return (
    <div className="minting-section">
      <div id="nft-list" className="winery-card-container mt-5">
        <div className="text-center pt-5">
          <h1>¿AÚN NO TIENES TU NFT DE VINO ECOLÓGICO?</h1>
          <p>
            Obtén nuestro paquete de inicio de 5 NFTs únicos de Vinos Ecológicos
            por solo 2.5 MATIC
          </p>
          <p>
            o selecciona tus vinos ecológicos favoritos de nuestra Colección
            Exclusiva directamente en tu bodega digital.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 px-5 py-3">
            <div>
              <img
                className="img-fluid"
                src={WineSetImage}
                alt="Conjunto de NFTs de Vino"
              />
              <div className="d-flex justify-content-center">
                <div className="uniq-nft text-center">
                  <h3>
                    Obtén tu paquete de inicio de 5 NFTs únicos de Vinos
                    Ecológicos <span>¡AHORA!</span>
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-1">
                <div className="header-button-div mt-2 py-2 position-relative">
                  <div className="blue-g-bg-div"></div>
                  <div className="pink-g-bg-div"></div>
                  <div className="black-g-bg-div">
                    <NavLink
                      className="nav-link d-flex justify-content-center mt-2"
                      onClick={mintNFT}
                    >
                      ACUÑAR AHORA
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
