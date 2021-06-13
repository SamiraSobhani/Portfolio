import React from "react";
import "../home_left/style.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

function Home_Left() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h1 className="first-line">Hello!</h1>
          <h2 className="second_line">
            I am <strong>Samira Sobhani</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text="Full Stack Web Developer ... " //text=["Hello.", "World!"]
              className="typical"
              speed="100"
              eraseDelay="500000"
            />
          </h3>
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
