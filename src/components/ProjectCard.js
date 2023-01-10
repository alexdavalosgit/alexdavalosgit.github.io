import React from "react";
import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo, type }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project visual" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{type}</span>
          <br />
          {demo ? (
            <Button
              className="mt-2"
              variant="light"
              size="sm"
              href={demo}
              target="_blank"
            >
              Demo
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Col>
  );
};
