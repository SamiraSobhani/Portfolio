import React from "react";
import "../home_left/style.css";
import { Container } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

function Home_Left() {
  return (
    <Container className="home-left">
      <div className="home-left-main">
        <div className="home-left-main-col">
          <h1 className="first-line">Hello!</h1>
          <p className="second_line">
            I am <strong>Samira Sobhani</strong>
          </p>

          <ReactTypingEffect
            text="Full-Stack Web Developer ...  "
            className="typical"
            speed="100"
            eraseDelay="500000"
          />
          <br />
          <br />
          <p className="home-description">
            I am not a quitter but a die-hard. I have improved from junior
            travel agent to senior airline supervisor. I look forward to honing
            my talents and increasingly contributing to an impactful company.
          </p>

          <br />
        </div>
      </div>
    </Container>
  );
}

export default Home_Left;
