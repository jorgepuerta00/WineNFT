import { AvatarNFTAbi, AvatarNFTAddress } from "../Utils/AvatarNFT";

const fetchNFTData = async (isConnected, acc) => {
  console.log("isConnected:", isConnected);
  console.log("acc:", acc);

  if (!isConnected || acc === "Connect Wallet") {
    return { data: [] };
  }

  try {
    const web3 = window.web3;
    const AvatarNFTContract = new web3.eth.Contract(
      AvatarNFTAbi,
      AvatarNFTAddress
    );
    const tokenURLs = await AvatarNFTContract.methods
      .getTokenURLsByOwner(acc)
      .call();
    const dataPromises = tokenURLs.map(async (url) => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          const updatedUrl = url.replace(/\/\d+\.json$/, "/unknown.json");
          response = await fetch(updatedUrl);
        }
        return await response.json();
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
      }
    });

    const fetchedData = (await Promise.all(dataPromises)).filter(
      (data) => data !== null
    );
    return { data: fetchedData };
  } catch (error) {
    console.error("Error fetching NFT data:", error);
    return { data: [] };
  }
};

export default fetchNFTData;
