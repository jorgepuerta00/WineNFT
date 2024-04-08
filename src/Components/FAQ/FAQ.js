import React, { useState } from "react";
import "./FAQ.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FAQ = () => {
  const [iconone, setIconone] = useState(true);
  const [icontwo, setIcontwo] = useState(true);
  const [iconthree, setIconthree] = useState(true);
  const [iconfour, setIconfour] = useState(true);
  const [iconfive, setIconfive] = useState(true);
  const [iconsix, setIconsix] = useState(true);
  const [iconseven, setIconseven] = useState(true);
  return (
    <div id="faq" className="mt-5 FAQ py-5">
      <h1 className="text-center">FAQ</h1>
      <div className="row">
        <div className="col-lg-9 px-2 mx-auto">
          <div
            onClick={() => {
              setIconone(!iconone);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">What is ledgerlegends.racing?</p>
            {iconone ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconone && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center  align-items-center ">
              <p>
                ledgerlegends.racing is the first NFT Collectors Card Game with
                chrome and horsepower. And it is more than a nice collection of
                collectible NFTs but a fully playable car quartet game in which
                each NFT represents a playing card. And thanks to the
                blockchain, each card is unique and has a distinct owner. One
                can therefore say: we have made it our mission to evolve the
                traditional car quartet card game into an exciting polygon-based
                NFT game.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIcontwo(!icontwo);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">Who is behind ledgerlegends.racing?</p>
            {icontwo ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!icontwo && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center  align-items-center ">
              <p>
                Behind the ledgerlegends.racing project is Superfast Games Inc.
                The main focus of the company is the ledgerlegends.racing
                project and the entire current commitment of the team is
                concentrated on the successful implementation of the same. Even
                though this project is the heart and foundation of the company,
                it is also meant to be a starting point and generate a variety
                of future projects. Some of the ideas are already being
                prepared, others are only concept approaches so far, and still
                others have not even been thought of yet. Nevertheless,
                Superfast Games Inc. will be home to a variety of entertaining
                games and inspiring projects that have only one compelling thing
                in common: the fact that they are based on blockchain
                technology.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconthree(!iconthree);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">Tell me More about ledgerlegends.racing?</p>
            {iconthree ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconthree && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center  align-items-center ">
              <p>
                The ledgerlegends.racing project brings together two popular NFT
                topics: Collectible Trading Cards and Gaming, using the
                time-honored concept of car quartet card games, which saw their
                greatest popularity in the 1970s and 1980s. The principle is
                simple: each trading card represents a car, with several cards
                always forming one card category (e.g. German Sports Cars or
                Modern Italian Racers). The cards are beautifully designed and
                invite to be collected. The goal is, of course, to get as many
                card categories full. But in addition to the collectible value
                of the cards, they can also be used as simple playing cards in a
                variety of exciting game combinations. The spectrum is wide and
                ranges from simple player vs. AI games to complex multiplayer
                games and comprehensive tournaments. You can play for fun or you
                can play to win: tokens (TURBO) or more NFTs for your own set.
                The possibilities are virtually unlimited. While the playing
                card sets of our youth only ever contained an average of 32-48
                cards and the games were mostly incompatible with each other,
                ledgerlegends.racing are compatible across all categories and
                collections and can actually be played with each other from the
                basic “The Collection” through the “Gold Collection” to the
                planned “Black Collection” – a grand total of over 1,300
                individual cards.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconfour(!iconfour);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">What's the basic principal of the game?</p>
            {iconfour ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconfour && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center  align-items-center ">
              <p>
                The basic principle of the game is very simple: the better
                car(d) wins! This simple concept is easily and clearly
                understood and already explains the main aspect of the game
                rules. Each player plays with his own cards, i.e. the NFTs he
                owns – regardless of whether he is playing against the AI or
                against other players. This basic principle is always the same.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconfive(!iconfive);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">
              Where can i buy ledgerlegends.racing NFTs beside the
              ledgerlegends.racing website?
            </p>
            {iconfive ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconfive && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center  align-items-center ">
              <p>
                The official secondary market for ledgerlegends.racing NFTs is
                of course OpenSea. Every NFT holder of ledgerlegends.racing NFTs
                can see his cards here and of course trade them (important: if
                you got NFTs via an airdrop promotion, you will only find them
                in the “hidden section” on OpenSea and have to “unhide” them
                manually before they appear in your regular account).
                Furthermore, ledgerlegends.racing NFTs can of course also be
                purchased via OpenSea. This is especially interesting for NFTs
                from “The Collection” which cannot be bought individually via
                our own store, but only in a surprise five NFT pack. For all
                transactions through OpenSea, ledgerlegends.racing receives a
                10% commission.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconsix(!iconsix);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">
              Why can't i see my NFTs in my opensea account?{" "}
            </p>
            {iconsix ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconsix && (
            <div className="faq-inner-div px-3 py-3 d-flex flex-column  justify-content-center  align-items-center ">
              <p className="card-p-r mt-2">
                Your OpenSea account is only a window into your crypto wallet,
                showing all the fun NFTs inside. OpenSea does not store your
                items, your account is just providing access to view the
                transactions in your wallet.
              </p>
              <p>
                Now let’s look at two common reasons NFTs are not visible on
                your OpenSea profile.
              </p>
              <p className="mt-4">
                1. YOUR CRYPTO WALLET (METAMASK) IS NOT CONNECTED CORRECTLY.
              </p>
              <ul>
                <li>
                  Close out your browser, clear your cache, and try
                  reconnecting.
                </li>
                <li>Do you have more than one crypto wallet?</li>
                <li>
                  If so, make sure you are connecting to the correct wallet.
                </li>
              </ul>
              <p>
                2. YOU JUST COMPLETED A TRANSACTION AND YOU DON’T SEE THE NFT
                YOU JUST PURCHASED.
              </p>
              <p className="mt-2 mb-3">
                If there is high demand on the Ethereum blockchain, it could
                take more time to complete the transaction than anticipated. To
                double check, try looking up your transaction on Polyscan.
              </p>
              <p className="mt-5">
                https://support.opensea.io/hc/en-us/articles/1500003338421-Why-can-t-I-see-my-NFTs-in-my-account-
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconseven(!iconseven);
            }}
            className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
          >
            <p className="mt-3">
              How do i hide/unhide items from my OpenSea Profile?
            </p>
            {iconseven ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconseven && (
            <div className="faq-inner-div px-3 py-3 d-flex flex-column  justify-content-center  align-items-center ">
              <p>You can now hide items from your OpenSea profile!</p>
              <p>
                To start, click the “More options” button on the top left corner
                of your NFT.
              </p>
              <p>
                https://support.opensea.io/hc/en-us/articles/4402034895635-How-do-I-hide-items-from-my-OpenSea-profile-
              </p>
              <p>
                Please note, hiding an NFT only hides the NFT on your OpenSea
                profile. It does not prevent people from looking at the
                blockchain to see what’s been sent to your wallet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
