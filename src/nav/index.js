import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Project from "../pages/projects";
import "../nav/navbar.css";
import { Button } from "react-bootstrap";
export default function Nav() {
  return (
    <>
      <Router>
        <div className="navbar">
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              to="/project"
              style={{ textDecoration: "none" }}
              className="home-left-aboutme"
            >
              Projects
            </Link>
          </Button>{" "}
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              style={{ textDecoration: "none" }}
              to="/about"
              className="home-left-aboutme"
            >
              About Me
            </Link>
          </Button>
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              style={{ textDecoration: "none" }}
              to="/contact"
              className="home-left-aboutme"
            >
              Contact Me
            </Link>
          </Button>
        </div>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
