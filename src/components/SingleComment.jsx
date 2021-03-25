import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { deleteComment } from "../utils";

class SingleComment extends React.Component {
  removeComment = async (commentId, bookId) => {
    const comments = await deleteComment(commentId, bookId);
    this.props.setComments(comments);
  };

  render() {
    return (
      <div className="d-flex justify-content-between mt-1">
        <ListGroup.Item>{this.props.comment.comment}</ListGroup.Item>
        <Button
          className="btn-sm btn"
          id={this.props.comment._id}
          onClick={() =>
            this.removeComment(
              this.props.comment._id,
              this.props.comment.elementId
            )
          }
        >
          X
        </Button>
      </div>
    );
  }
}

export default SingleComment;
