import React from "react";
import "./AdditionalGames.css";
import a from "../../Media/pregames_cards.png";
import { NavLink } from "react-router-dom";

const AdditionalGames = () => {
  return (
    <div className="">
      <div className="mt-5">
        <div className="additional-games mt-5">
          <div className="row mt-5">
            <div className="col-10 mx-auto">
              <div className=" pt-5 text-center px-3">
                <h1 className="mt-4">ADDITIONAL GAMES</h1>
                <p className="px-5">
                  In addition to the Quartet game, there are two other games
                  that were originally developed as pre-games to shorten the
                  wait for launch of the quartet game. Since they are a lot of
                  fun, too, you can still play them here:
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center ">
                  <div className="a-d-card mt-5 ">
                    <div className="d-flex mt-4 ms-4 ">
                      <div className="upper-rotate-div text-center flex-column  ">
                        Your daily chance to win a
                        <span>vino.ecologico NFT!</span>{" "}
                      </div>
                      <div className="number-div d-flex justify-content-center  align-items-center ">
                        1
                      </div>
                      <div className="ms-2">
                        <span>PRE GAME 1</span>
                        <h2 className="pt-0 mt-0">Daily Compitition</h2>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-center ">
                      <img className="pregame-img" src={a} alt="" />
                    </div>
                    <div className="px-4">
                      <span className="span-h">The rules are very simple:</span>
                      <p className="card-p mt-1">
                        Every day there is a different competition (eg. highest
                        top speed or horsepower or lowest weight etc.). You can
                        participate each day with one card from your set.
                      </p>
                      <p className="card-p">
                        At the end of the day, the card with the highest value
                        will win another cool NFT from the vino.ecologico
                        Collection!
                      </p>
                    </div>

                    <div className="header-button-div ms-5 position-relative ">
                      <div className="blue-a-bg-div"></div>
                      <div className="pink-a-bg-div"></div>
                      <div className="black-a-bg-div">
                        <NavLink
                          className="nav-link d-flex justify-content-center mt-2 "
                          to="/dailygame"
                          alt=""
                        >
                          PLAY NOW
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center ">
                  <div className="a-d-card mt-5 ">
                    <div className="d-flex mt-4 ms-4 ">
                      <div className="upper-rotate-div text-center flex-column  ">
                        Your daily chance to win a
                        <span>vino.ecologico NFT!</span>{" "}
                      </div>
                      <div className="number-div d-flex justify-content-center  align-items-center ">
                        2
                      </div>
                      <div className="ms-2">
                        <span>PRE GAME 2</span>
                        <h2 className="pt-0 mt-0">SLOT MACHINE</h2>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-center ">
                      <img className="pregame-img" src={a} alt="" />
                    </div>
                    <div className="px-4">
                      <span className="span-h">The rules are very simple:</span>
                      <p className="card-p mt-1">
                        Just like in a classic slot machine, you only have to
                        press the lever (resp. press the SPIN button) and the
                        three cards spin in a circle.
                      </p>
                      <p className="card-p">
                        And of course, the result counts: if three of the same
                        cards remain standing, then you have won a random
                        vino.ecologico NFT from our Collection!
                      </p>
                    </div>

                    <div className="header-button-div ms-5 position-relative ">
                      <div className="blue-a-bg-div"></div>
                      <div className="pink-a-bg-div"></div>
                      <div className="black-a-bg-div">
                        <NavLink
                          className="nav-link d-flex justify-content-center mt-2 "
                          to="/slotmachinegame"
                          alt=""
                        >
                          PLAY NOW
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
    </div>
  );
};

export default AdditionalGames;
