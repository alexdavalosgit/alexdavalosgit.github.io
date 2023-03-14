import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/proj-img1.jpg";
import projImg2 from "../assets/proj-img2.jpg";
import projImg3 from "../assets/proj-img3.jpeg";
import projImg4 from "../assets/proj-img4.avif";
import projImg5 from "../assets/proj-img5.jpg";
import projImg6 from "../assets/proj-img6.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Blockso",
      type: "Web3 Development",
      demo: "https://blockso.fun/",
      description:
        "Blockso.fun is a cutting-edge web platform that brings the power of blockchain to the social media world. By combining the best features of Twitter and Etherscan, it allows users to create personalized feeds and interact with on-chain activity in real-time.",
      imgUrl: projImg1,
    },
    {
      title: "The Vault",
      type: "Fullstack Development",
      demo: "https://thevault.pages.dev/",
      description:
        "A decentralized application allowing users to interact with a collection of NFTs on the blockchain. Users can withdraw a random NFT and deposit their own NFT via an ethereum smart contract.",
      imgUrl: projImg2,
    },
    {
      title: "Snapifications!",
      type: "Frontend Development",
      demo: "https://push-protocol-mm-snap-site-git-main-power-eth-protonmailc.vercel.app/",
      description:
        "Leveraged the power of Push Protocol and Metamask Snaps to enable users to receive notifications directly on their Metamask wallet. Submitted to EthDenver 2023 Hackathon.",
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
      title: "NFT Viewer",
      type: "Frontend Development",
      demo: "https://nft-display-seven.vercel.app/",
      description:
        "An app that allows users to view their Non-Fungible Tokens (NFTs) by entering their Ethereum address.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p className="fs-5">
              I'm currently working on a few exciting projects that are pushing
              the boundaries of traditional web development and exploring the
              potential of blockchain technology.
            </p>
            <p className="fs-6">
              As a freelancer, I'm always open to new opportunities and
              challenges, and am available to work on a wide range of projects.
              Whether you need help with building a decentralized application,
              designing a user-friendly interface, or developing a scalable
              backend, I have the skills and expertise to deliver high-quality
              results.
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
