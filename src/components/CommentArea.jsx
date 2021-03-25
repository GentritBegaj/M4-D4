import React from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
       setComments=(comments)=>{

    this.setState({comments:comments})

  }

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
        <CommentList book={this.props.book} setComments={this.setComments} comments={this.state.comments} />
        <AddComment book={this.props.book} setComments={this.setComments}  />
      </div>
    );
  }
}

export default CommentArea;
