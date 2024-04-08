import React from "react";
import "./Play.css";
import a from "../../Media/superfast-quartet-game-logo.png";
import b from "../../Media/play4fun.png";
import c from "../../Media/play4earn.png";
import d from "../../Media/play2win-coming-soon.png";
import e from "../../Media/additional-daily.png";
import f from "../../Media/additional-slot.png";
import { NavLink } from "react-router-dom";

const Play = () => {
  return (
    <div className="bg-black h-auto play">
      <div className="play-container  pt-5">
        <h1 className="text-center mt-5">Welcome to the</h1>
        <div className="d-flex justify-content-center">
          <img className="img-fluid play-h-logo" src={a} alt="a" />
        </div>
        <div className="d-flex justify-content-center mt-4 px-auto">
          <h4>Please choose game mode</h4>
        </div>
        <div className="row mt-4">
          <div className="col-8 mx-auto d-flex">
            <div className="d-flex justify-content-center mx-1">
              <img className=" img-fluid" src={b} alt="aa" />
            </div>
            <div className="d-flex justify-content-center mx-1">
              <img className="img-fluid" src={c} alt="aa" />
            </div>
            <div className="d-flex justify-content-center mx-1">
              <img className=" img-fluid" src={d} alt="aa" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="play-card-div">
                <h4 className="text-center">DAILY COMPETITION</h4>
                <img className="img-fluid pt-2" src={e} alt="a" />
                <div>
                  <p className="text-center mt-3">
                    The rules are very simple: Every day there is a different
                    competition (eg. highest top speed or horsepower or lowest
                    weight etc.). You can participate each day with one card
                    from your set.
                  </p>
                </div>
                <div>
                  <p className="text-center mt-3">
                    At the end of the day, the card with the highest value will
                    win another cool NFT from the vino.ecologico Collection!
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="header-button-div  position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2 "
                        to="/dailygame"
                        alt=""
                      >
                        Play Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-3 d-flex justify-content-center">
              <div className="play-card-div">
                <h4 className="text-center">DAILY COMPETITION</h4>
                <img className="img-fluid pt-2" src={f} alt="a" />
                <div>
                  <p className="text-center mt-3">
                    The rules are very simple: Just like in a classic slot
                    machine, you only have to press the lever (resp. press the
                    SPIN button) and the three cards spin in a circle.
                  </p>
                </div>
                <div>
                  <p className="text-center mt-3">
                    And of course, the result counts: if three of the same cards
                    remain standing, then you have won a random vino.ecologico
                    NFT from our Collection!
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="header-button-div  position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2 "
                        to="/slotmachinegame"
                        alt=""
                      >
                        Play Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
