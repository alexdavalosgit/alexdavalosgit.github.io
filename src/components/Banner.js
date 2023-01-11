import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import headerImg from "../assets/header-img.avif";
import { HashLink } from "react-router-hash-link";

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
              I am an experienced developer with a passion for frontend and web3
              technologies. I have extensive experience building traditional web
              applications as well as decentralized applications on blockchain.
              I have worked on multiple different startup projects in web3, and
              have built a wide variety of web applications and user interfaces.
              In my free time, I enjoy programming, training in kickboxing, jiu
              jitsu, and walking my dog!
            </p>
            <button>
              <a
                href="https://www.linkedin.com/in/alex-davalos/"
                rel="noreferrer"
                target="_blank"
              >
                Let's Connect <BsArrowRightCircleFill size={25} />
              </a>
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
