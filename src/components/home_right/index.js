import React from "react";
import "../home_right/style.css";
import Samira from "../../assets/img/samira1.jpg";
import { Container, Image } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Home_Right() {
  return (
    <Container className="home-right">
      <div className="home-right-main">
        <Image
          src={Samira}
          className="home-right-main-img"
          alt="Image of Samira Sobhani"
        />
        <SocialIcons />
      </div>
    </Container>
  );
}

export default Home_Right;
