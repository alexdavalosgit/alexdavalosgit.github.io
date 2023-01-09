import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container className="">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span>Welcome to my Portfolio!</span>
            <h1>
              Hi I'm Alex Davalos! <span>frontend developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              molestias voluptatum eos, minus magnam minima dolores tempore
              animi facere dolore praesentium provident exercitationem omnis!
              Tempora placeat qui perferendis vero modi?
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <BsArrowLeftCircleFill size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
