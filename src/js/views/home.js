import React from "react";
import "../../styles/home.css";
import { Box } from "../component/herosection";
import "../../styles/aifeatures.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import PartApiCont from "../component/partapi";
import ContactUs from "../component/contactus";
import VideoCard from "../component/video";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <Box />
      <div className="container">
        <Row className="m-auto align-self-center">
          <Col className="a">
            <Card
              style={{ width: "22.5rem", background: "rgba(24, 24, 28, 0.85)" }}
            >
              {" "}
              {/* Added opacity to the background */}
              <VideoCard />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Card Title 1</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="frame" variant="primary">
                  Test Feature
                </Button>{" "}
                {/* Added className "frame" */}
              </Card.Body>
            </Card>
          </Col>
          <Col className="a">
            <Card
              style={{ width: "22.5rem", background: "rgba(24, 24, 28, 0.85)" }}
            >
              {" "}
              <Card.Img variant="top" src="#" />
              
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Card Title 2</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="frame" variant="primary">
                  Test Feature
                </Button>{" "}
                {/* Added className "frame" */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{ height: "55px" }}></div>
        {/* Spacing between the card groups */}
        <Row className="m-auto align-self-center">
          <Col className="a">
            <Card
              style={{ width: "22.5rem", background: "rgba(24, 24, 28, 0.85)" }}
            >
              {" "}
              {/* Added opacity to the background */}
              <Card.Img variant="top" src="#" />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Card Title 3</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="frame" variant="primary">
                  Test Feature
                </Button>{" "}
                {/* Added className "frame" */}
              </Card.Body>
            </Card>
          </Col>
          <Col className="a">
            <Card
              style={{ width: "22.5rem", background: "rgba(24, 24, 28, 0.85)" }}
            >
              {" "}
              {/* Added opacity to the background */}
              <Card.Img variant="top" src="#" />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Card Title 4</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="frame" variant="primary">
                  Test Feature
                </Button>{" "}
                {/* Added className "frame" */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container-fluid contact-us">
        <PartApiCont />
      </div>
      <div>
        <ContactUs />
        {/* </div> */}
      </div>
    </div>
  );
};


