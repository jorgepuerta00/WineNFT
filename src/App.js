import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import Garage from "./Components/Garage/Garage";
import Games from "./Components/Games/Games";
import RoadMap from "./Components/RoadMap/RoadMap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FAQ from "./Components/FAQ/FAQ";
import { Provider } from "react-redux";
import Turbo from "./Components/Turbo/Turbo";
import store from "./Redux/store";
import GarageNFTCollections from "./Components/Garage/GarageNFTCollections";
import Play from "./Components/Play/Play";
import SilverCollection from "./Components/Shop/SilverCollection";
import RosegoldCollection from "./Components/Shop/RosegoldCollection";
// import store from "./Redux/Store/store";
// import store from "./Redux/Store/store";
import SlotMachineGame from "./Components/Play/SlotMachineGame";
import DailyGame from "./Components/Play/DailyGame";
import Carbonleathercollection from "./Components/Shop/Carbonleathercollection";
import TheCollection from "./Components/Collections/Collections";

import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/garageNFTCollections"
              element={<GarageNFTCollections />}
            />
            <Route path="/turbo" element={<Turbo />} />
            <Route path="/play" element={<Play />} />
            <Route path="/SilverCollection" element={<SilverCollection />} />
            <Route path="rosegoldcollection" element={<RosegoldCollection />} />
            <Route path="/slotmachinegame" element={<SlotMachineGame />} />
            <Route path="/dailygame" element={<DailyGame />} />
            <Route
              path="/carbonleathercollection"
              element={<Carbonleathercollection />}
            />
            <Route path="/thecollection" element={<TheCollection />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
