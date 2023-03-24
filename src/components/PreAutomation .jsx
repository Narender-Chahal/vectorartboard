import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import card1 from "../assets/img/png/card1.png";
import card2 from "../assets/img/png/card2.png";
import card3 from "../assets/img/png/card3.png";
import card4 from "../assets/img/png/card4.png";
import arrow from "../assets/img/png/arrow.png";
import dotimg from "../assets/img/png/dot_img.png";
function PreAutomation() {
  return (
    <section className="pt-5 mt-5 positionrelative">
      <img
        className="position-absolute dot2_img_adjust z_index1  "
        src={dotimg}
        alt="dotimg"
      />
      <div className="position-absolute bottom-2 start-0 w-100 z_index1">
        {" "}
        <div className="box_dark  "></div>
      </div>{" "}
      <Container>
        <div className="text-center">
          <h2 className="mb-0 pt-5 mt-5 dark_blue ff_inter fw-bold fs_xxl">
            Pre-Automation{" "}
          </h2>
          <p className="mb-0 fw-normal fs_md ff_inter pt-5">
            <span className="fw-bold">Manually creating</span> and{" "}
            <span className="fw-bold">distributing invoices</span> -
            labor-intensive and prone to errors.
          </p>
        </div>
        <Row className="pt-5 mt-5">
          <Col lg={3} sm={6} className="my-4 position-relative">
            <div className="box h-100 d-flex flex-column align-items-center  justify-content-center">
              <div className="img_box d-flex  align-items-center  justify-content-center">
                <img src={card1} alt="card1" />
              </div>
              <div>
                <h3 className="mb-0 text-center ff_inter fw-light pt-5 fs_xsm">
                  Download invoices manually
                </h3>
              </div>
              <div className="position-absolute array_adjust d-none d-sm-flex">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} className="my-4 position-relative">
            <div className="box h-100 d-flex flex-column align-items-center  justify-content-center">
              <div className="img_box d-flex align-items-center  justify-content-center">
                <img src={card2} alt="card2" />
              </div>
              <h3 className="mb-0 text-center ff_inter fw-light pt-5 fs_xsm">
                Create an email for the tenant contact
              </h3>
              <div className="position-absolute array2_adjust d-none d-lg-flex">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} className="my-4 position-relative">
            <div className="box h-100 d-flex flex-column align-items-center  justify-content-center">
              <div className="img_box d-flex align-items-center  justify-content-center">
                <img src={card3} alt="card3" />
              </div>
              <div>
                {" "}
                <h3 className="mb-0 text-center ff_inter fw-light pt-5 fs_xsm">
                  Send the e-mailmanually
                </h3>
              </div>
              <div className="position-absolute array_adjust d-none d-sm-flex">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} className="my-4">
            <div className="box h-100 d-flex flex-column align-items-center  justify-content-center">
              <div className="img_box d-flex  align-items-center justify-content-center">
                <img src={card4} alt="card4" />
              </div>
              <div>
                <h3 className="mb-0 text-center ff_inter fw-light pt-5 fs_xsm">
                  Maintain communication records manually
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PreAutomation;
