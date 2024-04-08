import React, { useState } from "react";
import useCachedApiCall from "../../hooks/useCachedApiCall";
import useMetadata from "../../hooks/useMetadata";
import { useWalletConnection } from "../../hooks/useWalletConnection";
import FilterSideBarComponent from "../shared/filterSidebar";
import Header from "../shared/header";
import NFTGrid from "../shared/nftgrid";

const TheCollection = () => {
  const collectionSlug = "avatarnft-31";
  const { isConnected, acc } = useWalletConnection();
  const nftData = useCachedApiCall(collectionSlug);
  const initialData = useMetadata(nftData);
  const [displayData, setDisplayData] = useState(initialData);

  return (
    <div>
      <Header title="The Collection" />
      <div className="row py-5 cards-container">
        <FilterSideBarComponent
          initialData={initialData}
          onDataChange={setDisplayData}
        />
        <NFTGrid
          filteredData={displayData}
          isConnected={isConnected}
          acc={acc}
          showMintOption
        />
      </div>
    </div>
  );
};

export default TheCollection;
