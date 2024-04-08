import React from "react";
import "./Games.css";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import game from "../../Media/thegame.jpg";
import { NavLink } from "react-router-dom";

const Games = () => {
  return (
    <div id="game" className="row Games-main">
      <div className="col-11 mx-auto mt-5">
        <div className="row mt-5">
          <div className="col-lg-6 p-2">
            <h1 className="q-g-h">THE QURTEET GAME</h1>
            <p>
              ledgerlegends.racing is more than a nice collection of collectible
              NFTs – it’s a fully playable car quartet game in which each NFT
              represents a playing card. And thanks to the blockchain, each card
              is unique and has a distinct owner.
            </p>
            <div className="blue-writing-box text-center d-flex justify-content-center  align-items-center ">
              <p>The game principle is very simple: The better Car(d) wins!</p>
            </div>
            <div className="row mt-2">
              <div className="col-1 px-0 mx-0 ms-0">
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </div>
              <div className="col-11">
                The first game mode is called “Play for Fun” and is designed to
                get to know the game better. It is a game of player vs. AI and
                as the name suggests, it’s all about the fun.
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-1 px-0 mx-0 ms-0">
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </div>
              <div className="col-11">
                The second and brand new game mode is called “Play to Earn” and
                allows you to earn up to 100,000 TURBO a day with your cards –
                without any risk. What are you waiting for?
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-1 px-0 mx-0 ms-0">
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </div>
              <div className="col-11">
                Very soon the third game mode “Play to Win” follows in which you
                actually play for the cards. And a little later we will publish
                game modes like Player vs. Players and multiplayer, where you
                play for the cards or for TURBO – to win, of course.
              </div>
            </div>
            <div className="header-button-div  mt-4 position-relative ">
              <div className="blue-bg-div"></div>
              <div className="pink-bg-div"></div>
              <div className="black-bg-div">
                <NavLink
                  className="nav-link d-flex justify-content-center mt-2 "
                  to="/play"
                  alt=""
                >
                  Click Here to Play the Game
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-1 px-2">
            <img className="img-fluid ms-lg-3" src={game} alt="game" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
