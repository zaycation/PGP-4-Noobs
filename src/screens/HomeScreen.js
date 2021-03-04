import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Toc from "../components/Toc";
import MainNavbar from "../components/MainNavbar";
import Intro from "../components/Intro";
import History from "../components/History";
import Install from "../components/Install";
import Create from "../components/Create";
import Changing from "../components/Changing";
import Using from "../components/Using";
import Emails from "../components/Emails";
import Unencrypted from "../components/Unencrypted";
import Else from "../components/Else";
import Personal from "../components/Personal";
import Wipe from "../components/Wipe";
import Options from "../components/Options";
import Acknowledgements from "../components/Acknowledgements";

import "../css/HomeScreen.css";

const HomeScreen = () => {
  const [section, setSection] = useState("about");

  return (
    <>
      <Container
        fluid={true}
        className="fluid-container"
        style={{ height: "100%" }}
      >
        <MainNavbar />
      </Container>
      <Container fluid={true}>
        <Row>
          <Col sm={12} md={3}>
            <div className="nav__options position-sm-static position-md-fixed my-5">
              {/*
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("toc");
                }}
              >
                Table of Contents
              </h6>
                */}
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("intro");
                }}
              >
                Introduction: A word about PGP
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("history");
                }}
              >
                PGP: A Brief History
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("install");
                }}
              >
                1) Installing the PGP Software
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("create");
                }}
              >
                2) Creating your Public and Private Keys
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("changing");
                }}
              >
                3) Changing your Passphrase
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("using");
                }}
              >
                4) Using Your Public Key
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("emails");
                }}
              >
                5) Using PGP to Send & Receive E-mails
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("unencrypted");
                }}
              >
                6) PGP Signing Your Unencrypted E-mails
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("else");
                }}
              >
                7) Signing Someone Else's Public Key
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("personal");
                }}
              >
                8) Using PGP to Encrypt Your Personal Docs
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("wipe");
                }}
              >
                9) Using PGP to Wipe files from your disks
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("options");
                }}
              >
                10) Useful PGP Options you should know about
              </h6>
              <h6
                className="font-weight-bold"
                onClick={() => {
                  setSection("ack");
                }}
              >
                Acknowledgements
              </h6>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="right__section">
              <div className="header__section">
                <br />

                <h3 className="my-5">PGP 4 Noobs</h3>
                <p>
                  Click any of the sections in the Table of Contents to get
                  started u noob!
                </p>
              </div>
              {/*section === "toc" && <Toc />*/}
              {section === "intro" && <Intro />}
              {section === "history" && <History />}
              {section === "install" && <Install />}
              {section === "create" && <Create />}
              {section === "changing" && <Changing />}
              {section === "using" && <Using />}
              {section === "emails" && <Emails />}
              {section === "unencrypted" && <Unencrypted />}
              {section === "else" && <Else />}
              {section === "personal" && <Personal />}
              {section === "wipe" && <Wipe />}
              {section === "options" && <Options />}
              {section === "ack" && <Acknowledgements />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
