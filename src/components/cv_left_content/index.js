import React, { Component } from "react";
import "../cv_left_content/style.css";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import cv1 from "../../assets/img/cv1.png";
import Lightbox from "react-image-lightbox";
import { Modal, Button } from "react-bootstrap";
import Projects from "../projects";


const images = [cv1];

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { photoIndex, isOpen, show } = this.state;
    return (
      <Slide left>
        <Bounce>
          <div className="clc_main">
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
            <Modal show={show} size="xl" onHide={this.toggleModal} centered>
              <Modal.Header className="modalHeader" closeButton>
                <Projects />
              </Modal.Header>
              <Button
                onClick={() => this.setState({ show: false })}
                variant="outline-light"
                size="lg"
                className="modal-exit-btn about_modal"
              >
                Close
              </Button>
            </Modal>
          </div>
        </Bounce>
      </Slide>
    );
  }
}

export default CLC;
