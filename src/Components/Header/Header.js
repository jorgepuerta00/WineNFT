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
                  vino.ecologico es más que una excelente colección de NFTs
                  coleccionables: representa un compromiso con la calidad y la
                  sostenibilidad en el mundo del vino.
                </p>
                <p className="ps-lg-5 ps-2">
                  ¿Ya tienes tus vinos seleccionados? Haz clic en el enlace de
                  abajo y EXPLORA MÁS o COMPRA PARA APOYAR la producción
                  ecológica. ¿Aún no tienes tus primeras botellas? Entonces haz
                  clic en La Colección arriba para comenzar.
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
                      Explorar Colección{" "}
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
        <div className="winery-div">
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
                  Explora tu Bodega Personal y descubre todos los vinos que
                  posees, ordenados por categorías.
                </p>
                <p className="ps-lg-5 ps-2 pt-sm-0 ">
                  Cuanto más amplia sea tu colección, más categorías cubrirá.
                  Colecciona más vinos para completar tu bodega. No solo
                  recibirás recompensas por cada NFT en tu posesión, sino
                  también beneficios adicionales si completas categorías
                  enteras.
                </p>
                <p className="ps-lg-5 ps-2">
                  La Bodega no es solo un punto de inicio para ampliar tu
                  colección, sino prácticamente tu espacio personalizado.
                  Descubre más a través de este enlace:
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
                      Tu Bodega{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-2 order-1">
              <img className="img-fluid winery-img" src={d} alt="" />
            </div>
          </div>
        </div>
        <div className="Vinum-token-div">
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
                  Vinum es la esencia que avanza nuestra plataforma. Así de
                  simple: ¡Cuántos más NFTs, más Vinum! Con cada NFT que
                  adquieras, recibirás una cantidad determinada de Vinum, que
                  podrás utilizar para obtener beneficios dentro de la
                  plataforma.
                </p>
                <p className="ps-lg-5 ps-2">
                  ¿Quieres saber más? Consulta nuestro Libro Blanco.
                </p>
                <p className="ps-lg-5 ps-2">
                  No solo puedes usar Vinum dentro de la plataforma, sino
                  también ganarlo. Haz clic en Juegos para comenzar a Jugar y
                  Ganar. Habrá oportunidades regulares para obtener más Vinum –
                  únete a nuestro Discord para no perderte nada.
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
                      Únete a nuestro Discord{" "}
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
                  El primer juego de cartas coleccionables NFT con esencia,
                  pasión y tradición vitivinícola, basado en la blockchain de
                  polygon.
                </p>
                <p className="ps-lg-5 ps-2">
                  Desciende para aprender más sobre nuestras 1,300 NFTs
                  bellamente diseñadas en más de 5 colecciones exclusivas y, por
                  supuesto, sobre el juego detrás de ellas.
                </p>
                <p className="ps-lg-5 ps-2">
                  ¡Y no pierdas la oportunidad de unirte a nuestro Discord, ya
                  que estamos regalando 3 NFTs GRATIS más 3 Vinum (tokens) por
                  tiempo muy limitado!
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
                      Juega por Diversión{" "}
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
        <div className="winery-div">
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
                  Descubre tu Bodega Personal y encuentra todos los vinos en tu
                  posesión, organizados por categorías.
                </p>
                <p className="ps-lg-5 ps-2 pt-sm-0 ">
                  Cuanto más completa sea tu colección, más categorías cubrirá
                  tu portafolio. Colecciona más vinos para poseerlos todos, ya
                  que no solo recibirás tokens por cada NFT que poseas, sino
                  múltiples veces si posees categorías completas.
                </p>
                <p className="ps-lg-5 ps-2">
                  La Bodega es la base y el punto de partida del juego del
                  cuarteto y, prácticamente, tu cuenta. Descúbrelo y aprende más
                  a través de este enlace:
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
                      Encuéntranos en Nueva York{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-2 order-1">
              <img className="img-fluid winery-img" src={j} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
