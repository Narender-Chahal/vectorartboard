import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import right_arrow from "../assets/img/png/right_arrow.png";
import right_arrow1 from "../assets/img/png/right_arrow1.png";
import left_arrow from "../assets/img/png/left_arrow.png";
import clock from "../assets/img/png/clock.png";
import invoic from "../assets/img/png/invoic.png";
import man from "../assets/img/png/man.png";
import img1 from "../assets/img/png/img1.png";
import img2 from "../assets/img/png/img2.png";
function Footer() {
  return (
    <section className="pb-5  position-relative overflo w-hidden">
      <div className="top_75 w-100 position-absolute">
        {" "}
        <div className="border2 "></div>
      </div>{" "}
      <img
        className="position-absolute bottom-4 start-0 z_index-4 w-100"
        src={img1}
        alt="img1"
      />
      {/* <img className="position-absolute bottom-0 z_index-4 end-0" src={img2} alt="img2" /> */}
      <div className="bg_group">
        <Container>
          <Row className="justify-content-center">
            <Col sm={6} xs={6} className="justify-content-center d-flex pt-4">
              {" "}
              <div className="small_line "></div>
            </Col>
            <Col sm={6} xs={6} className="justify-content-center d-flex pt-4">
              {" "}
              <div className="small_line"></div>
            </Col>
          </Row>
          <div className="foter_box mt-5 ">
            <Row className="  ">
              <Col lg={4} className="pt-5 pt-lg-0">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="position-relative d-flex align-items-end">
                    <h2 className="mb-0 ff_inter fw-bold fs_6xl text-white ">
                      8
                    </h2>
                    <div className="border1 position-absolute  start_30">
                      {/* <h3>MONTHS</h3> */}
                    </div>
                    <h3 className="mb-0 ff_inter fw-bold fs_xxlg text-white  z_4">
                      MONTHS
                    </h3>
                  </div>
                </div>
              </Col>
              <Col
                lg={4}
                className="pt-5 pt-lg-0 d-flex justify-content-center"
              >
                <div className="d-flex   align-items-center h-100">
                  <div className="pe-sm-5 pe-4">
                    <img src={right_arrow1} alt="right_arrow1" />
                  </div>
                  <div className="text-center d-flex flex-column justify-content-center">
                    <h3 className="mb-0 pb-3 text-white ff_inter fw-bold fs_xlg">
                      Duration
                    </h3>
                    <div className="">
                      {" "}
                      <img className="text-center" src={clock} alt="clock" />
                    </div>
                  </div>
                  <div className="ps-sm-5 ps-4">
                    <img src={left_arrow} alt="left_arrow" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="pt-5 pt-lg-0">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="position-relative d-flex align-items-end">
                    <h2 className="mb-0 ff_inter fw-bold fs_6xl text-white ">
                      4
                    </h2>
                    <div className="border1 position-absolute  start_30">
                      {/* <h3>MONTHS</h3> */}
                    </div>
                    <h3 className="mb-0 ps-md-3 ps-xl-0 ff_inter fw-bold fs_xxlg text-white  z_4">
                      MONTHS <br></br> REMAINING
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="foter_box2 mt-5 ">
            <div className="d-flex flex-column  flex-md-row justify-content-center align-items-center">
              <div className="pe-md-5 p-0">
                <h2 className="mb-0 dark_blue fw-bold fs_xl">42K</h2>
              </div>{" "}
              <div className="d-flex   align-items-center h-100 py-5 py-md-0">
                <div className="pe-sm-5 pe-4 z-3">
                  <img className="z-3" src={right_arrow} alt="right_arrow" />
                </div>
                <div className="text-center d-flex flex-column justify-content-center">
                  <h3 className="mb-0 pb-3 dark_blue ff_inter fw-bold fs_xlg">
                    Invoices
                  </h3>
                  <div className="">
                    {" "}
                    <img className="text-center" src={invoic} alt="invoic" />
                  </div>
                </div>
                <div className="ps-sm-5 ps-4">
                  <img src={left_arrow} alt="left_arrow" />
                </div>
              </div>
              <div className="ps-md-5">
                <h2 className="mb-0 fw-bold fs_xl clr_orange">21K </h2>
              </div>
            </div>
          </div>
          <div className="foter_box mt-5 ">
            <div className="d-flex flex-column  flex-md-row justify-content-center align-items-center">
              <div className="pe-md-5 p-0">
                <h2 className="mb-0 text-white fw-bold fs_3xl">95</h2>
                <h3 className="mb-0 fw-bold fs_xsm ff_inter text-white ">
                  MAN DAYS
                </h3>
              </div>{" "}
              <div className="d-flex   align-items-center h-100 py-5 py-md-0">
                <div className="pe-sm-5 pe-4 z-3">
                  <img className="z-3" src={right_arrow1} alt="right_arrow1" />
                </div>
                <div className="text-center d-flex flex-column justify-content-center">
                  <h3 className="mb-0 pb-3 text-white ff_inter fw-bold fs_xlg">
                    Effort
                  </h3>
                  <div className="">
                    {" "}
                    <img className="text-center" src={man} alt="man" />
                  </div>
                </div>
                <div className="ps-sm-5 ps-4">
                  <img src={left_arrow} alt="left_arrow" />
                </div>
              </div>
              <div className="ps-md-5">
                <h2 className="mb-0 fw-bold fs_3xl text-white">14.25 </h2>
                <h3 className="mb-0 fw-bold fs_xsm ff_inter text-white ps-2">
                  MAN DAYS
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Footer;
