import React from "react";
import "../contact/style.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactLeft from "../../components/contact_left";
import EmailForm from "../../components/email_form";
import { Helmet } from "react-helmet";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Samira Sobhani</title>
          <meta
            name="description"
            content="Samira Sobhani | Full Stack Web Developer"
          />
        </Helmet>
        <Container className="Contact-header" fluid={true}>
          <Row className="Contact-main">
            <Col xl={6} className="Contact-left">
              <ContactLeft />
            </Col>
            <Col xl={6} className="Contact-right">
              <EmailForm />
            </Col>
          </Row>
          <Row className="Contact-footer"></Row>
        </Container>
      </div>
    );
  }
}
export default Contact;
