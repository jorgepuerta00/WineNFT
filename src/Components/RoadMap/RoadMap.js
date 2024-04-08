import React from "react";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div id="roadmap" className="roadmap-container py-2">
      <div className="text-center pt-5 mt-3">
        <h1 className="pt-3">HOJA DE RUTA PARA VINOS ECOLÓGICOS</h1>
        <p>
          Lanzamiento de una DApp especializada en la venta de vinos ecológicos.
        </p>
        <p>
          Un compromiso con la sostenibilidad y la calidad, asegurando prácticas
          que respeten el medio ambiente en cada etapa de la producción.
        </p>
        <p>Explora nuestra hoja de ruta:</p>
      </div>
      <div className="d-flex justify-content-center mt-5 ">
        <div className="year-div d-flex justify-content-center align-items-center mt-5">
          2023
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center  order-lg-1 order-2">
          <div className="card p-3 px-3 me-lg-4 ">
            <h5>FASE 1: LANZAMIENTO DE LA DAPP Y CERTIFICACIÓN ECOLÓGICA</h5>
            <p className="card-p-r">
              Lanzamiento de la plataforma | Inicio de certificaciones
              ecológicas | Participación en eventos de sostenibilidad.
            </p>
            <ul>
              <li>La DApp para vinos ecológicos se lanza ✅</li>
              <li className="mt-2">
                Comenzamos el proceso de certificación ecológica ✅
              </li>
              <li className="mt-2">
                Aumenta el interés y la participación en nuestros eventos y
                webinars sobre sostenibilidad y vino ecológico ✅
              </li>
            </ul>
            <p className="mt-4">
              Nos preparamos para la próxima gran fase: la migración a
              Hyperledger Fabric para mejorar la seguridad y la trazabilidad.
            </p>
          </div>
        </div>
        <div className="col-lg-6 px-2 order-lg-2 order-1">
          <p className="date-p">Junio de 2023</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 ">
        <div className="year-div d-flex justify-content-center align-items-center mt-5">
          2024
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 px-2 d-flex justify-content-start justify-content-lg-end ">
          <p className="date-p me-lg-4">Enero de 2024</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center ">
          <div className="card p-3 px-3 ms-lg-3 ">
            <h5>FASE 2: MIGRACIÓN A HYPERLEDGER FABRIC</h5>
            <p className="card-p-r">
              Mejora de la infraestructura tecnológica | Aseguramiento de la
              trazabilidad y la seguridad.
            </p>
            <p>
              Con la migración a Hyperledger Fabric, elevamos nuestro compromiso
              con la transparencia y la trazabilidad en la cadena de suministro
              del vino ecológico. ✅
            </p>
            <p>
              Esta tecnología nos permite certificar de manera segura cada paso
              en la producción, asegurando que nuestros valores ecológicos sean
              una realidad y no solo texto. ✅
            </p>
            <p className="card-p-r">¿Qué sigue?</p>
            <ul>
              <li>
                Cada bodega se convierte en una organización dentro de nuestra
                red, aumentando la colaboración y la sostenibilidad. ✅
              </li>
              <li className="mt-2">
                Implementación del seguimiento en la cadena de producción para
                certificar nuestros valores ecológicos en cada paso. ✅
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default RoadMap;
