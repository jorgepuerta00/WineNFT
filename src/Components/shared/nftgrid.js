import React from "react";
import NFTCard from "./nftcard";

const NFTGrid = ({ filteredData, showMintOption, isConnected, acc }) => {
  return (
    <div className="col-lg-9 col-7 px-auto">
      <div className="row">
        {filteredData.map((nft, index) => (
          <NFTCard
            key={index}
            nft={nft}
            showMintOption={showMintOption}
            isConnected={isConnected}
            acc={acc}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTGrid;
