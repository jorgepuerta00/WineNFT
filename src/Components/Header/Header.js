import React from "react";
import "./Header.css";
import a from "../../Media/quartett-logo.png";
import b from "../../Media/Komponente-3-–-1.png";
import c from "../../Media/sfc_garage_logo.svg";
import d from "../../Media/garage-img.png";
import e from "../../Media/sfc_petroltoken_logo.svg";
import f from "../../Media/petrol_token_header.png";
import g from "../../Media/welcome-to-logo.png";
import k from "../../Media/header-karten.png";
import i from "../../Media/meet-us-logo.png";
import j from "../../Media/nft-nyc-logo-new.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="overflow-hidden ">
      <Slider {...settings}>
        <div className="game-div">
          <div className="row">
            <div className="col-lg-4 px-2 d-flex flex-column mt-lg-5 align-items-lg-end align-items-center pt-lg-5  order-lg-1 order-2 ">
              <img className="game-div-head-img ms-5  mt-lg-5" src={a} alt="" />

              <div className="ps-lg-5 ps-2">
                <p className="ps-lg-5 ps-2">
                  ledgerlegends.racing is more than a nice collection of
                  collectible NFTs – it’s a fully playable car quartet game in
                  which each NFT represents a playing card.
                </p>
                <p className="ps-lg-5 ps-2">
                  Already got cards? Then click the link below and PLAY FOR FUN
                  or PLAY TO EARN up to 100,000 TURBO every day! Have no cards
                  yet? Then click on The Collection above to buy your first
                  cards.
                </p>
                <div className="header-button-div ms-5 position-relative ">
                  <div className="blue-bg-div"></div>
                  <div className="pink-bg-div"></div>
                  <div className="black-bg-div">
                    <a
                      className="nav-link d-flex justify-content-center mt-2 "
                      href=""
                      alt=""
                    >
                      {" "}
                      Play for Fun
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              <img className="img-fluid me-3" src={b} alt="" />
            </div>
          </div>
        </div>
        <div className="garage-div">
          <div className="row">
            <div className="col-lg-5 px-2 d-flex flex-column mt-lg-5 align-items-lg-end align-items-center  order-lg-1 order-2 ">
              <div className="d-flex me-lg-5 ">
                <img
                  className="game-div-head-img mt-lg-5 me-lg-5"
                  src={c}
                  alt=""
                />
              </div>

              <div className="ps-lg-5 ps-2 mt-lg-1">
                <p className="ps-lg-5 ps-2">
                  Check out your very personal Garage and find all car(d)s in
                  your possesion – sorted by their categories.
                </p>
                <p className="ps-lg-5 ps-2 pt-sm-0 ">
                  The more floors you have, the more categories your portfolio
                  covers. Collect more cards to own them all, as not only you
                  will get tokens for each NFT in your possession, but multiple
                  times if you own categories completely.
                </p>
                <p className="ps-lg-5 ps-2">
                  The Garage is the base and starting point of the quartet game
                  and practically your account. Check it out and learn more via
                  this link:
                </p>
                <div className="header-button-div ms-5 position-relative ">
                  <div className="blue-bg-div"></div>
                  <div className="pink-bg-div"></div>
                  <div className="black-bg-div">
                    <a
                      className="nav-link d-flex justify-content-center mt-2 "
                      href=""
                      alt=""
                    >
                      Your Garage
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-2 order-1">
              <img className="img-fluid garage-img" src={d} alt="" />
            </div>
          </div>
        </div>
        <div className="turbo-token-div">
          <div className="row">
            <div className="col-lg-6 px-2 d-flex flex-column mt-lg-5 align-items-lg-end align-items-center  order-lg-1 order-2 ">
              <div className="me-lg-5">
                <div className="me-lg-5">
                  <div className="me-lg-5">
                    <img
                      className="game-div-head-img mt-lg-5 me-lg-5 "
                      src={e}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="ps-lg-5 mt-lg-2 ps-2">
                <p className="ps-lg-5 ps-2">
                  TURBO is the substance that moves our game forward. It’s as
                  simple as this: The more NFTs the more Tokens! With every NFT
                  you buy, you receive a certain amount of TURBO that you can
                  use to play games, trade or buy more NFTs, or enjoy other
                  benefits within the game.
                </p>
                <p className="ps-lg-5 ps-2">
                  Wanna know more? Please read our Whitepaper.
                </p>
                <p className="ps-lg-5 ps-2">
                  You can not only use TURBO in the game, but also earn it.
                  Click on The Games to start Play to Earn. There will also be
                  regular opportunities to earn more TURBO – join our Discord to
                  make sure you don’t miss out!
                </p>
                <div className="header-button-div ms-5 position-relative ">
                  <div className="blue-bg-div"></div>
                  <div className="pink-bg-div"></div>
                  <div className="black-bg-div">
                    <a
                      className="nav-link d-flex justify-content-center mt-2 "
                      href=""
                      alt=""
                    >
                      Join our Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 d-flex justify-content-center ">
              <img className="img-fluid  token-img" src={f} alt="" />
            </div>
          </div>
        </div>
        <div className="game-div">
          <div className="row">
            <div className="col-lg-4 px-2 d-flex flex-column mt-lg-5 align-items-lg-end align-items-center  order-lg-1 order-2 ">
              <img className="game-div-head-img " src={g} alt="" />

              <div className="ps-lg-5 ps-2">
                <p className="ps-lg-5 ps-2">
                  the first NFT collectible card game with chrome, speed and
                  horsepower based on the polygon blockchain.
                </p>
                <p className="ps-lg-5 ps-2">
                  Scroll down to learn more about our 1,300 beautifully designed
                  NFTs in 5+ exclusive collections and of course about the game
                  behind it!
                </p>
                <p className="ps-lg-5 ps-2">
                  And don’t miss to join our Discord fast as we are giving away
                  3 FREE NFTs plus 3 TURBO (tokens) for a very limited time
                  only!
                </p>
                <div className="header-button-div ms-5 position-relative ">
                  <div className="blue-bg-div"></div>
                  <div className="pink-bg-div"></div>
                  <div className="black-bg-div">
                    <a
                      className="nav-link d-flex justify-content-center mt-2 "
                      href=""
                      alt=""
                    >
                      {" "}
                      Play for Fun
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              <img className="img-fluid me-3" src={k} alt="" />
            </div>
          </div>
        </div>
        <div className="garage-div">
          <div className="row">
            <div className="col-lg-5 px-2 d-flex flex-column mt-lg-5 align-items-lg-end align-items-center  order-lg-1 order-2 ">
              <div className="d-flex me-lg-5 ">
                <img
                  className="game-div-head-img mt-lg-5 me-lg-5"
                  src={i}
                  alt=""
                />
              </div>

              <div className="ps-lg-5 ps-2 mt-lg-1">
                <p className="ps-lg-5 ps-2">
                  Check out your very personal Garage and find all car(d)s in
                  your possesion – sorted by their categories.
                </p>
                <p className="ps-lg-5 ps-2 pt-sm-0 ">
                  The more floors you have, the more categories your portfolio
                  covers. Collect more cards to own them all, as not only you
                  will get tokens for each NFT in your possession, but multiple
                  times if you own categories completely.
                </p>
                <p className="ps-lg-5 ps-2">
                  The Garage is the base and starting point of the quartet game
                  and practically your account. Check it out and learn more via
                  this link:
                </p>
                <div className="header-button-div ms-5 position-relative ">
                  <div className="blue-bg-div"></div>
                  <div className="pink-bg-div"></div>
                  <div className="black-bg-div">
                    <a
                      className="nav-link d-flex justify-content-center mt-2 "
                      href=""
                      alt=""
                    >
                      Meet us in NewYork
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-2 order-1">
              <img className="img-fluid garage-img" src={j} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
