import React, { useState } from "react";
import "../project_card_details/style.css";
import { Col, Row, Card, Button, Image } from "react-bootstrap";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastsContainer, ToastsStore } from "react-toasts";
import GitLogo from "../../assets/img/git.svg";

const PCD = () => {
  const [git] = useState([]);

  return (
    <Row>
      {git.map((item) => (
        <Col xl={6} key={item.id}>
          <Card className="pro_card">
            <Row>
              <Col xl={12} className="project_img_container">
                <Image className="project_card_left_img" src={GitLogo} />
              </Col>
              <Col xl={12}>
                <Card.Title className="repoName">Name: {item.name}</Card.Title>
                
                <Card.Body className="project_card_main">
      
                  <ToastsContainer store={ToastsStore} timer="10000" />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default PCD;
