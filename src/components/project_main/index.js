import React, { Component } from "react";
import "../project_main/style.css";
import { Col, Card, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import info from "../../const/project_info.json";
import { ReactVideo } from "reactjs-media";
import PinPalVideo from "../../assets/img/PinPalVideo.mp4";
import PinPalPoster from "../../assets/img/pinpalPoster.JPG";
import CoffeeShopVideo from "../../assets/img/CoffeeShopVideo.mp4";
import CoffeeShopPoster from "../../assets/img/coffeeShop.JPG";
import BookStoreVideo from "../../assets/img/BookStoreVideo.mp4";
import BookStorePoster from "../../assets/img/bookstore.JPG";
import GitIcon from "../../assets/img/git.svg";
export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image: "",
    };
  }

  render() {
    return (
      <div className="projects">
        <span className="projects__video">
          <br />
          <ReactVideo
            poster={PinPalPoster}
            src={PinPalVideo}
            primaryColor="darkred"
          />
          <br />
          <ReactVideo
            poster={BookStorePoster}
            src={BookStoreVideo}
            primaryColor="darkred"
          />
          <br />
          <ReactVideo
            poster={CoffeeShopPoster}
            src={CoffeeShopVideo}
            primaryColor="darkred"
          />
        </span>
        <Row className="main_row">
          {info.data.map((item) => (
            <Col xl={4} key={item.id} className="card_col">
              <Card className="card_main">
                <blockquote className="blockquote mb-0 card-body">
                  <h2>{item.name}</h2>
                  <footer className="blockquote-footer">
                    built using{" "}
                    <strong title="Source Title">{item.tools}</strong>
                  </footer>
                </blockquote>
                <Card.Body>
                  <FontAwesomeIcon
                    onClick={() =>
                      this.setState({ isOpen: true, image: item.image })
                    }
                    className="icon"
                    size="lg"
                    // icon={faImages}
                  />{" "}
                  &nbsp;&nbsp;
                  {item.link !== false && (
                    <Card.Link href={item.link} target="_blank">
                      <img src={GitIcon}></img>
                      
                    </Card.Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
