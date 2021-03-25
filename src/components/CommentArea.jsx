import React from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="my-1">
          <img
            src={this.props.book.img}
            height="100px"
            width="200px"
            alt="img-caption"
          />
        </div>
        <CommentList book={this.props.book} />
        <AddComment book={this.props.book} />
      </div>
    );
  }
}

export default CommentArea;
