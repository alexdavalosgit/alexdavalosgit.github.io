import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Thanks for your time<br></br> & Let's connect!
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <h3>Email: a.davalos154@gmail.com</h3>
            <h3>Phone: (323)-457-4122</h3>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
