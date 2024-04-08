import React, { useCallback, useEffect, useState } from "react";
import fetchNFTData from "../../hooks/useFetchNFTData";
import { useWalletConnection } from "../../hooks/useWalletConnection";
import FilterSideBarComponent from "../shared/filterSidebar";
import Header from "../shared/header";
import { MetamaskWalletConnection } from "../shared/metamaskConnection";
import { MintingSection } from "../shared/mintingSection";
import NFTGrid from "../shared/nftgrid";
import "./Garage.css";

const Garage = () => {
  const { isConnected, acc } = useWalletConnection();
  const [initialData, setInitialData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchNFTData(isConnected, acc);
      setInitialData(response.data);
      setDisplayData(response.data);
    }
    fetchData();
  }, [isConnected, acc]);

  const handleDataChange = useCallback(
    (newData) => {
      setDisplayData(newData);
    },
    [setDisplayData]
  );

  return (
    <div className="winery">
      <Header title="My Garage" />
      <MetamaskWalletConnection />
      {isConnected && initialData.length > 0 ? (
        <div className="winery-card-container mt-5">
          <div className="row py-5 cards-container">
            <FilterSideBarComponent
              initialData={initialData}
              onDataChange={handleDataChange}
            />
            <NFTGrid
              filteredData={displayData}
              isConnected={isConnected}
              acc={acc}
            />
          </div>
        </div>
      ) : (
        <MintingSection />
      )}
    </div>
  );
};

export default Garage;
