import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp;
      <a
        href="https://github.com/SamiraSobhani"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      &nbsp; &nbsp;
      <a
        href="https://www.linkedin.com/in/Samira-sobhani/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
