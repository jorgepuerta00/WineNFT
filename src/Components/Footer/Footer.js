import React from "react";
import "./Footer.css";
import a from "../../Media/speechbubble_fuss.svg";
import b from "../../Media/Superfastcards_Logo_lang_RZ_weiss.svg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black footer py-5">
      <div className="d-flex justify-content-center ">
        <img className="img-fluid footer-h-img" src={a} alt="A" />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <img className="img-fluid footer-hs-img" src={b} alt="A" />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <p className="footer-p">© ledgerlegends.racing 2021-2022</p>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <p className="footer-p">
          Get in touch via discord or via{" "}
          <span hred="/founders@ledgerlegends.racing" className="ms-1">
            {" "}
            founders@ledgerlegends.racing
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-center ">
        <a href="https://www.morepixel.com/corporate-design-agentur/">
          Corporate Design Agentur
        </a>
      </div>
      <div className="d-flex justify-content-center mt-2  bottom-div">
        <a className="footer-a mx-1">Imprint</a> |
        <a className="footer-a mx-1">Data Protection</a> |
        <a className="footer-a mx-1">WhitePaper</a> |
      </div>
      <div className="d-flex justify-content-center mt-3">
        <a>
          <FaTwitter className="footer-icon" />
        </a>
        <a>
          <FaInstagram className="footer-icon mx-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
