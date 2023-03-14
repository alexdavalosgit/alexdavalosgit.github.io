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
              {`Hi! I'm Alex`}{" "}
              <span
                className="txt-rotate"
                data-period="1000"
                data-rotate='[ "Frontend Developer", "Web3 Developer", "Web Designer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I'm an experienced software developer who's passionate about
              building engaging user interfaces and exploring the potential of
              blockchain technology. I've worked on various startup projects in
              the web3 space, and enjoy learning new skills to stay up-to-date
              with the latest advancements. In my free time, I love training in
              kickboxing and jiu jitsu, and taking long walks with my dog. Let's
              build something great together!
            </p>
            <button className="hide-sm-btn">
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
