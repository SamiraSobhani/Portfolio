import React, { Component } from "react";
import "../about/style.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import CV from "../../components/cv";

class About extends Component {
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Samira Sobhani</title>
          <meta
            name="description"
            content="Samira Sobhani | Full Stack Web Developer"
          />
        </Helmet>

        <Row className="About-main">
          <CV />
        </Row>
      </Container>
    );
  }
}

export default About;
