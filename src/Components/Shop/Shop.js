import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import d from "../../Media/carbon_shop-new.png";
import a from "../../Media/collection_shop-new.png";
import c from "../../Media/rose-gold_shop.png";
import b from "../../Media/silver_shop-new.png";
import e from "../../Media/special-offer-web_2.png";
import Header from "../shared/header";
import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <Header title="The Collections" />

      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row mt-5">
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={a} />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="s-h-div text-center">
                    <h4 className="mt-5 text-center">THE COLLECTION</h4>
                  </div>
                  <p>UNLIMITED</p>
                </div>
                <div className="d-flex justify-content-center  ">
                  <div className="header-button-div   position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2 "
                        to="/thecollection"
                        alt=""
                      >
                        Visit Shop
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={b} />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="s-h-div text-center">
                    <h4 className="mt-5 text-center">SILVER COLLECTION</h4>
                  </div>

                  <p>LIMITED</p>
                </div>
                <div className="d-flex justify-content-center  ">
                  <div className="header-button-div   position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2 "
                        to="/SilverCollection"
                        alt=""
                      >
                        Visit Shop
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={c} />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="s-h-div text-center">
                    <h4 className="mt-5 text-center">ROSE GOLD COLLECTION</h4>
                  </div>

                  <p>VERY RARE</p>
                </div>
                <div className="d-flex justify-content-center  ">
                  <div className="header-button-div   position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2 "
                        to="/rosegoldcollection"
                        alt=""
                      >
                        Visit Shop
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={d} />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="sh-h-div text-center">
                    <h4 className="mt-5 text-center">
                      CARBON & LEATHER COLLECTION
                    </h4>
                  </div>

                  <p>RARE & LIMITED</p>
                </div>
                <div className="d-flex justify-content-center  ">
                  <div className="header-button-div   position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2 "
                        to="/carbonleathercollection"
                        alt=""
                      >
                        Visit Shop
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <h4 className="scroll-h text-center ">
              SCROLL DOWN TO CHECK SOME SPECIAL OFFERS!
            </h4>
            <IoIosArrowDown className="mt-2 down-arrow" />
          </div>
          <div className="d-flex justify-content-center flex-column pb-5">
            <img className="img-fluid" src={e} alt="a" />
            <div className="d-flex justify-content-center  ">
              <div className="header-button-div   position-relative ">
                <div className="blue-m-bg-div"></div>
                <div className="pink-m-bg-div"></div>
                <div className="black-m-bg-div">
                  <a
                    className="nav-link d-flex justify-content-center mt-2 "
                    href=""
                    alt=""
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
