import React from "react";
import a from "../../Media/151.png";
import b from "../../Media/46.png";
import c from "../../Media/259.png";
const SlotMachineGame = () => {
  return (
    <div>
      <div className="slot-macine-head">
        <div className="row">
          <div className="col-11 px-5 mx-auto">
            <div className="row">
              <div className="col-lg-9">
                <h3 className="mt-lg-4 mt-3">
                  Welcome to the Slot Machine Pre Launch Game
                </h3>
                <div className="slot-machine-img-div d-flex">
                  <div className="small-img-div pt-5  px-4 ms-2">
                    <img className="img-fluid" src={a} alt="" />
                  </div>
                  <div className="small-img-div pt-5  px-4 ">
                    <img className="img-fluid" src={b} alt="" />
                  </div>
                  <div className="small-img-div pt-5  px-4 ms-0 ">
                    <img className="img-fluid" src={c} alt="" />
                  </div>
                </div>

                <div className="header-button-div   position-relative  me-5 mt-3">
                  <div className="blue-m-bg-div"></div>
                  <div className="pink-m-bg-div"></div>
                  <div className="black-m-bg-div d-flex justify-content-center">
                    <button
                      className=" nav-link d-flex justify-content-center mt-2 "
                      alt=""
                    >
                      SPIN
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 px-1">
                <p className="mt-5">
                  Another daily chance to win a ledgerlegends.racing NFT!
                </p>
                <p>
                  Can you hardly wait for the launch of the ledgerlegends.racing
                  Game, too? To shorten the waiting time for all of us, we have
                  developed a second little pre-launch game for you: the
                  ledgerlegends.racing Slot Machine!
                </p>
                <p>
                  The rules are also very simple: Just like in a classic slot
                  machine, you only have to press the lever (resp. press the
                  SPIN button) and the three cards spin in a circle. And of
                  course, the result counts: if three of the same cards remain
                  standing, then you have won a ledgerlegends.racing NFT!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5  row">
        <div className="col-10 mx-auto">
          <h1 className="game-h">TO START THE GAME:</h1>
          <ol>
            <li>
              Share the game on Twitter and Connect to Discord (this is the
              requirement to participate).
            </li>
            <li>
              Connect your MetaMask Wallet (necessary for you to receive your
              won NFT).
            </li>
            <li>
              Spun and no luck? No problem! You can try all day until you win!
            </li>
            <li>Ready to Play! Have fun & good luck!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SlotMachineGame;
