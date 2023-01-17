import React from "react";
import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/proj-img1.jpg";
import projImg2 from "../assets/proj-img2.jpg";
import projImg3 from "../assets/proj-img3.jpg";
import projImg4 from "../assets/proj-img4.avif";
import projImg5 from "../assets/proj-img5.jpg";
import projImg6 from "../assets/proj-default.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Block So",
      type: "Web3 Development",
      demo: "https://ethglobal.com/showcase/blockso-6s3n9",
      description:
        "Web3-first social media platform where transactions are first-class citizens! Follow your friends, celebrities, and randoms! Show off your most recent on-chain activity! Built for the EthGlobal Hackathon.",
      imgUrl: projImg1,
    },
    {
      title: "The Vault",
      type: "Fullstack Development",
      demo: "https://thevault.pages.dev/",
      description:
        "A decentralized application allowing users to interact with a collection of NFTs on the blockchain. Users can withdraw a random NFT and donate their own NFT via an ethereum smart contract.",
      imgUrl: projImg2,
    },
    {
      title: "Web3 Raffles",
      type: "Frontend Development",
      description:
        "A cryptocurrency token that allows user to earn reflections through holding. Native token is used as raffle tickets for a large prize pools. The raffle winner is determined via Chainlink’s VRF technology.",
      imgUrl: projImg3,
    },
    {
      title: "Navy Yard Salon",
      type: "Development & Design",
      demo: "https://navynails.vercel.app/",
      description:
        "A professional website for a beauty salon business located in Washington D.C, built with React.js and Bootstrap.",
      imgUrl: projImg4,
    },
    {
      title: "Skyline Imports",
      type: "Development & Design",
      demo: "https://skylineimports.vercel.app/",
      description:
        "A used Japanese vehicle e-commerce style website created with Next.js, React, and Bootstrap 5. Pages were routed using Next.js and pagination was added for displaying local JSON data.",
      imgUrl: projImg5,
    },
    {
      title: "alexdavalos.com",
      type: "Development & Design",
      demo: "https://alexdavalos.com/",
      description:
        "A personal portfolio created to showcase my projects and understanding of mobile first designs, responsive design, Bootstrap, and CSS animations.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Here are some things I have been working on. I also work as a
              freelancer, so please feel free to contact me for any inquiries.
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
