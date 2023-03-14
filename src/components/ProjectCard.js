import React from "react";
import { Col, Button, Image, OverlayTrigger, Popover } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo, type }) => {
  return (
    <Col sm={6} lg={4}>
      <div className="proj-imgbx">
        <Image fluid src={imgUrl} alt="project visual" />
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
          {description ? (
            <OverlayTrigger
              trigger="click"
              rootClose="true"
              placement="auto"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header
                    as="h3"
                    style={{ "background-color": "#c62e42" }}
                  >
                    More About: {title}
                  </Popover.Header>
                  <Popover.Body>{description}</Popover.Body>
                </Popover>
              }
            >
              <Button variant="light" size="sm" className="mt-2 mx-1">
                About
              </Button>
            </OverlayTrigger>
          ) : (
            ""
          )}
        </div>
      </div>
    </Col>
  );
};
