import React from "react";
import "../home/style.css";
import HomeLeft from "../../components/home_left";
import HomeRight from "../../components/home_right";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Samira Sobhani</title>
        <meta
          name="description"
          content="Samira Sobhani | Full Stack Web Developer"
        />
      </Helmet>
        <Container className="App-header" fluid={true}>
          <Row className="App-main">
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>
            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
          </Row>
          <Row className="App-footer"></Row>
        </Container>
    </div>
  );
}

export default Home;
