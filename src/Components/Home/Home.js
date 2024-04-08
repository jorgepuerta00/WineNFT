import React from "react";
import Header from "../Header/Header";
import Games from "../Games/Games";
import AdditionalGames from "../AdditionalGame/AdditionalGames";
import Collections from "../Collections/Collections";
import RoadMap from "../RoadMap/RoadMap";
import FAQ from "../FAQ/FAQ";
const Home = () => {
  return (
    <div>
      <Header />
      <Games />
      <AdditionalGames />
      <Collections />
      <RoadMap />
      <FAQ />
    </div>
  );
};

export default Home;
