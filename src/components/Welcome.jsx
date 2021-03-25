import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="Jumbo">
        <Container>
          <h1>Book Store</h1>
          <p>Books from all categories can be found here</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Welcome;
