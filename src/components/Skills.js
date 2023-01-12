import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaGitSquare,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRuby,
  SiExpress,
  SiMongodb,
  SiSolidity,
} from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I have extensive experience building traditional web
                applications as well as decentralized applications on EVM-based
                chains. Some of my skills are as follows:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <FaReact size={70} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <FaHtml5 size={70} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <FaCss3Alt size={70} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <SiJavascript size={70} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <FaNodeJs size={70} />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <FaBootstrap size={70} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <SiRuby size={70} />
                  <h5>Ruby</h5>
                </div>
                <div className="item">
                  <SiExpress size={70} />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <SiSolidity size={70} />
                  <h5>Solidity</h5>
                </div>
                <div className="item">
                  <SiMongodb size={70} />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <FaGitSquare size={70} />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
