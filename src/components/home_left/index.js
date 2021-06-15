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
          <p className="second_line">
            I am <strong>Samira Sobhani</strong>
          </p>
          <h5 className="typical">Full-Stack Web Developer ... </h5>
          <br/>
          <h3 className="home-description">
            <ReactTypingEffect
              text="I am not a quitter but a die-hard. 
              I have improved from junior travel agent to senior airline supervisor. 
              I look forward to honing my talents and increasingly contributing to an impactful company. "
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
