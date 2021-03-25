import React from "react";
import { Form, Button } from "react-bootstrap";
import { getComments } from "../utils";

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentObj: {
        comment: "",
        rate: 1,
        elementId: this.props.book.asin,
      },
    };
  }

  handleInput = (e) => {
    let id = e.target.id;
    this.setState({
      commentObj: {
        ...this.state.commentObj,
        [id]: id === "elementId" ? this.props.book.asin : e.target.value,
      },
    });
  };

  postComment = async (e) => {
    console.log(this.state.commentObj.elementId);
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentObj),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
          },
        }
      );

      if (response.ok) {
        this.props.setComments(await getComments(this.state.commentObj.elementId))
        console.log(await getComments(this.state.commentObj.elementId))
 
      } else {
        console.log("Error happened");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.postComment}>
        <Form.Group>
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            id="comment"
            type="textarea"
            rows={3}
            placeholder="Write a comment..."
            value={this.state.commentObj.comment}
            onChange={this.handleInput}
          />
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="number"
            max={5}
            id="rate"
            placeholder="Rate book"
            value={this.state.commentObj.rate}
            onChange={this.handleInput}
          />
          <Form.Label>Id:</Form.Label>
          <Form.Control
            type="number"
            id="elementId"
            placeholder="Book Id"
            value={this.state.commentObj.elementId}
            onChange={this.handleInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
