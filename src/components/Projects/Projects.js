import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Banner1 from "../../Assets/Projects/Banner1.jpg";
import Banner2 from "../../Assets/Projects/Banner2.jpg";
import Banner3 from "../../Assets/Projects/Banner3.png";
import Banner4 from "../../Assets/Projects/Banner4.png";
import Banner5 from "../../Assets/Projects/Banner5.jpg";

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
              imgPath={Banner1}
              isBlog={false}
              title="Voice & Text Translater"
              description="If you are looking for a translator, that quickly and accurately translate any text, voice, photo & picture from a foreign one to your native language or vice versa, this one is for you. You don’t need the help of a live translator anymore! Feel free to translater a spanish, russian, italian, japanese, french, portuguese and more than 50 languages."
              ghLink=""
              demoLink="https://codecanyon.net/item/voice-text-translater-android-multi-languagetranslator-admob/45959544"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banner2}
              isBlog={false}
              title="Cam Scanner"
              description="Are you looking for AI scanner app to replace CamScanner? Use Cam Scanner features to handle your paperwork with ease. Say goodbye to huge and ugly copy machines and get this ultra-fast scanner app for free now."
              ghLink=""
              demoLink="https://codecanyon.net/item/cam-scanner-2023-smart-android-app-with-admob-ads/46414020"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banner3}
              isBlog={false}
              title="Anywhere GPT"
              description="Anywhere GPT sounds like a revolutionary mobile app that can significantly enhance productivity and provide seamless AI assistance. Its salient features make it a versatile tool for a wide range of tasks, making it appealing to individuals who rely heavily on their phones for communication and work."
              ghLink=""
              demoLink="https://codecanyon.net/item/anywhere-gpt-seamless-ai-assistance-at-your-fingertips/47222402"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banner4}
              isBlog={false}
              title="Change Detection"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink="https://codecanyon.net/item/change-detection-detect-website-usage-data/47437005"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banner5}
              isBlog={false}
              title="SDK Monitor"
              description="A list of all installed apps that were downloaded from Play Store.
              A settings view, that allows user to toggle auto-sync on/off and configure what is required for a sync to occur.
              [Eventually] The plan is to have a filter screen (sort by name/last update/targetSDK value) and an about screen."
              ghLink=""
              demoLink="https://codecanyon.net/item/sdk-monitor-detect-app-updates/47513470"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
