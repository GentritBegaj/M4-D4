import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.book.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
        this.setState({ comments: comments });
      } else {
        console.log("Error happened");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ListGroup variant="flush">
        {this.state.comments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
