import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import postautomationcard from "../assets/img/png/pt.png";
import img1 from "../assets/img/png/invoice.png";
import img2 from "../assets/img/png/code.png";
import img3 from "../assets/img/png/file.png";
import img4 from "../assets/img/png/send.png";
import img5 from "../assets/img/png/invoice1.png";
import arrow3 from "../assets/img/png/3arrow.png";
import a_full from "../assets/img/png/a_full.png";
import browser_half from "../assets/img/png/browser_half.png";
import cross2 from "../assets/img/png/cross2.png";
function PostAutomation() {
  return (
    <section className="mt-5 pt-5 position-relative">
      {" "}
      <img
        className="position-absolute d-none d-md-flex c_img_Adjust"
        src={cross2}
        alt="src={cross2}"
      />
      <img
        className="position-absolute d-none d-md-flex c2_img_Adjust"
        src={cross2}
        alt="src={cross2}"
      />
      <img
        className="position-absolute end-0 top_10 d-none d-md-flex"
        src={browser_half}
        alt="browser_half"
      />
      <img
        className="position-absolute a_fullimg_adjust  d-none d-md-flex"
        src={a_full}
        alt="a_full"
      />
      <div className="box_card position-absolute d-none d-md-flex "></div>
      <div className="box_card position-absolute d-none d-md-flex box_Card2adjust"></div>
      <Container>
        <div>
          <h2 className="mb-0 dark_blue ff_inter fw-bold fs_xxl text-center">
            Post-Automation
          </h2>
          <p className="mb-0 fw-normal fs_md ff_inter text-center pt-4">
            <span className="fw-bold">End-to-end automation</span> on the Yardi
            platform
          </p>
        </div>
        <Row className="justify-content-center pt-5">
          <Col lg={4} sm={6} className="pt-4">
            <div className="position-relative">
              {" "}
              <img
                className="h-100"
                src={postautomationcard}
                alt="postautomationcard"
              />
              <div className="position-absolute img_adjust">
                <img src={img1} alt="img1" />
                <p className="mb-0 pt-5 ff_inter fw-medium fs_sm">
                  System picks up invoices{" "}
                  <span className="clr_orange ">automatically</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="pt-4">
            <div className="position-relative">
              {" "}
              <img
                className="position-absolute arrow3_adjust d-none d-sm-flex"
                src={arrow3}
                alt="arrow3"
              />
              <img
                className="h-100"
                src={postautomationcard}
                alt="postautomationcard"
              />
              <div className="position-absolute img_adjust">
                <img src={img2} alt="img2" />
                <p className="mb-0 pt-5 ff_inter fw-medium fs_sm">
                  Validating businessrules,{" "}
                  <span className="clr_orange ">coding,</span>and{" "}
                  <span className="clr_orange ">handling exceptions</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="pt-4">
            <div className="position-relative">
              {" "}
              <img
                className="position-absolute arrow3_adjust d-none d-sm-flex"
                src={arrow3}
                alt="arrow3"
              />
              <img
                className="h-100"
                src={postautomationcard}
                alt="postautomationcard"
              />
              <div className="position-absolute img_adjust">
                <img src={img3} alt="img3" />
                <p className="mb-0 pt-5 ff_inter fw-medium fs_sm">
                  <span className="clr_orange ">Invoice distribution</span> by
                  gathering contact details{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="pt-4">
            <div className="position-relative">
              {" "}
              <img
                className="position-absolute arrow3_adjust d-none d-sm-flex d-lg-none"
                src={arrow3}
                alt="arrow3"
              />
              <img
                className="h-100"
                src={postautomationcard}
                alt="postautomationcard"
              />
              <div className="position-absolute img_adjust">
                <img src={img4} alt="img4" />
                <p className="mb-0 pt-5 ff_inter fw-medium fs_sm">
                  <span className="clr_orange ">Sending emails</span> with
                  attachments with invoices to the recipients.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="pt-4">
            <div className="position-relative">
              {" "}
              <img
                className="position-absolute arrow_adjust d-none d-sm-flex"
                src={arrow3}
                alt="arrow3"
              />
              <img
                className="h-100"
                src={postautomationcard}
                alt="postautomationcard"
              />
              <div className="position-absolute img_adjust">
                <img src={img5} alt="img5" />
                <p className="mb-0 pt-5 ff_inter fw-medium fs_sm">
                  {" "}
                  Finance receives system-generated{" "}
                  <span className="clr_orange "> automated summaries</span>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PostAutomation;
