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
          <h4>F U L L S T A C K</h4>
          <h4>D E V E L O P E R</h4>
          <p>Tel: (604) 418 6977</p>
          <p> Vancouver , BC</p>
          <p>Email: sobhani.samira@gmail.com</p>
          <p>linkedin.com/in/samira-sobhani</p>
          <p>github.com/SamiraSobhani</p>
          <p>https://samirasobhani.netlify.app</p>
        </div>

        <div className="resume-right">
          <h4>O B J E C T I V E</h4>
          <p>Earned Certification in Full-stack Development.</p>
          <p>
            My journey started by learning: Java, JavaScript, SQL, React,
            Nodejs, HTML and CSS/Sass.
          </p>
          <p>It's just the beginning…</p>
          <p>
            A developer's journey requires constant learning, no matter how long
            you have been on the road.{" "}
          </p>
          <h4>S K I L L S</h4>
          <p>Languages: Java, JavaScript</p>
          <p>Database: Relational DataBase (MySQL, Oracle)</p>
          <p>Framework: Spring </p>
          <p>Industry Knowledge: </p>
          <div className="knowledge">
            <span>
              <p>Agile methodology (Jira)</p>
              <p>Object-oriented programming (OOP)</p>
              <p>Software Development Life Cycle(SDLC)</p>
            </span>
            <span>
              <p>Unit Testing</p>
              <p>Test-Driven Development</p>
              <p>Responsive Design</p>
            </span>
          </div>
          <p>Technology Stack: </p>
          <div className="tech">
            <span>
              <p>React.js </p>
              <p>HTML5</p>
              <p>CSS </p>
              <p>Sass </p>
              <p>Zustand</p>
              <p>Web APIs</p>
              <p>User Authentication </p>
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
              <p>ORM tools such as Hibernate</p>
              <p>JDBC connection</p>
              <p>Knex</p>
              <p>JUnit</p>
              <p>RESTful Services</p>
              <p>Spring Boot</p>
            </span>
          </div>
          <h4>E D U C A T I O N</h4>
          <div className="education">
            <span className="education-left">
              <p> - BrainStation</p>
              <p>Web Development Diploma </p>
              <p> - SoftwareGuild</p>
              <p>Java Certification</p>
              <p> - Azad University</p>
              <p>Bachelors in Economics, Theoretical Economics </p>
            </span>

            <span className="education-right">
              <p>2021, VANCOUVER, CA</p>
              <p> 2020, MINNEAPOLIS, US</p>
              <p>TEHRAN, IRAN</p>
            </span>
          </div>

          <h4>P R O J E C T S </h4>
          <p>
            PinPal<span>"https://www.pinpal-market.com</span>
          </p>
          <p>
            PinPal is a map base full-stack Web Application that directly
            connects clients and suppliers. Available suppliers can accept to do
            the project within the time that the client requested.
          </p>
          <div className="projects">
            <span className="projects-left">
              <p>Front-End technologies:</p>
              <p>Google map API - reCAPTCHA v3</p>
              <p>Material UI - JWT (JSON Web tokens) </p>
              <p>JavaScript - React - HTML - Sass/CSS </p>
            </span>

            <span className="projects-right">
              <p>Server technologies :</p>
              <p>MySQL - OAuth2 -OpenID</p>
              <p>Spring Boot - Spring Security - Spring Data</p>
              <p>JAVA</p>
            </span>
          </div>
          <h4>E X P E R I E N C E</h4>
          <div className="experience">
            <span className="experience-left">
              <p> - Software Developer Internship | ABOMIS Innovations Inc. </p>
              <p>Developed passenger boarding pass </p>
              <p>
                Involved in DCS(Departure Control System) coding and acted as a
                consultant using my experience in Airline and aviation{" "}
              </p>
              <p> - Travel Consultant | Direct Travel </p>
              <p>
                Investigated all client inquiries to identify the correct
                solutions.
              </p>
              <p>
                Provided customers with recommendations for services that best
                fit their needs and budget constraints.
              </p>
              <p> - Senior Officer of Reservation/ Ticketing | Oman Air </p>
              <p>
                Collaborated with team members to streamline processes to
                perform under pressure and meet deadlines effectively
              </p>
              <p>Coach, monitor, and train teammates</p>
              <p>Travel Agent | Ostoureh Parvaz travel agency </p>
              <p>
                {" "}
                Demonstrated customer service skills by assisting all customers
                in addressing their needs
              </p>
              <h5> - Co-Manager | Atourban Advertising Co </h5>
              <p>
                Managed advertising strategies, customer retention strategies,
                and the quality control of services offered to customers
              </p>
            </span>

            <span className="experience-right">
              <p>APR 2021,VANCOUVER, BC</p>
              <p>SEP 2012 - MAR 2018, TEHRAN,IRAN </p>
              <p>JAN 2008 - AUG 2012, TEHRAN,IRAN</p>
              <p>JAN 2004- DEC 2007, TEHRAN,IRAN</p>
            </span>
          </div>
          <p>References Available Upon Request</p>
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
