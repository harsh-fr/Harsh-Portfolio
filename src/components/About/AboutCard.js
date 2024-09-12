import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple"> Harsh Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently pursuing bachelors of Technology at IIT Dhanbad.
            <br />
            I have built my skills in sofware development and programming.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Physics and Mathematics.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
