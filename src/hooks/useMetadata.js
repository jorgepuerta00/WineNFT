import { useState, useEffect } from "react";
import axios from "axios";

const useMetadata = (nftData) => {
  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    if (!nftData) return;

    const fetchMetadata = async () => {
      const metadataUrls = nftData
        .map((nft) => nft.metadata_url)
        .filter(Boolean);
      const metadataResponses = await Promise.all(
        metadataUrls.map((url) =>
          axios.get(url).catch((err) => {
            console.error(`Failed to fetch metadata from ${url}`, err);
            return null;
          })
        )
      );

      const fetchedMetadata = metadataResponses
        .map((response) => response?.data)
        .filter(Boolean);
      setMetadata(fetchedMetadata);
    };

    fetchMetadata();
  }, [nftData]);

  return metadata;
};

export default useMetadata;
