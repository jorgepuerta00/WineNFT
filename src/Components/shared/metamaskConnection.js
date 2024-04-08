import React from "react";
import { NavLink } from "react-router-dom";
import MetaMaskIcon from "../../Media/MetaMask Fox Icon in Flat Style.png";
import { useWalletConnection } from "../../hooks/useWalletConnection";

export const MetamaskWalletConnection = () => {
  const { isConnected, connectWallet, disconnectWallet } =
    useWalletConnection();

  return (
    <div id="wallet-connection" className="row">
      <div className="col-11 mx-auto px-4">
        <h1 className="mt-5">BIENVENIDO A TU BODEGA PERSONAL</h1>
        <div className="d-flex ">
          <img className="fox-icon" src={MetaMaskIcon} alt="MetaMask Icono" />
          <h5 className="mt-4">
            Por favor, conecta a MetaMask para ver los vinos que posees.
          </h5>
        </div>
        <div className="mx-2">
          <p>
            <span className="me-1">Nota:</span>si estás accediendo con un
            dispositivo móvil,
          </p>
          <p>
            necesitarás acceder a esta página a través del navegador en la
            aplicación de MetaMask
          </p>
        </div>
        <div>
          <div className="header-button-div ms-5 mt-2 py-2 position-relative ">
            <div className="blue-g-bg-div"></div>
            <div className="pink-g-bg-div"></div>
            <div className="black-g-bg-div">
              <NavLink
                onClick={!isConnected ? connectWallet : disconnectWallet}
                className="nav-link d-flex justify-content-center mt-2"
              >
                {!isConnected ? "Conectar Cartera" : "Desconectar Cartera"}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
