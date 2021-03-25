import React from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Write a comment..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
