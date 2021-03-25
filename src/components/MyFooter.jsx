import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MyFooter.css";

class MyFooter extends React.Component {
  render() {
    return (
      <div className="footer-div mt-5">
        <Container fluid className="text-center">
          <Row>
            <Col xs={6} sm={4}>
              <div>
                <a href="#">Lorem Ipsum</a>
              </div>
              <div>
                <a href="#">Lorem Ipsum</a>
              </div>
              <div>
                <a href="#">Lorem Ipsum</a>
              </div>
            </Col>
            <Col xs={6} sm={4}>
              <div>
                <a href="#">Lorem Ipsum</a>
              </div>
              <div>
                <a href="#">Lorem Ipsum</a>
              </div>
            </Col>
            <Col xs={6} sm={4}>
              <div>
                <a href="#">Lorem Ipsum</a>
              </div>
            </Col>
          </Row>
          <p className="text-muted text-center mt-5">
            © Book Store {new Date().getFullYear()}
          </p>
        </Container>
      </div>
    );
  }
}

export default MyFooter;
