import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import a from "../../Media/rose-gold_shop.png";
import Header from "../shared/header";
import { connectionAction } from "../../Redux/connection/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  AvatarMarketplaceAbi,
  AvatarMarketplaceAddress,
} from "../../Utils/AvatarMarketplace";

const RosegoldCollection = () => {
  const [submenu, setSubmenu] = useState(false);
  const [countryMenu, setCountryMenu] = useState(false);
  const [cylinderMenu, setCylinderMenu] = useState(false);
  const [typeMenu, setTypeMenu] = useState(false);
  const [accelertaionMenu, setAccelertionMenu] = useState(false);
  const [engineMenu, setEngineMenu] = useState(false);
  const [horsepowerMenu, sethorsepowerMenu] = useState(false);
  const [topspeedMenu, settopspeedMenu] = useState(false);
  const [weightMenu, setweightMenu] = useState(false);
  const [colorsData, setColorsData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [typeData, setTypeData] = useState({});
  const [cylinderData, setCylinderData] = useState({});
  const [selectedColors, setSelectedColors] = useState([]); // State variable for selected colors
  const [selectedCountries, setSelectedCountries] = useState([]); // State variable for selected countries
  const [selectedCylinders, setSelectedCylinders] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [accelerationMin, setAccelerationMin] = useState("");
  const [accelerationMax, setAccelerationMax] = useState("");
  const [engineSizeMin, setEngineSizeMin] = useState("");
  const [engineSizeMax, setEngineSizeMax] = useState("");
  const [horsepowerMin, setHorsepowerMin] = useState("");
  const [horsepowerMax, setHorsepowerMax] = useState("");
  const [topSpeedMin, setTopSpeedMin] = useState("");
  const [topSpeedMax, setTopSpeedMax] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [price, setPrice] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [NFTData, setNFTData] = useState([]);
  const handleClick = () => {
    setSubmenu(!submenu);
  };

  const dispatch = useDispatch();
  const onConnectAccount = () => {
    console.log("connect wallet");
    dispatch(connectionAction());
  };

  const handleNumberInputChange = (event, trait) => {
    const value = event.target.value;
    console.log(value, " input value");
    switch (trait) {
      case "acceleration":
        if (event.target.name === "min") {
          setAccelerationMin(value);
          console.log("accelration min", accelerationMin);
        } else {
          setAccelerationMax(value);
          console.log("accelration max", accelerationMax);
        }
        break;
      case "engineSize":
        if (event.target.name === "min") {
          setEngineSizeMin(value);
          console.log("engine size min", engineSizeMin);
        } else {
          setEngineSizeMax(value);
        }
        break;
      case "horsepower":
        if (event.target.name === "min") {
          setHorsepowerMin(value);
        } else {
          setHorsepowerMax(value);
        }
        break;
      case "topSpeed":
        if (event.target.name === "min") {
          setTopSpeedMin(value);
        } else {
          setTopSpeedMax(value);
        }
        break;
      case "weight":
        if (event.target.name === "min") {
          setWeightMin(value);
        } else {
          setWeightMax(value);
        }
        break;
      default:
        break;
    }
  };
  const handleColorChange = (color) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color]
    );
  };

  const handleCountryChange = (country) => {
    setSelectedCountries((prevSelectedCountries) =>
      prevSelectedCountries.includes(country)
        ? prevSelectedCountries.filter((c) => c !== country)
        : [...prevSelectedCountries, country]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const handleCylinderChange = (cylinder) => {
    setSelectedCylinders((prevSelectedCylinders) =>
      prevSelectedCylinders.includes(cylinder)
        ? prevSelectedCylinders.filter((c) => c !== cylinder)
        : [...prevSelectedCylinders, cylinder]
    );
  };

  const acc = useSelector((state) => state.connect?.connection);

  useEffect(() => {
    console.log("filteredData", filteredData);
  }, [filteredData]);

  function filterNFTData1() {
    if (!NFTData.length) {
      return [];
    }
    console.log("wwwwwwwwwwwwwwww", NFTData);
    return NFTData.filter((item) => {
      if (
        (!selectedColors.length ||
          selectedColors.includes(
            item.attributes.find((attr) => attr.trait_type === "Color").value
          )) &&
        (!selectedCountries.length ||
          selectedCountries.includes(
            item.attributes.find((attr) => attr.trait_type === "Country").value
          )) &&
        (!selectedTypes.length ||
          selectedTypes.includes(
            item.attributes.find((attr) => attr.trait_type === "Type").value
          )) &&
        (!selectedCylinders.length ||
          selectedCylinders.includes(
            item.attributes.find((attr) => attr.trait_type === "Cylinder").value
          ))
      ) {
        const acceleration = item.attributes.find(
          (attr) => attr.trait_type === "Acceleration"
        ).value;
        const engineSize = item.attributes.find(
          (attr) => attr.trait_type === "Engine Size"
        ).value;
        const horsepower = item.attributes.find(
          (attr) => attr.trait_type === "Horse Power"
        ).value;
        const topSpeed = item.attributes.find(
          (attr) => attr.trait_type === "Top Speed"
        ).value;
        const weight = item.attributes.find(
          (attr) => attr.trait_type === "Weight"
        ).value;

        return (
          (!accelerationMin || acceleration >= accelerationMin) &&
          (!accelerationMax || acceleration <= accelerationMax) &&
          (!engineSizeMin || engineSize >= engineSizeMin) &&
          (!engineSizeMax || engineSize <= engineSizeMax) &&
          (!horsepowerMin || horsepower >= horsepowerMin) &&
          (!horsepowerMax || horsepower <= horsepowerMax) &&
          (!topSpeedMin || topSpeed >= topSpeedMin) &&
          (!topSpeedMax || topSpeed <= topSpeedMax) &&
          (!weightMin || weight >= weightMin) &&
          (!weightMax || weight <= weightMax)
        );
      }
    });
  }

  useEffect(() => {
    setFilteredData(filterNFTData1());
  }, [
    selectedColors,
    selectedCountries,
    selectedTypes,
    selectedCylinders,
    accelerationMin,
    accelerationMax,
    engineSizeMin,
    engineSizeMax,
    horsepowerMin,
    horsepowerMax,
    topSpeedMin,
    topSpeedMax,
    weightMin,
    weightMax,
  ]);

  const priceNFT = async () => {
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
      const price = await contract.methods.mintPrice().call();
      const priceEther = web3.utils.fromWei(price, "ether");
      setPrice(priceEther);
      console.log("priceEther", priceEther);
    } catch (error) {
      console.error("Error fetching NFT price:", error);
      // Handle the error here, for example:
      // setPrice(null);
    }
  };

  const integrateContract = () => {
    try {
      const web3 = window.web3;
      const abcd = new web3.eth.Contract(
        AvatarMarketplaceAbi,
        AvatarMarketplaceAddress
      );
      return abcd;
    } catch (error) {
      console.error("Error integrating contract:", error);
      // Handle the error here, for example:
      // return null;
    }
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
      console.log("pricewei", pricewei);

      const balanceWei = await web3.eth.getBalance(acc);

      const balanceEth = web3.utils.fromWei(balanceWei, "ether");
      console.log(balanceEth, "balanceEth");
      if (balanceEth >= pricewei) {
        const NFTResponce = await contract.methods
          .purchaseNFTsPackage("1")
          .send({
            from: acc,
            value: price,
          });
        console.log(NFTResponce, "NFTResponce");
        toast.success("Successfully minted");
      } else {
        console.log("Insufficient MATIC balance");
        toast.error("Insufficient MATIC balance");
      }
    } catch (error) {
      console.error("Error in mintNFT:", error);
    }
  };

  useEffect(() => {
    if (filteredData.length) {
      const extractAttribute = (attribute) => {
        const attributeData = {};
        filteredData.forEach((nft) => {
          const attr = nft.attributes.find(
            (attr) => attr.trait_type === attribute
          );
          if (attr) {
            const attrValue = attr.value;
            if (attributeData[attrValue]) {
              attributeData[attrValue]++;
            } else {
              attributeData[attrValue] = 1;
            }
          }
        });
        return attributeData;
      };

      const countryData = extractAttribute("Country");
      const cylinderData = extractAttribute("Cylinder");
      const typeData = extractAttribute("Type");
      const colorsData = extractAttribute("Color");

      setCountryData(countryData);
      setColorsData(colorsData);
      setCylinderData(cylinderData);
      setTypeData(typeData);
    }
  }, [NFTData, setFilteredData]);

  const fetchData = async (collectionSlug) => {
    try {
      const options = {
        method: "GET",
        url: `https://testnets-api.opensea.io/api/v2/collection/${collectionSlug}/nfts`,
        headers: {
          accept: "application/json",
          "x-api-key": "90989208dd6f4109b988aa60b11c6f17",
        },
      };

      const response = await axios.request(options);
      const nfts = response.data.nfts;
      console.log("nfts,", nfts);

      const metadataPromises = [];

      for (const nft of nfts) {
        const metadataUrl = nft.metadata_url;

        metadataPromises.push(metadataUrl);
      }
      fetchData1(metadataPromises);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const fetchData1 = async (urls) => {
    try {
      // Filter out null URLs
      const validUrls = urls.filter((url) => url !== null);

      // Fetch data only for non-null URLs
      const responses = await Promise.all(
        validUrls.map((url) => axios.get(url))
      );

      console.log("Responses:", responses);
      const responceArray = [];

      for (const item of responses) {
        responceArray.push(item.data);
      }

      setNFTData(responceArray);
      setFilteredData(responceArray);
    } catch (error) {
      toast.error("Error fetching metadata");
      console.error("Metadata fetching error:", error);
    }
  };

  useEffect(() => {
    fetchData("avatarnft-31");
    priceNFT();
  }, []);

  return (
    <div>
      <Header title="Rose Gold Collection" />

      <div className="row py-4">
        <div className="col-lg-6 d-flex justify-content-center ">
          <img className=" img-fluid" src={a} alt="a" />
        </div>
        <div className="col-lg-6 px-4 d-flex flex-column align-items-lg-end">
          <p className="winery-c-p mt-5">
            For some time there were persistent rumors that there would be a
            small and very rare special collection and now it has come true! So
            here it is: our exclusive Rose Gold Collection!
          </p>
          <p className="winery-c-p">
            Consisting of only 20 different cards with various car models of
            different classes and times, this collection definitely stands out.
            And it is particularly rare, because each of the only 20 car(d)s is
            limited to just 120 pieces – although it is actually a bargain at 19
            MATIC!
          </p>
          <p className="winery-p-p mt-1">
            Buy them for only 19 MATIC and get 100 Vinum in addition to your
            NFT!
          </p>
          <p className="winery-c-p mt-1">
            Connect your Metamask and then click the MINT button to get your
            desired car.
          </p>
          <p className="winery-c-p mt-1">For secondary market visit OpenSea.</p>
          <p className="winery-c-p mt-1">
            Please be aware that MetaMask has to be installed in your browser to
            mint our NFTs.
          </p>
        </div>
      </div>
      <div className="row py-5 cards-container">
        <div className="col-5 col-lg-3 ">
          <div className="side-bar px-lg-4 ">
            <h2 className="sidebar-h py-2">Buscar</h2>
            <button
              className="menu-div d-flex justify-content-between px-3 align-items-center"
              onClick={handleClick}
            >
              Color {selectedColors.length ? "*" : ""} <IoIosArrowDown />
            </button>
            {submenu && (
              <div>
                {Object.entries(colorsData).map(([color, count]) => (
                  <div key={color}>
                    <label className="d-flex my-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={color}
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorChange(color)}
                      />
                      <div className=" mt-1 px-2 d-flex justify-content-between">
                        {color} ({count})
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
            <button
              className="menu-div d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                setCountryMenu(!countryMenu);
              }}
            >
              Country {selectedCountries.length ? "*" : ""}
              <IoIosArrowDown />
            </button>
            {countryMenu && (
              <div>
                {Object.entries(countryData).map(([country, count]) => (
                  <div key={country}>
                    <label className="d-flex mt-1 px-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={country}
                        checked={selectedCountries.includes(country)}
                        onChange={() => handleCountryChange(country)}
                      />
                      <div className=" mt-1 px-2 d-flex justify-content-between  ">
                        {country} ({count})
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
            <button
              className="menu-div d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                setCylinderMenu(!cylinderMenu);
              }}
            >
              Cylinder {selectedCylinders.length ? "*" : ""} <IoIosArrowDown />
            </button>
            {cylinderMenu && (
              <div>
                {Object.entries(cylinderData).map(([cylinder, count]) => (
                  <div key={cylinder}>
                    <label className="d-flex mt-1 px-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={cylinder}
                        checked={selectedCylinders.includes(cylinder)}
                        onChange={() => handleCylinderChange(cylinder)}
                      />
                      <div className="mt-1 px-2 d-flex justify-content-between">
                        {cylinder} ({count})
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
            <button
              className="menu-div d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                setTypeMenu(!typeMenu);
              }}
            >
              Type {selectedTypes.length ? "*" : ""} <IoIosArrowDown />
            </button>
            {typeMenu && (
              <div className="">
                {Object.entries(typeData).map(([type, count]) => (
                  <div key={type}>
                    <label className="d-flex mt-1 px-2">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        className="form-check-input"
                        value={type}
                        onChange={() => handleTypeChange(type)}
                      />
                      <div className="mt-1 px-2 d-flex justify-content-between">
                        {type} ({count})
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
            <button
              className="menu-div d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                setAccelertionMenu(!accelertaionMenu);
              }}
            >
              Acceleration
              {accelerationMin.length || accelerationMax.length ? "*" : ""}
              <IoIosArrowDown />
            </button>
            {accelertaionMenu && (
              <div>
                <div className="px-4 mt-2 ">
                  <div className="d-flex justify-content-between">
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "acceleration")
                        }
                        className="a-input text-center"
                        placeholder="Min"
                        type="text"
                        name="min"
                      />
                    </div>
                    <div className="input-n-div px-2 d-flex justify-content-center align-items-center">
                      to
                    </div>
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "acceleration")
                        }
                        className="a-input text-center"
                        placeholder="Max"
                        type="text"
                        name="max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="menu-div d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                setEngineMenu(!engineMenu);
              }}
            >
              Engine Size
              {engineSizeMin.length || engineSizeMax.length ? "*" : ""}{" "}
              <IoIosArrowDown />
            </button>
            {engineMenu && (
              <div>
                <div className="px-4 mt-2 ">
                  {/* <form > */}
                  <div className="d-flex justify-content-between">
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "engineSize")
                        }
                        className="a-input text-center"
                        placeholder="Min"
                        type="text"
                        name="min"
                      />
                    </div>
                    <div className="input-n-div px-2 d-flex justify-content-center align-items-center">
                      to
                    </div>
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "engineSize")
                        }
                        className="a-input text-center"
                        placeholder="Max"
                        type="text"
                        name="max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              className="menu-div  d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                sethorsepowerMenu(!horsepowerMenu);
              }}
            >
              Horse power
              {horsepowerMin.length || horsepowerMax.length ? "*" : ""}{" "}
              <IoIosArrowDown />
            </button>
            {horsepowerMenu && (
              <div>
                <div className="px-4 mt-2 ">
                  <div className="d-flex justify-content-between">
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "horsepower")
                        }
                        className="a-input text-center"
                        placeholder="Min"
                        type="text"
                        name="min"
                      />
                    </div>
                    <div className="input-n-div px-2 d-flex justify-content-center align-items-center">
                      to
                    </div>
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "horsepower")
                        }
                        className="a-input text-center"
                        placeholder="Max"
                        type="text"
                        name="max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="menu-div  d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                settopspeedMenu(!topspeedMenu);
              }}
            >
              Top Speed{topSpeedMin.length || topSpeedMax.length ? "*" : ""}{" "}
              <IoIosArrowDown />
            </button>
            {topspeedMenu && (
              <div>
                <div className="px-4  mt-2 ">
                  <div className="d-flex justify-content-between">
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "topSpeed")
                        }
                        className="a-input text-center"
                        placeholder="Min"
                        type="text"
                        name="min"
                      />
                    </div>
                    <div className="input-n-div px-2 d-flex justify-content-center align-items-center">
                      to
                    </div>
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "topSpeed")
                        }
                        className="a-input text-center"
                        placeholder="Max"
                        type="text"
                        name="max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="menu-div  d-flex justify-content-between px-3 align-items-center"
              onClick={() => {
                setweightMenu(!weightMenu);
              }}
            >
              Weight{weightMin.length || weightMax.length ? "*" : ""}{" "}
              <IoIosArrowDown />
            </button>
            {weightMenu && (
              <div>
                <div className="px-4 mt-2 ">
                  <div className="d-flex justify-content-between">
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "weight")
                        }
                        className="a-input text-center"
                        placeholder="Min"
                        type="text"
                        name="min"
                      />
                    </div>
                    <div className="input-n-div px-2 d-flex justify-content-center align-items-center">
                      to
                    </div>
                    <div className="input-div">
                      <input
                        onChange={(event) =>
                          handleNumberInputChange(event, "weight")
                        }
                        className="a-input text-center"
                        placeholder="Max"
                        type="text"
                        name="max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-9 col-7 px-auto">
          <div className="row">
            {filteredData.map((nft, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 px-lg-0 px-3  mt-lg-5 d-flex justify-content-center"
                >
                  <div className="data-card my-3 card-inner ">
                    <img className="img-fluid" src={nft.image} alt="m" />
                    <div className="d-flex justify-content-center mt-1">
                      Mint now and get{" "}
                      <span className="span-pink mx-1"> 50 Vinum </span> in
                      return
                    </div>
                    <div className="d-flex justify-content-center">
                      {" "}
                      Price: {price} MATIC
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="header-button-div   position-relative   mt-2">
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosegoldCollection;
