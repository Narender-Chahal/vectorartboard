import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arraygroup from "../assets/img/png/arraygroup.png";
import pre_automation from "../assets/img/png/pre_automation.png";
import post_automation from "../assets/img/png/post_automation.png";
import position_arrow from "../assets/img/png/arrow_position.png";
import dots_img from "../assets/img/png/dots.png";
import rightdots from "../assets/img/png/rightdots.png";
function IncreasingProcess() {
  return (
    <section className="py-5 position-relative">
      <img
        className="position-absolute top-50"
        src={position_arrow}
        alt="position_arrow"
      />
      <img className="position-absolute top-0" src={dots_img} alt="dots_img" />
      <img
        className="position-absolute top-25 end-0"
        src={rightdots}
        alt="rightdots"
      />
      <Container>
        <h2 className="mb-0 dark_blue ff_inter fw-bold fs_xxl text-center pt-5 ">
          Increasing process efficiency by
        </h2>
        <div className="position-relative d-flex justify-content-center pt-4">
          <h2 className="ff_inter fw-bold mb-0 fs_5xl clr_green">4x</h2>
          <img
            className="position-absolute arraygroup_adjust"
            src={arraygroup}
            alt="arraygroup"
          />
        </div>
        <Row className="pt-5 mt-5 position-relative d-none d-sm-flex">
          <Col sm={6} xs={6}>
            <div className="box_vs">
              <h3 className="mb-0 text-center d-flex justify-content-md-center p-2 p-md-0 align-items-center h-100 ff_inter fw-bold fs_xmd clr_lightblue">
                PRE-AUTOMATION
              </h3>
            </div>
          </Col>
          <Col sm={6} xs={6}>
            <div className="box_vs2">
              <h3 className="mb-0 text-center d-flex justify-content-end p-2 p-md-0 justify-content-md-center align-items-center h-100 ff_inter fw-bold fs_xmd text-white">
                POST-AUTOMATION
              </h3>
            </div>
            <div className="position-absolute vs_boxadjust">
              <div className="vs_box d-flex align-items-center justify-content-center">
                <div className="vs2_box d-flex align-items-center justify-content-center">
                  <h4 className="mb-0 clr_lightblue ff_inter fw-bold fs_xxl">
                    V
                  </h4>
                  <h4 className="mb-0 clr_lightblue ff_inter fw-bold fs_xxl pt-4    ">
                    S
                  </h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>{" "}
        <Row className="pt-5">
          <Col sm={6} className="pt-5">
            {" "}
            <div className="box_vs d-sm-none">
              <h3 className="mb-0 text-center d-flex justify-content-center p-2 p-md-0 align-items-center h-100 ff_inter fw-bold fs_xmd clr_lightblue">
                PRE-AUTOMATION
              </h3>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center pt-5 pt-sm-0">
              {" "}
              <img
                className=" width w-1 00 "
                src={pre_automation}
                alt="pre_automation"
              />
              <p className="mb-0 ff_inter fw-bold fs_lg pt-5 mt-3 clr_orange">
                With 100% manual process
              </p>
            </div>
          </Col>
          <div className="d-flex justify-content-center pt-5 d-sm-none">
            <div className="vs_box d-flex align-items-center justify-content-center">
              <div className="vs2_box d-flex align-items-center justify-content-center">
                <h4 className="mb-0 clr_lightblue ff_inter fw-bold fs_xxl">
                  V
                </h4>
                <h4 className="mb-0 clr_lightblue ff_inter fw-bold fs_xxl pt-4    ">
                  S
                </h4>
              </div>
            </div>
          </div>
          <Col sm={6} className="pt-5">
            <div className="box_vs2 d-sm-none">
              <h3 className="mb-0 text-center d-flex   p-2 p-md-0 justify-content-center align-items-center h-100 ff_inter fw-bold fs_xmd text-white">
                POST-AUTOMATION
              </h3>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center pt-5 pt-sm-0">
              <img
                className=" width_post  "
                src={post_automation}
                alt="pre_automation"
              />
              <p className="mb-0 ff_inter fw-bold fs_lg pt-5 mt-3 ">
                With just 70% implementation{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default IncreasingProcess;
