import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/png/Logo.png";
import group_bg from "../assets/img/png/group_bg.png";

function Navbar() {
  const [shownav, setShownav] = useState(true);
  if (shownav) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <section>
      {
        <div>
          <img
            className="w-100 position-absolute bg_img_adjust"
            src={group_bg}
            alt=""
          />
        </div>
      }
      <Container>
        <nav className="d-flex align-items-center justify-content-between py-4">
          <div className="z_3">
            <a href="#">
              {" "}
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className={shownav ? "hide_nav" : "show_nav"}>
            <ul className="d-flex flex-column flex-sm-row align-items-center justify-content-center vh_100">
              <li className="ml_32 ml_xsm_0 mt_30_xsm">
                <a
                  className="ff_raleway fw-medium fs_xsm clr_blue line_hover position-relative text_hvr"
                  href="#"
                >
                  {" "}
                  Home
                </a>
              </li>
              <li className="ml_32 ml_xsm_0 mt_30_xsm">
                <a
                  className="ff_raleway fw-medium fs_xsm clr_blue line_hover position-relative text_hvr"
                  href="#"
                >
                  {" "}
                  About Us
                </a>
              </li>
              <li className="ml_32 ml_xsm_0 mt_30_xsm">
                <a
                  className="ff_raleway fw-medium fs_xsm clr_blue line_hover position-relative text_hvr"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="ml_32 ml_xsm_0 mt_30_xsm">
                <a
                  className="ff_raleway fw-medium fs_xsm clr_blue line_hover position-relative text_hvr"
                  href="#"
                >
                  Premium
                </a>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setShownav(!shownav)}
            className="d-flex flex-column justify-content-between h_20 d-sm-none z-3"
          >
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </div>
        </nav>
      </Container>
    </section>
  );
}

export default Navbar;
