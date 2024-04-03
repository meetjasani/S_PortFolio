import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMui,
  SiTypescript,
  SiRedux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
           <Col xs={4} md={2} className="tech-icons">
        <a href="https://legacy.reactjs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react-redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
        <SiRedux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://devdocs.io/javascript/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiTypescript />
        </a>
      </Col>
   
     
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <IoLogoCss3 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiMui />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiNextdotjs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiPostgresql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiFirebase />  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.javatpoint.com/creating-api-document" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaJava />
        </a>
      </Col>
    
    </Row>
  );
}

export default Techstack;
