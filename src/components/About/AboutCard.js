import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Healter </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a software developer at TCS.
            <br />
            I have completed Integrated MCA (Master of Computer Application) in Berlin International University of Applied Sciences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web design
            </li>
            <li className="about-activity">
              <ImPointRight /> Computer programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Internet Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Books Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A year from now,you may wish you had stared today."{" "}
          </p>
          <footer className="blockquote-footer">Healter</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
