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

const useCachedApiCall = (collectionSlug) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = fetchFromCache(cacheKey(collectionSlug));
      if (cachedData) {
        console.log("Using cached data for", collectionSlug);
        setData(cachedData);
        return;
      }

      try {
        const response = await axios.get(
          `https://testnets-api.opensea.io/api/v2/collection/${collectionSlug}/nfts`,
          {
            headers: {
              accept: "application/json",
              "x-api-key": "Your-API-Key",
            },
          }
        );
        saveToCache(cacheKey(collectionSlug), response.data.nfts);
        setData(response.data.nfts);
        console.log("Fetched data for", collectionSlug);
        return;
      } catch (error) {
        console.error("An error occurred during the API call:", error);
        setData(null);
        return null;
      }
    };

    fetchData();
  }, [collectionSlug]);

  return data;
};

export default useCachedApiCall;
