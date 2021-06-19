import React, { Component } from "react";
import "../about/style.css";
// import { Container, Row } from "react-bootstrap";
// import { Helmet } from "react-helmet";
// import CV from "../../components/cv";

class About extends Component {
  render() {
    return (
      <div className="myresume">
        <div className="resume-left">
          <h1 className="resume-name">SAMIRA SOBHANI</h1>
          <br />
          <h4 className="resume-leftTitle">F U L L - S T A C K</h4>
          <h4 className="resume-leftTitle">D E V E L O P E R</h4>
          <br />
          <p className="resume-leftContact">Tel: (604) 418 6977</p>
          <p className="resume-leftContact"> Vancouver , BC</p>
          <p className="resume-leftContact">Email: sobhani.samira@gmail.com</p>
          <p className="resume-leftContact">linkedin.com/in/samira-sobhani</p>
          <p className="resume-leftContact">github.com/SamiraSobhani</p>
          <p className="resume-leftContact">
            https://samirasobhani.netlify.app
          </p>
        </div>

        <div className="resume-right">
          <h4 className="resume-header">O B J E C T I V E</h4>
          <div className="resume-content">
            <p>&nbsp;Earned Certification in Full-stack Development.</p>
            <p>
              &nbsp;My journey started by learning: Java, JavaScript, SQL,
              React, Nodejs, HTML and CSS/Sass.
            </p>
            <p>&nbsp;It's just the beginning…</p>
            <p>
              &nbsp;A developer's journey requires constant learning, no matter
              how long you have been on the road.{" "}
            </p>
          </div>
          <h4 className="resume-header">S K I L L S</h4>
          <div className="resume-content">
            <h6> - Languages: Java, JavaScript</h6>
            <h6> - Database: Relational DataBase (MySQL, Oracle)</h6>
            <h6> - Framework: Spring </h6>
            <h6> - Industry Knowledge: </h6>
            <div className="knowledge">
              <span>
                <p>Agile methodology (Jira)</p>
                <p>Object-oriented programming (OOP)</p>
                <p>Software Development Life Cycle(SDLC)</p>
              </span>
              <span className="knowledge-right">
                <p>Unit Testing</p>
                <p>Test-Driven Development</p>
                <p>Responsive Design</p>
              </span>
            </div>
            <h6> - Technology Stack: </h6>
            <div className="tech">
              <span>
                <p>React.js </p>
                <p>HTML5</p>
                <p>CSS </p>
                <p>Sass </p>
                <p>Zustand</p>
                <p>Web APIs</p>
                <p>User Authentication </p>
              </span>
              <span>
                <p>Netlify </p>
                <p>Web Sockets</p>
                <p>Document Object Model (DOM)</p>
                <p>GitHub, Git </p>
                <p>Bootstrap</p>
                <p> Material-UI </p>
                <p>JSON Web Token (JWT)</p>
              </span>
              <span>
                <p>Maven</p>
                <p>Node.js</p>
                <p>Spring security</p>
                <p>Spring Data</p>
                <p>Express.js</p>
                <p>OpenID</p>
                <p>OAuth2</p>
              </span>
              <span>
                <p>ORM tools such as Hibernate</p>
                <p>JDBC connection</p>
                <p>Knex</p>
                <p>JUnit</p>
                <p>RESTful Services</p>
                <p>Spring Boot</p>
              </span>
            </div>
          </div>
          <h4 className="resume-header">E D U C A T I O N</h4>
          <div className="education resume-content">
            <span className="education-left">
              <h6> - BrainStation</h6>
              <p>Web Development Diploma </p>
              <h6> - SoftwareGuild</h6>
              <p>Java Certification</p>
              <h6> - Azad University</h6>
              <p>Bachelors in Economics, Theoretical Economics </p>
            </span>

            <span className="education-right">
              <p>2021, VANCOUVER, CA</p>
              <p> 2020, MINNEAPOLIS, US</p>
              <p>TEHRAN, IRAN</p>
            </span>
          </div>

          <h4 className="resume-header">P R O J E C T S </h4>
          <div className="resume-content">
            <h6>
              &nbsp;PinPal{" "}
              <span>&nbsp; &nbsp;&nbsp; "https://www.pinpal-market.com"</span>
            </h6>
            <p className="pinpal-content">
              PinPal is a map base full-stack Web Application that directly
              connects clients and suppliers. Available suppliers can accept to
              do the project within the time that the client requested.
            </p>
            <div className="projects">
              <span className="projects-left">
                <h6> - Front-End technologies:</h6>
                <p>Google map API - reCAPTCHA v3</p>
                <p>Material UI - JWT (JSON Web tokens) </p>
                <p>JavaScript - React - HTML - Sass/CSS </p>
              </span>

              <span className="projects-right">
                <h6> - Server technologies :</h6>
                <p>MySQL - OAuth2 -OpenID</p>
                <p>Spring Boot - Spring Security - Spring Data</p>
                <p>JAVA</p>
              </span>
            </div>
          </div>
          <h4 className="resume-header">E X P E R I E N C E</h4>
          <div className="experience resume-content">
            <span className="experience-left">
              <h6>
                {" "}
                - Software Developer Internship | ABOMIS Innovations Inc.{" "}
              </h6>
              <p> &nbsp;- Developed passenger boarding pass </p>
              <p className="job-description">
                &nbsp;- Involved in DCS(Departure Control System) coding and
                acted as a consultant using my experience in Airline and
                aviation{" "}
              </p>
              <h6> - Travel Consultant | Direct Travel </h6>
              <p>
                &nbsp;- Investigated all client inquiries to identify the
                correct solutions.
              </p>
              <p className="job-description">
                &nbsp;- Provided customers with recommendations for services
                that best fit their needs and budget constraints.
              </p>
              <h6> - Senior Officer of Reservation/ Ticketing | Oman Air </h6>
              <p className="job-description">
                &nbsp;- Collaborated with team members to streamline processes
                to perform under pressure and meet deadlines effectively
              </p>
              <p> &nbsp;- Coach, monitor, and train teammates</p>
              <h6> - Travel Agent | Ostoureh Parvaz travel agency </h6>
              <p>
                {" "}
                &nbsp;- Demonstrated customer service skills by assisting all
                customers in addressing their needs
              </p>
              <h6> - Co-Manager | Atourban Advertising Co </h6>
              <p className="job-description">
                &nbsp;- Managed advertising strategies, customer retention
                strategies, and the quality control of services offered to
                customers
              </p>
            </span>

            <span className="experience-right">
              <p>APR 2021 - present,VANCOUVER, BC</p>
              <p>JAN 2019 - DEC 2020, VANCOUVER, BC</p>
              <p>SEP 2012 -MAR 2018, TEHRAN,IRAN </p>
              <p>JAN 2008 -AUG 2012, TEHRAN,IRAN</p>
              <p>JAN 2004 -DEC 2007, TEHRAN,IRAN</p>
            </span>
          </div>
          <p className="resume-footer">References Available Upon Request</p>
        </div>
      </div>

      // <Container className="About-header" fluid={true}>
      //   <Helmet>
      //     <meta charSet="utf-8" />
      //     <title>About | Samira Sobhani</title>
      //     <meta
      //       name="description"
      //       content="Samira Sobhani | Full Stack Web Developer"
      //     />
      //   </Helmet>

      //   <Row className="About-main">
      //     <CV />
      //   </Row>
      // </Container>
    );
  }
}

export default About;
