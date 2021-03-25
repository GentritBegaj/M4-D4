import React from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div>
          <img
            src={this.props.book.img}
            height="50px"
            width="50px"
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
