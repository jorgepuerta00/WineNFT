import React from "react";
import Header from "../Header/Header";
import Games from "../Games/Games";
import Collections from "../Collections/Collections";
import RoadMap from "../RoadMap/RoadMap";
import FAQ from "../FAQ/FAQ";
const Home = () => {
  return (
    <div>
      <Header />
      <Games />
      <Collections />
      <RoadMap />
      <FAQ />
    </div>
  );
};

export default Home;
