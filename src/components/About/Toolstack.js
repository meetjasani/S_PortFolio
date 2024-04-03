import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiSublimetext 
} from "react-icons/si";
import { FaTrello,FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
      <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
        <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
        <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://trello.com/platforms" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
      <FaTrello />
      </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://slack.com/intl/en-in/downloads/windows" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiSlack />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiVercel />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <SiSublimetext />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://support.apple.com/en_IN/downloads/macos" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> 
          <SiMacos />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/software-download/windows11" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> 
          <FaWindows />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
