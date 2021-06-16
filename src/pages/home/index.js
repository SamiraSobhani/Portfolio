import React from "react";
import "../home/style.css";
import HomeLeft from "../../components/home_left";
import HomeRight from "../../components/home_right";
import { Container } from "react-bootstrap";
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
        <div className="App-main">
          <div className="App-left">
            <HomeLeft />
          </div>
          <div className="App-right">
            <HomeRight />
          </div>
        </div>
       
      </Container>
    </div>
  );
}

export default Home;
