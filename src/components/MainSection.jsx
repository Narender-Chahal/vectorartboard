import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headimg from "../assets/img/png/main_img.png";
import bg_img from "../assets/img/png/bg_img.png";
import dotimg from "../assets/img/png/dot_img.png";
import cross from "../assets/img/png/cross.png";
import cross2 from "../assets/img/png/cross2.png";
import browser from "../assets/img/png/browser.png";
import browser2 from "../assets/img/png/browser2.png";
import browser3 from "../assets/img/png/browser2.png";
import a_img from "../assets/img/png/a.png";
// import group_bg from "../assets/img/png/group_bg.png";
function MainSection() {
  return (
    <section className=" pt-5 mt-5 position-relative flex-grow-1">
      <div className="z_index-4">
        <img
          className="position-absolute dot_img_adjust mw_50 z_index-4 d-none d-lg-flex"
          src={dotimg}
          alt="dotimg"
        />
        <img
          className="position-absolute cross_img_adjust   d-none d-lg-flex"
          src={cross}
          alt="cross"
        />
        <img
          className="position-absolute cross3_img_adjust   d-none d-lg-flex"
          src={cross}
          alt="cross"
        />
        <img
          className="position-absolute cross2_img_adjust   d-none d-lg-flex"
          src={cross2}
          alt="cross2"
        />
        <img
          className="position-absolute browser_img_adjust   d-none d-lg-flex"
          src={browser}
          alt="browser"
        />
        <img
          className="position-absolute browser2_img_adjust   d-none d-lg-flex"
          src={browser2}
          alt="browser2"
        />
        <img
          className="position-absolute browser3_img_adjust   d-none d-lg-flex"
          src={browser3}
          alt="browser3"
        />
        <img
          className="position-absolute a_img_adjust   d-none d-lg-flex"
          src={a_img}
          alt="a_img"
        />
      </div>
      <Container>
        <Row className="align-items-center d-flex  flex-column-reverse flex-lg-row">
          <Col lg={6}>
            {" "}
            <h3 className="mb-0 dark_blue ff_inter fw-light fs_xl pt-4 pt-lg-0">
              Increased Efficiency
            </h3>
            <h1 className="mb-0 dark_blue ff_inter fw-bold fs_4xl mt-2">
              Through Automation
            </h1>
            <p className="mb-0 fw-normal ff_inter fs_md pt-4">
              We have{" "}
              <span className="fw-bold">automated invoice distribution</span>{" "}
              from as our automation initiatives.
            </p>
          </Col>
          <Col lg={6}>
            <img className="w-100" src={headimg} alt="headimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainSection;
