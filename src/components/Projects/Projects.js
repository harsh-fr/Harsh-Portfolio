import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drumkit from "../../Assets/Projects/drum_kit.png";
import flappybird from "../../Assets/Projects/flappybird.png";
import sortingvis from "../../Assets/Projects/sorting_vis.png";
import letschat from "../../Assets/Projects/lets_chat.png";
import simongame from "../../Assets/Projects/simongame.png";
import permalist from "../../Assets/Projects/permalist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letschat}
              isBlog={false}
              title="Lets-Chat"
              description="A full stack chat app which supports peraonal and group chat functionality."
              ghLink="https://github.com/harsh-fr/Lets-Chat"
              demoLink="https://drive.google.com/file/d/1YY3JIKEI1ouedr_us66g_4bSilql8IIm/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={permalist}
              isBlog={false}
              title="Permalist"
              description="A todo-list which leverages Postgres SQL for data persistance."
              ghLink="https://github.com/harsh-fr/todo_list-db-"
              demoLink="https://drive.google.com/file/d/1_uscRsJNhB903n8WRRpJdfo5zrUz9p6P/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortingvis}
              isBlog={false}
              title="Sorting Visualiser"
              description="A sorting visualizer allowing users to visualize the sorting process in real time."
              ghLink="https://github.com/harsh-fr/Sorting-Visualizer"
              demoLink="https://drive.google.com/file/d/1tZ-gr7rC4WUOTtmGLc_NGlkz-aV0LBVS/view"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Online Drum Kit"
              description="A fully functional online drum-kit which can be played using both keyboard and mouse pointer."
              ghLink="https://github.com/harsh-fr/drum_kit_webD"
              demoLink="https://drive.google.com/file/d/11dKn5s7sHYVaknG4d6uooKAN0FrV4Fnf/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simongame}
              isBlog={false}
              title="Simon Game"
              description="A web replica of classic Simon Game with audio visual feedbacks."
              ghLink="https://github.com/harsh-fr/Simon-Game"
              demoLink="https://drive.google.com/file/d/1RfJ9H8z_MoMnbShUPWzI6koAn1o3tUi9/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappybird}
              isBlog={false}
              title="Flappy Bird"
              description="A replica of Flappy-Bird Game made using pygames library."
              ghLink="https://github.com/harsh-fr/Flappy-Bird"
              demoLink="https://drive.google.com/file/d/16Qu7Y_OlT1WCa90kkLuhlLkIE-NIqfsC/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
