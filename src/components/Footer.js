import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="">
            <h4 className="logo">Alex D</h4>
          </Col>
          <Col sm={6} className="text-center text-sm-end pt-2">
            <div className="social-icon">
              <a
                href="https://github.com/alexdavalosgit"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alex-davalos/"
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
            <p className="pt-2">Copyright 2023. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
