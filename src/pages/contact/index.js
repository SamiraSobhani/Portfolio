import React from "react";
import "../contact/style.css";
import { Container } from "react-bootstrap";
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
          <div className="Contact-main">
            <div className="Contact-left">
              <ContactLeft />
            </div>
            <div className="Contact-right">
              <EmailForm />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Contact;
