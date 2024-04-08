import React, { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

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
      <h1 className="text-center">Preguntas Frecuentes</h1>
      <div className="row">
        <div className="col-lg-9 px-2 mx-auto">
          <div
            onClick={() => {
              setIconone(!iconone);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">¿Qué son los vinos ecológicos?</p>
            {iconone ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconone && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Los vinos ecológicos son aquellos producidos bajo una filosofía
                de mínimo impacto ambiental, evitando el uso de pesticidas y
                fertilizantes químicos no naturales. La producción se centra en
                mantener la salud del viñedo y el equilibrio ecológico,
                resultando en vinos que reflejan la verdadera esencia de su
                lugar de origen.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIcontwo(!icontwo);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">
              ¿Cómo puedo verificar si un vino es ecológico?
            </p>
            {icontwo ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!icontwo && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Los vinos ecológicos suelen estar certificados por organismos
                oficiales que garantizan el cumplimiento de normativas
                específicas en su producción. Busca sellos de certificación
                ecológica en la etiqueta, como USDA Organic, Demeter (para
                biodinámicos), o el sello orgánico de la Unión Europea.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconthree(!iconthree);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">¿Por qué elegir vinos ecológicos?</p>
            {iconthree ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconthree && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Elegir vinos ecológicos no solo beneficia tu salud, al evitar
                residuos de pesticidas químicos, sino que también apoya
                prácticas agrícolas sostenibles que respetan y enriquecen la
                tierra. Además, muchos aficionados al vino encuentran que estos
                vinos ofrecen expresiones más auténticas y complejas de las uvas
                y terroirs.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconfour(!iconfour);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">¿Son más caros los vinos ecológicos?</p>
            {iconfour ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconfour && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Aunque el costo de producción puede ser más alto debido a las
                prácticas sostenibles y al menor rendimiento por hectárea, el
                precio de los vinos ecológicos es cada vez más competitivo. La
                diferencia de precio se justifica por la calidad y la
                sostenibilidad del producto.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconfive(!iconfive);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">¿Dónde puedo comprar vinos ecológicos?</p>
            {iconfive ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconfive && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Los vinos ecológicos se pueden comprar en tiendas
                especializadas, en algunas grandes superficies que cuenten con
                sección de productos ecológicos, o directamente de las bodegas
                productoras a través de sus sitios web. También hay plataformas
                en línea dedicadas a la venta de vinos sostenibles.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconsix(!iconsix);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">
              ¿Se pueden comprar vinos ecológicos directamente al productor?
            </p>
            {iconsix ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          <div
            onClick={() => {
              setIconsix(!iconsix);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">
              ¿Es posible comprar vinos ecológicos directamente a los
              productores a través de esta DApp?
            </p>
            {iconsix ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconsix && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Absolutamente, nuestra DApp facilita la compra directa de vinos
                ecológicos desde los productores. Al utilizar nuestra
                plataforma, no solo se promueve una negociación directa entre el
                productor y el consumidor, sino que también se asegura un
                servicio de entrega a domicilio. Esto permite a los consumidores
                adquirir vinos de alta calidad directamente de las bodegas,
                garantizando la frescura y apoyando las prácticas sostenibles.
                La DApp está diseñada para fortalecer la relación entre
                productores y consumidores, ofreciendo una experiencia de compra
                transparente y directa.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              setIconseven(!iconseven);
            }}
            className="faq-main-div d-flex justify-content-between align-items-center px-2"
          >
            <p className="mt-3">
              ¿Cómo funcionan los pagos en la DApp para la compra de vinos
              ecológicos?
            </p>
            {iconseven ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
          {!iconseven && (
            <div className="faq-inner-div px-3 py-3 d-flex justify-content-center align-items-center ">
              <p>
                Aunque nuestra plataforma se basa en tecnología blockchain y
                utiliza Ethereum, hemos diseñado el proceso de pago para que sea
                completamente transparente y fácil de usar para el usuario.
                Puedes realizar pagos directamente desde tu cuenta bancaria o
                mediante tarjeta de crédito, sin necesidad de tener
                conocimientos previos sobre criptomonedas o blockchain. Nuestro
                sistema convierte automáticamente tu pago al equivalente en
                Ethereum de manera interna, asegurando una transacción segura y
                sin complicaciones. Esto permite a cualquier persona comprar
                vinos ecológicos directamente a través de la DApp con la
                comodidad y seguridad que proporcionan los métodos de pago
                tradicionales.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
