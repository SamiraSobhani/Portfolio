import React, { Component } from "react";
import "../projects/style.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ProjectBody from "../../components/project_main";

class Projects extends Component {
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Project | Samira Sobhani</title>
          <meta
            name="description"
            content="Samira Sobhani | Full Stack Web Developer"
          />
        </Helmet>

        <Row className="About-main">
          <ProjectBody />
        </Row>
        <br />
      </Container>
    );
  }
}

export default Projects;
