import React from "react";
import "./Games.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import game from "../../Media/thegame.jpg";

const Games = () => {
  return (
    <div id="game" className="row Games-main">
      <div className="col-11 mx-auto mt-5">
        <div className="row mt-5">
          <div className="col-lg-6 p-2">
            <h1 className="q-g-h">EL MERCADO DE VINOS ECOLÓGICOS</h1>
            <p>
              vino.ecologico no es solo una plataforma, sino una revolución en
              la forma en que productores y consumidores se conectan. Cada
              botella de vino disponible en nuestra DApp es una promesa de
              calidad, sostenibilidad y autenticidad, directamente de la bodega
              a tu copa, sin intermediarios.
            </p>
            <div className="blue-writing-box text-center d-flex justify-content-center  align-items-center ">
              <p>
                El principio es muy simple: Transparencia y calidad directamente
                del productor.
              </p>
            </div>
            <div className="row mt-2">
              <div className="col-1 px-0 mx-0 ms-0">
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </div>
              <div className="col-11">
                Descubre nuestra selección y compra directamente. Explora vinos
                auténticos, conoce a los productores y su filosofía. Todo en un
                solo lugar.
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-1 px-0 mx-0 ms-0">
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </div>
              <div className="col-11">
                Participa en eventos exclusivos, catas online y encuentros
                virtuales. Aprende más sobre el mundo del vino ecológico y cómo
                tu elección marca la diferencia.
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-1 px-0 mx-0 ms-0">
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </div>
              <div className="col-11">
                Apoya la sostenibilidad. Cada compra contribuye a prácticas de
                cultivo ecológico y a una economía más justa para pequeños
                productores.
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-1 px-2">
            <img
              className="img-fluid ms-lg-3"
              src={game}
              alt="Vinos Ecológicos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
