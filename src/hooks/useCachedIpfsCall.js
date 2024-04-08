import { useState, useEffect } from "react";
import axios from "axios";

const cacheDuration = 60 * 60 * 1000;

const cacheKey = (key) => `nftData-${key}`;

const fetchFromCache = (key) => {
  const item = localStorage.getItem(key);
  if (item) {
    const cachedData = JSON.parse(item);
    if (new Date().getTime() - cachedData.timestamp < cacheDuration) {
      return cachedData.data;
    }
    localStorage.removeItem(key);
  }
  return null;
};

const saveToCache = (key, data) => {
  const cacheItem = {
    timestamp: new Date().getTime(),
    data: data,
  };
  localStorage.setItem(key, JSON.stringify(cacheItem));
};

const useCachedIpfsCall = () => {
  const [data, setData] = useState(null);
  const metadataBaseUrl = process.env.REACT_APP_METADATA_BASE_URL;
  const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const cacheDataKey = cacheKey("nfts");
      const cachedData = fetchFromCache(cacheDataKey);
      if (cachedData) {
        console.log("Using cached data");
        setData(cachedData);
        return;
      }

      const nfts = [];
      let index = 0;
      let continueFetching = true;

      while (continueFetching) {
        const metadataUrl = `${metadataBaseUrl}/${index}.json`;
        const imageUrl = `${imageBaseUrl}/${index}.png`;

        try {
          await axios.get(metadataUrl);

          nfts.push({
            image_url: imageUrl,
            metadata_url: metadataUrl,
          });
          index++;
        } catch (error) {
          console.error("Error fetching files:", metadataUrl, error);
          continueFetching = false;
        }
      }

      if (nfts.length > 0) {
        saveToCache(cacheDataKey, nfts);
        setData(nfts);
        console.log("Fetched data and images");
      } else {
        setData(null);
      }
    };

    fetchData();
  }, [imageBaseUrl, metadataBaseUrl]);

  return data;
};

export default useCachedIpfsCall;
