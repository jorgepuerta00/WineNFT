import React from "react";

const DailyGame = () => {
  return (
    <div className="daily-game">
      <div className="daily-game-header">
        <div className="row">
          <div className="col-10 mx-auto px-2">
            <div className="d-flex justify-content-end mt-5">
              <h2>Welcome to the Daily Competition Pre Launch Game</h2>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <h1>YOUR DAILY CHANCE TO WIN A vino.ecologico NFT!</h1>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <h5>
                Can you hardly wait for the launch of the vino.ecologico Game?
                To shorten the waiting time for all of us, we have developed a
                little pre-launch game for you: the vino.ecologico daily
                competition!
              </h5>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <h5>
                The rules are very simple: Every day there is a different
                competition (eg. highest top speed or horsepower or lowest
                weight etc.). You can participate each day with one card from
                your set. Just select your card with the best value in the day's
                category below (you will already see the cards of the other
                participants below). At the end of the day, the card with the
                highest value will win another cool NFT from the vino.ecologico
                Collection.
              </h5>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <h5>Have fun and good luck!</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5  row">
        <div className="col-10 mx-auto">
          <h1 className="game-h">TO START THE GAME:</h1>
          <ol>
            <li>
              You need to have some vino.ecologico NFT ( Claim your free pack
              here )
            </li>
            <li>Connect to your MetaMask Wallet</li>
            <li>
              Choose the Card from your collection that you want to play with
            </li>
            <li>
              Share on Twitter and get an extra boost () for your NFT Share on
              Twitter
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DailyGame;
