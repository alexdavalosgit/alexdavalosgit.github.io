import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import headerImg from "../assets/header-img.avif";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Frontend Developer", "Web3 Developer", "Web Designer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container className="">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Alex `}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              molestias voluptatum eos, minus magnam minima dolores tempore
              animi facere dolore praesentium provident exercitationem omnis!
              Tempora placeat qui perferendis vero modi?
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <BsArrowRightCircleFill size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
