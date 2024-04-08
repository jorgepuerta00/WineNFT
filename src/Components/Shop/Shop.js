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
      <Header title="Nuestra Tienda" />
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row mt-5">
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={a} alt="Colección de vinos" />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="s-h-div text-center">
                    <h4 className="mt-5 text-center">Colección Ilimitada</h4>
                  </div>
                  <p>ILIMITADO</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="header-button-div position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2"
                        to="/thecollection"
                        alt=""
                      >
                        Ir a Tienda
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={b} alt="Colección Plata" />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="s-h-div text-center">
                    <h4 className="mt-5 text-center">Colección Plata</h4>
                  </div>
                  <p>RARO</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="header-button-div position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2"
                        to="/SilverCollection"
                        alt=""
                      >
                        Ir a Tienda
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={c} alt="Colección Oro Rosa" />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="s-h-div text-center">
                    <h4 className="mt-5 text-center">Colección Oro Rosa</h4>
                  </div>
                  <p>MUY RARO</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="header-button-div position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2"
                        to="/rosegoldcollection"
                        alt=""
                      >
                        Ir a Tienda
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-shop-div py-5">
                <img className="img-fluid" src={d} alt="Colección Oro" />
                <div className=" d-flex flex-column  justify-content-center align-items-center">
                  <div className="sh-h-div text-center">
                    <h4 className="mt-5 text-center">
                      Colección de Oro Limitada
                    </h4>
                  </div>
                  <p>RARO Y LIMITADO</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="header-button-div position-relative ">
                    <div className="blue-m-bg-div"></div>
                    <div className="pink-m-bg-div"></div>
                    <div className="black-m-bg-div">
                      <NavLink
                        className="nav-link d-flex justify-content-center mt-2"
                        to="/carbonleathercollection"
                        alt=""
                      >
                        Ir a Tienda
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <h4 className="scroll-h text-center">
              DESPLÁZATE HACIA ABAJO PARA VER ALGUNAS OFERTAS ESPECIALES
            </h4>
            <IoIosArrowDown className="mt-2 down-arrow" />
          </div>
          <div className="d-flex justify-content-center flex-column pb-5">
            <img className="img-fluid" src={e} alt="Oferta especial" />
            <div className="d-flex justify-content-center">
              <div className="header-button-div position-relative">
                <div className="blue-m-bg-div"></div>
                <div className="pink-m-bg-div"></div>
                <div className="black-m-bg-div">
                  <a
                    className="nav-link d-flex justify-content-center mt-2"
                    href=""
                    alt=""
                  >
                    Comprar
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
