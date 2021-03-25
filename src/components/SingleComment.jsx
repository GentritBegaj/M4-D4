import React from "react";
import { ListGroup, Button } from "react-bootstrap";

class SingleComment extends React.Component {
  deleteComment = async (e) => {
    console.log(e);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + e.target.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
          },
        }
      );

      if (response.ok) {
        alert("Comment deleted");
      } else {
        alert("Error happened");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-between">
        <ListGroup.Item>{this.props.comment.comment}</ListGroup.Item>
        <Button id={this.props.comment.elementId} onClick={this.deleteComment}>
          x
        </Button>
      </div>
    );
  }
}

export default SingleComment;
