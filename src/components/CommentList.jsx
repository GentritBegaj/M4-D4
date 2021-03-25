import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import {getComments} from '../utils'

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount = async () => {
this.props.setComments( await getComments(  this.props.book.asin))
  
     

  };

  render() {
    return (
      <ListGroup variant="flush" className="mb-1">
        {this.props.comments.map((comment) => (
      
          <SingleComment
            key={Math.ceil(Math.random() * 1000000)}
            comment={comment}
            setComments={this.props.setComments}
          />
        
      
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
