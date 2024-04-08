import React from "react";
import logo from "../../Media/Superfastcards_Logo_lang_RZ_weiss.svg";
import "./Navbar.css";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row bg-black ">
      <div className="col-11 mx-auto navbar-h">
        <nav className="navbar navbar-expand-lg d-block navbar-dark ">
          <div className=" ">
            <div className="row">
              <div className="col-lg-4 col-9 col-sm-10 order-lg-1 order-2">
                <NavLink className="navbar-brand" to="/">
                  <img className="logo-img" src={logo} alt="a" />
                </NavLink>
              </div>
              <div className="col-lg-8 col-sm-2 col-3 order-lg-2 order-1 ">
                <div className="">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ">
                      <li className="nav-item  ">
                        <NavLink
                          active="menu_active"
                          className="nav-link"
                          to="/games"
                        >
                          THE GAMES
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          active="menu_active"
                          className="nav-link"
                          to="/thecollection"
                        >
                          THE COLLECTIONS
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          active="menu_active"
                          className="nav-link"
                          to="/shop"
                        >
                          THE SHOP
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          active="menu_active"
                          className="nav-link"
                          to="/roadmap"
                        >
                          THE ROADMAP
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink
                          active="menu_active"
                          className="nav-link"
                          to="/faq"
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li className="nav-item  ">
                        <NavLink
                          active="menu_active"
                          className="nav-link p-c-link"
                          to="/garage"
                        >
                          YOUR GARAGE
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink
                          active="menu_active"
                          className="nav-link "
                          to="/turbo"
                        >
                          TURBO
                        </NavLink>
                      </li>
                      <li className="nav-item  ">
                        <a
                          active="menu_active"
                          className="nav-link f-c-link "
                          href="#features"
                        >
                          <FaTwitter className="t-icon me-1" />
                          FOLLOW US
                        </a>
                      </li>
                      <li className="nav-item ">
                        <NavLink
                          active="menu_active"
                          className="nav-link "
                          to="/play"
                        >
                          PLAY
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
