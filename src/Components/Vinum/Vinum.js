/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import e from "../../Media/sfc_petroltoken_logo.svg";
import f from "../../Media/petrol_token_header.png";
import "./Vinum.css";
import a from "../../Media/petrol-race-3600.jpg";
import b from "../../Media/Buying-NFT-PETROL.jpg";

const Vinum = () => {
  return (
    <div className="Vinum-page">
      <div className="Vinum-token-div">
        <div className="row">
          <div className="col-lg-6 px-2 d-flex flex-column mt-lg-5 align-items-lg-end align-items-center  order-lg-1 order-2 ">
            <div className="me-lg-5">
              <div className="me-lg-5">
                <div className="me-lg-5">
                  <img
                    className="game-div-head-img mt-lg-5 me-lg-5 "
                    src={e}
                    alt="Vinum Token"
                  />
                </div>
              </div>
            </div>
            <div className="ps-lg-5 mt-lg-2 ps-2">
              <p className="ps-lg-5 ps-2">
                ¡La espera ha terminado! ¡El Token Vinum ya está aquí! Vinum es
                la esencia que impulsa nuestra comunidad hacia adelante.
              </p>
              <p className="ps-lg-5 ps-2">
                Así de simple: ¡Cuántos más vinos, más Vinum! Con cada vino que
                compres, recibirás una cantidad determinada de Vinum, que podrás
                utilizar para participar, intercambiar o comprar más vinos, o
                disfrutar de otros beneficios dentro del dApp.
              </p>
              <p className="ps-lg-5 ps-2">
                Todos aquellos que adquirieron vinos de vino.ecologico antes del
                lanzamiento de Vinum o los recibieron a través de una promoción,
                también recibieron Vinum de manera proporcional en el
                lanzamiento. Puedes leer los detalles a continuación en
                "¿Quieres saber más?".
              </p>
              <p className="ps-lg-5 ps-2">
                ¿Interesado en saber más sobre Vinum o incluso comprarlo? ¡Sigue
                leyendo!
              </p>
              <div className="header-button-div ms-5 position-relative ">
                <div className="blue-bg-div"></div>
                <div className="pink-bg-div"></div>
                <div className="black-bg-div">
                  <a
                    className="nav-link d-flex justify-content-center mt-2 "
                    href="#"
                    alt=""
                  >
                    Cuéntale a tus amigos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 d-flex justify-content-center ">
            <img className="img-fluid token-img" src={f} alt="" />
          </div>
        </div>
      </div>
      <div className=" row mt-5">
        <div className="col-11 mx-auto px-4 ">
          <h1>CÓMO OBTENER Vinum:</h1>
          <h5 className="mt-1">
            Para obtener Vinum, puedes comprar nuestros vinos (ver{" "}
            <span>Colecciones</span>) o comprar Vinum directamente. Y así es
            como funciona:
          </h5>
          <div className="row py-5">
            <div className="col-lg-6 px-3">
              <div className="yellow-bg-div d-flex  align-items-center">
                <p className="px-4 mt-2">
                  Hay <span>dos formas</span> de <span>COMPRAR Vinum</span>{" "}
                  directamente. ¡Por favor, lee a continuación!
                </p>
              </div>
              <div className="mt-5">
                <ul>
                  <li className="mt-2">
                    Antes de comprar Vinum, por favor, lee nuestro{" "}
                    <span>Libro Blanco (Whitepaper).</span>
                  </li>
                  <li className="mt-2">
                    Puedes comprar Vinum directamente de nuestro fondo de
                    liquidez. Esto es ilimitado y posible desde 1 Vinum en
                    adelante. Para hacerlo, sigue este <span>enlace.</span>
                  </li>
                  <li className="mt-2">
                    Alternativamente, puedes comprar Vinum directamente aquí.
                    Esto requiere una{" "}
                    <span>transacción mínima de 150 MATIC.</span> El 80% del
                    monto que pagas por Vinum se reintegra al fondo de liquidez,
                    manteniendo así el valor de nuestro token estable. ¿No
                    tienes MATIC? Haz clic en el enlace para{" "}
                    <span>aprender cómo comprar MATIC.</span>
                  </li>
                  <li className="mt-2">
                    Si deseas comprar Vinum, por favor haz clic en uno de los
                    botones de "COMPRAR Vinum" a continuación. La moneda con la
                    que puedes comprar Vinum es MATIC. El precio de MATIC, por
                    supuesto, está sujeto a fluctuaciones y deberías verificar
                    la tasa actual antes de comprar.
                  </li>
                  <li className="mt-2">
                    Nota: Después de comprar, necesitas activar Vinum en
                    MetaMask para que Vinum sea <span>visible</span> allí.
                  </li>
                </ul>
              </div>
              <div className="note pt-5">
                <p>
                  Si compras Vinum aquí, obtendrás una tasa de cambio exclusiva
                  a MATIC de 1 a 100 como una promoción especial por tiempo
                  limitado.
                </p>
              </div>
            </div>
            <div className="col-lg-6 px-3">
              <img className="img-fluid" src={a} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="blue-bg-Vinum-div">
        <div className="text-center pt-5">
          <h1>¿QUIERES SABER MÁS?</h1>
          <p>Aquí está toda la historia sobre Vinum.</p>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row mt-3">
              <div className="col-lg-6">
                <p>
                  El Token Vinum de vino.ecologico estará profundamente
                  integrado en el ecosistema del dApp. Vinum eventualmente se
                  volverá deflacionario y los jugadores/poseedores serán
                  incentivados a mantenerlo, provocando un crecimiento natural
                  del precio, lo cual se logrará de las siguientes maneras:
                </p>
                <p>
                  Vinum será requerido como la forma principal de moneda dentro
                  del dApp. Los jugadores necesitarán Vinum para pagar por
                  mejoras en el dApp, tarifas de dApp, compras en el mercado y
                  más. Además, el "Tesoro de Vinum" eventualmente comprará y
                  quemará Vinum, haciéndolo naturalmente deflacionario a medida
                  que el ecosistema crezca.
                </p>

                <p>
                  Eventualmente, Vinum proporcionará a los poseedores la
                  oportunidad de participar activamente en las futuras
                  direcciones del dApp. El proyecto cambiará lentamente y de
                  manera segura de una estructura inicial a un dApp en línea
                  completamente descentralizado. Los poseedores de Vinum podrán
                  participar en votaciones de gobernanza en el futuro como parte
                  de un DAO/DAC próximo, permitiéndoles dar forma al futuro de
                  vino.ecologico.
                </p>
                <div className="header-button-div ms-5 position-relative">
                  <div className="blue-bg-div"></div>
                  <div className="pink-bg-div"></div>
                  <div className="black-bg-div">
                    <a
                      className="nav-link d-flex justify-content-center mt-2"
                      href="#"
                      alt=""
                    >
                      Lee nuestro Libro Blanco
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 px-3">
                <p>¿Aún quieres saber más?</p>
                <p>
                  El suministro máximo de Vinum es de 500,000,000, mientras que
                  solo el 10% (50,000,000) se circuló inicialmente. 1 Vinum
                  equivale a 100 GOTAS. El precio inicial de cotización en el
                  mercado fue de $0.01. Vinum ya está listado en Quickswap, pero
                  se planea listar en otros Exchanges en el futuro (por ejemplo,
                  KUKOIN). Además, Vinum será listado en coinmarketcap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vinum;
